import { IButtonContainer } from "./types";

import { useNavigate } from "react-router-dom";
import {
  Button,
  Endpoints,
  Steps,
  useAppDispatch,
  useAppSelector,
} from "shared";

import styles from "./ButtonContainer.module.scss";
import { selectStep, changeStep } from "entities/steps";

export const ButtonContainer: React.FC<IButtonContainer> = ({
  id,
  buttonPrevState,
  buttonNextState,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const step = useAppSelector(selectStep);

  const click =
    step === Steps.One
      ? () => navigate(Endpoints.Main)
      : step === Steps.Two
      ? () => dispatch(changeStep(Steps.One))
      : () => dispatch(changeStep(Steps.Two));

  const btnNext = step === Steps.Three ? "button-submit" : `button-next-${id}`;

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
};
