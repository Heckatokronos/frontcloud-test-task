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
      <div>{steps[currentStep].label}</div>
      <div>{steps[currentStep].content}</div>
      <div>
        <Button
          className="button-outlined"
          id="button-back"
          type="button"
          onClick={handlePreviousStep}
        >
          Назад
        </Button>
        <Button
          className="button-primary"
          id="button-next"
          type="button"
          onClick={handleNextStep}
        >
          Далее
        </Button>
      </div>
    </div>
  );
};
