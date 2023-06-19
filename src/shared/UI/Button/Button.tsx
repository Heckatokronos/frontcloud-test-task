import { memo } from "react";
import classNames from "classnames";
import { ButtonProps } from "./types";

import styles from "./Button.module.scss";

export const Button: React.FC<ButtonProps> = memo(
  ({ children, className, variant, ...props }) => {
    return (
      <button
        {...props}
        className={classNames(
          styles.button,
          className,
          styles[`button_${variant}`]
        )}
      >
        {children}
      </button>
    );
  }
);
