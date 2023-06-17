import "./Layout.scss";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = ({ children }, props) => {
  const classes = "main " + props.className;

  return <main className={classes}>{children}</main>;
};
