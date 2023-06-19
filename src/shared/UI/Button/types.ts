export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outlined";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
