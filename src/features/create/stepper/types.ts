export interface Step {
  label: string;
  content: React.ReactNode;
}

export interface IStepperProps {
  steps: Step[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
}
