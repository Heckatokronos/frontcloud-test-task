import { ChangeEvent, Ref, forwardRef, useCallback } from "react";
import { SelectProps } from "./types";

import styles from "./Select.module.scss";

export const Select = forwardRef(
  (props: SelectProps, ref: Ref<HTMLSelectElement>) => {
    const {
      onChange,
      onChangeSelect,
      id,
      name,
      options,
      optionPlaceholder,
      error,
      label,
      ...restProps
    } = props;

    const mappedOptions =
      options &&
      options.map((item, i) => (
        <option key={i} className={styles.option}>
          {item}
        </option>
      ));

    const onChangeCallback = useCallback(
      (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e);
        onChangeSelect && onChangeSelect(e.currentTarget.value);
      },
      [onChange, onChangeSelect]
    );

    return (
      <div className={styles.selectContainer}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        <select
          name={name}
          id={id}
          className={styles.select}
          onChange={onChangeCallback}
          {...restProps}
        >
          <option className={styles.option} hidden>
            {optionPlaceholder}
          </option>
          {mappedOptions}
        </select>
        {error && (
          <div className={styles.errorContainer}>
            {error && <span className={styles.errorText}>{error}</span>}
          </div>
        )}
      </div>
    );
  }
);
