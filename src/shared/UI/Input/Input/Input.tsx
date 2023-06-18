import { ChangeEvent, Ref, forwardRef, useCallback } from "react";
import { InputProps } from "./types";

import styles from "./Input.module.scss";

export const Input = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    const {
      onChange,
      onChangeValue,
      id,
      error,
      advantage,
      label,
      ...restProps
    } = props;

    const onChangeFn = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeValue && onChangeValue(e.currentTarget.value);
      },
      [onChange, onChangeValue]
    );

    return (
      <div className={styles.container}>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          aria-describedby={`input-hint-${id}`}
          type="text"
          onChange={onChangeFn}
          className={styles.input}
          {...restProps}
        />
        {error && (
          <div className={styles.error}>
            {error && (
              <span id={`input-hint-${id}`} className={styles.errorHint}>
                {error}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);
