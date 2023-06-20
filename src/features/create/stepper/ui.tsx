import { useSelector } from "react-redux";
import { steps } from "./model/types";
import {
  CheckMark,
  MainContainer,
  StepContainer,
  StepCount,
  StepLabel,
  StepStyle,
  StepWrapper,
  StepsLabelContainer,
} from "./model/styled";
import { Steps } from "entities/root";
import { selectStep } from "entities/root/model/rootSlice";

export const Stepper: React.FC = () => {
  const step = useSelector(selectStep);
  let currentStep = 1;

  if (step === Steps.One) currentStep = 1;
  else if (step === Steps.Two) currentStep = 2;
  else if (step === Steps.Three) currentStep = 3;

  const totalSteps = steps.length;

  const width = `${(100 / (totalSteps - 1)) * (currentStep - 1)}%`;

  return (
    <>
      <MainContainer>
        <StepContainer width={width}>
          {steps.map(({ step, label }) => (
            <StepWrapper key={step}>
              <StepStyle
                step={currentStep >= step ? "completed" : "incomplete"}
              >
                {currentStep > step ? (
                  <CheckMark>&#10003;</CheckMark>
                ) : (
                  <StepCount></StepCount>
                )}
              </StepStyle>
              <StepsLabelContainer>
                <StepLabel key={step}>{label}</StepLabel>
              </StepsLabelContainer>
            </StepWrapper>
          ))}
        </StepContainer>
      </MainContainer>
    </>
  );
};
