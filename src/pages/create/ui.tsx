import { Step1, Step2, Step3, Stepper } from "../../features";
import { useAppSelector } from "shared";
import { selectStep } from "entities/root/model/rootSlice";
import { Steps } from "entities/root";

import styles from "./ui.module.scss";

function CreatePage() {
  const step = useAppSelector(selectStep);

  return (
    <div>
      <Stepper />
      {step === Steps.One && <Step1 />}
      {step === Steps.Two && <Step2 />}
      {step === Steps.Three && <Step3 />}
    </div>
  );
}

export default CreatePage;
