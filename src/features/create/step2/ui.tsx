import React from "react";

import "./ui.scss";
import { ButtonContainer } from "shared";

export const Step2: React.FC = (props) => {
  return (
    <form>
      <ButtonContainer id="2" buttonPrevState="Назад" buttonNextState="Далее" />
    </form>
  );
};
