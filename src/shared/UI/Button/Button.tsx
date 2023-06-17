import "./Button.scss";

type ButtonProps = {
  id: string;
  children: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  id,
  className,
}) => {
  return (
    <button id={id} type={type} onClick={onClick} className={`button ${className}`} >
      {children}
    </button>
  );
};
