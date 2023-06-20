import { useAppDispatch } from "shared/hooks/hooks";
import { CheckboxProps } from "./types";
import { ChangeEvent, useCallback } from "react";
import { changeCheckbox } from "entities/root/model/rootSlice";

import styles from "./checkboxes.module.scss";

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  onChange,
  onChangeChecked,
  children,
  ...restProps
}) => {
  const dispatch = useAppDispatch();

  const onChangeFn = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
      dispatch(changeCheckbox({ id: `${id}` }));
    },
    [dispatch, id, onChange]
  );

  return (
    <div className={styles.container}>
      <input
        id={id}
        type="checkbox"
        onChange={onChangeFn}
        className={styles.checkbox}
      />
      <label htmlFor={id} className={styles.label}>
        {children && children}
      </label>
    </div>
  );
};
