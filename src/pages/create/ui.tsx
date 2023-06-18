<<<<<<< Updated upstream
function CreatePage() {

    return (
        <>
            
        </>
    )
=======
import { Step1, Step2, Step3 } from "../../features";
import { Steps, useAppSelector } from "shared";
import { selectStep } from "entities/steps";

function CreatePage() {
  const step = useAppSelector(selectStep);

  return (
    <>
      {step === Steps.One && <Step1 />}
      {step === Steps.Two && <Step2 />}
      {step === Steps.Three && <Step3 />}
    </>
  );
>>>>>>> Stashed changes
}

export default CreatePage;
