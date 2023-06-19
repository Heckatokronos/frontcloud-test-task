import { StepContainerProps, StepStyleProps } from "./types";
import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  margin-bottom: 8rem;
  padding: 0;
`;

export const StepContainer = styled.div<StepContainerProps>`
  display: flex;
  justify-content: space-between;
  margin-top: 0;
  position: relative;
  :before {
    content: "";
    position: absolute;
    background: #e7e7e7;
    height: 0.6rem;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  :after {
    content: "";
    position: absolute;
    background: #545afa;
    height: 0.6rem;
    width: ${({ width }) => width};
    top: 50%;
    transition: 0.4s ease;
    transform: translateY(-50%);
    left: 0;
  }
`;

export const StepWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const StepStyle = styled.div<StepStyleProps>`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  background-color: ${({ step }) =>
    step === "completed" ? "#545AFA" : "#E7E7E7"};
  border: 0.3rem solid
    ${({ step }) => (step === "completed" ? "#545AFA" : "#E7E7E7")};
  transition: 0.4s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepCount = styled.span`
  font-size: 1rem;
  color: #333;
`;

export const StepsLabelContainer = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StepLabel = styled.span`
  font-size: 1.2rem;
  color: #545afa;
  font-weight: bold;
`;

export const CheckMark = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
`;
