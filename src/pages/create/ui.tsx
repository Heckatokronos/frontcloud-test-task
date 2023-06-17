import { useState } from "react";
import { Step, Step1, Step2, Step3, Stepper } from "../../features";

interface CreatePageProps {}

function CreatePage(CreatePageProps: any) {
  const steps: Step[] = [
    {
      label: "Step 1",
      content: <Step1 />,
    },
    {
      label: "Step 2",
      content: <Step2 />,
    },
    {
      label: "Step 3",
      content: <Step3 />,
    },
  ];

  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <Stepper
      steps={steps}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
    />
  );
}

export default CreatePage;
