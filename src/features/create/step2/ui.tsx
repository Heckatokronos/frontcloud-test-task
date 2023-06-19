import React from "react";
import { ButtonContainer } from "features/buttonContainer/buttonContainer";


export const Step2: React.FC = () => {
  return (
    <form>
      <ButtonContainer id="2" buttonPrevState="Назад" buttonNextState="Далее" />
    </form>
  );
};
