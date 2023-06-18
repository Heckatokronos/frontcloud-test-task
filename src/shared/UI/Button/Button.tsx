import "./Button.scss";

type ButtonProps = {
  id: string;
  children: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  id,
}) => {
  return (
    <button id={id} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
