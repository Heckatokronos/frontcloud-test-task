import { ILayoutProps } from "./types";

import "./Layout.scss";

export const Layout: React.FC<ILayoutProps> = ({ children }, props) => {
  const classes = "main " + props.className;

  return <main className={classes}>{children}</main>;
};
