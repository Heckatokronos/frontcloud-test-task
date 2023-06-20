import { memo } from "react";
import { IButtonContainer } from "./types";
import { useNavigate } from "react-router-dom";
import { Button, useAppDispatch, useAppSelector } from "shared";
import { Routes, Steps } from "entities/root";
import { changeStep, selectStep } from "entities/root/model/rootSlice";

import styles from "./ButtonContainer.module.scss";

export const ButtonContainer: React.FC<IButtonContainer> = memo(
  ({ id, buttonPrevState, buttonNextState }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const step = useAppSelector(selectStep);

    const click =
      step === Steps.One
        ? () => navigate(Routes.Main)
        : step === Steps.Two
        ? () => dispatch(changeStep(Steps.One))
        : () => dispatch(changeStep(Steps.Two));

    const btnNext =
      step === Steps.Three ? "button-submit" : `button-next-${id}`;

    return (
      <div className={styles.buttonContainer}>
        <Button
          id={`button-back-${id}`}
          type="button"
          variant="outlined"
          onClick={click}
        >
          {buttonPrevState}
        </Button>
        <Button id={btnNext} type="submit" variant="primary">
          {buttonNextState}
        </Button>
      </div>
    );
  }
);
