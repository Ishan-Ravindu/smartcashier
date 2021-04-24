import classes from "./BoxLayout.module.css";

export default function BoxLayout({ children }) {
  return <div className={classes.centerBox}>{children}</div>;
}
