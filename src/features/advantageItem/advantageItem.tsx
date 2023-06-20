import { SyntheticEvent, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "shared";
import { AdvantageItemProps } from "./types";
import Trash from "shared/images/trash.svg";
import { addAdvantage, findById, removeAdvantages, updateAdvantages } from "entities/root";

import styles from "./advantageItem.module.scss";

export const AdvantageItem = ({ advantage }: AdvantageItemProps) => {
  const dispatch = useAppDispatch();
  const advantages = useAppSelector(addAdvantage);

  const index = findById(advantages, advantage.id);

  const updateAdvantagesCallback = useCallback(
    (e: SyntheticEvent) => {
      dispatch(
        updateAdvantages({
          id: advantage.id,
          text: (e.target as HTMLInputElement).value,
        })
      );
    },
    [dispatch, advantage.id]
  );

  const removeAdvantageCallback = useCallback(() => {
    dispatch(removeAdvantages({ id: advantage.id }));
  }, [dispatch, advantage.id]);

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        placeholder="Введите преимущество..."
        value={advantages[index].text}
        onChange={updateAdvantagesCallback}
      />
      <div className={styles.removeIconContainer}>
        <button
          className={styles.removeButton}
          type="button"
          onClick={removeAdvantageCallback}
        >
          <img src={Trash} alt="Trash icon" className={styles.icon} />
        </button>
      </div>
    </div>
  );
};
