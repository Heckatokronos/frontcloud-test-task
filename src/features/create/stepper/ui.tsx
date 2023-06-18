import { IStepperProps } from "./types";
import { Button } from "../../../shared";

import "./ui.scss";

export const Stepper: React.FC<IStepperProps> = ({
  steps,
  currentStep,
  setCurrentStep,
}) => {
  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <div className="stepper-wrapper">{steps[currentStep].label}</div>
      <div>{steps[currentStep].content}</div>
      <div className="button">
        <Button
          id="button-back"
          className="button-outlined"
          type="button"
          onClick={handlePreviousStep}
          variant="outlined"
        >
          Назад
        </Button>
        <Button
          id="button-next"
          type="button"
          variant="primary"
          onClick={handleNextStep}
        >
          Далее
        </Button>
      </div>
    </div>
  );
};
