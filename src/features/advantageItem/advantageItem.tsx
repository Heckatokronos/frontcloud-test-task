import { SyntheticEvent, memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "shared";
import { AdvantageItemProps } from "./types";
import Trash from "shared/images/trash.svg";
import {
  findById,
} from "entities/root";

import styles from "./advantageItem.module.scss";
import { addAdvantages, removeAdvantage, updateAdvantage } from "entities/root/model/rootSlice";

export const AdvantageItem = memo(({ advantage }: AdvantageItemProps) => {
  const dispatch = useAppDispatch();
  const advantages = useAppSelector(addAdvantages);

  const index = findById(advantages, advantage.id);

  const updateAdvantagesCallback = useCallback(
    (e: SyntheticEvent) => {
      dispatch(
        updateAdvantage({
          id: advantage.id,
          text: (e.target as HTMLInputElement).value,
        })
      );
    },
    [dispatch, advantage.id]
  );

  const removeAdvantageCallback = useCallback(() => {
    dispatch(removeAdvantage({ id: advantage.id }));
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
});
