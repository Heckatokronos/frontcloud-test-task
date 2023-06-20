import { useAppDispatch } from "shared/hooks/hooks";
import { RadioboxProps } from "./types";
import { ChangeEvent, useCallback } from "react";
import { changeRadiobox } from "entities/root/model/rootSlice";

import styles from "./radiobox.module.scss";

export const Radiobox: React.FC<RadioboxProps> = ({
  id,
  value,
  onChange,
  onChangeOption,
  children,
  name,
  ...restProps
}) => {
  const dispatch = useAppDispatch();

  const onChangeFn = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
      onChangeOption && onChangeOption(value);
      dispatch(changeRadiobox(`${children}`));
    },
    [children, dispatch, onChange, onChangeOption, value]
  );

  return (
    <div className={styles.container}>
      <input
        id={id}
        name={name}
        type="radio"
        onChange={onChangeFn}
        className={styles.radiobox}
      />
      <label htmlFor={id} className={styles.label}>
        {children}
      </label>
    </div>
  );
};
