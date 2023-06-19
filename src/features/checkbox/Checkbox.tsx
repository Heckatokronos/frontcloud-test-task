import { useAppDispatch } from "shared/hooks/hooks";
import { CheckboxProps } from "./types";
import { ChangeEvent, useCallback } from "react";

import styles from "./Checkboxes.module.scss";
import { changeCheckbox } from "entities/root/model/rootSlice";

export const Checkbox: React.FC<CheckboxProps> = (
  { id, onChange, children, ...restProps },
  props
) => {
  const dispatch = useAppDispatch();

  const onChangeFn = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e);
      dispatch(changeCheckbox({ id: `${id}` }));
    },
    [dispatch, id, onChange]
  );

  return (
    <div>
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
