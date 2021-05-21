import { useRouteMatch, Link } from "react-router-dom";
import classes from "./CustomLink.module.css";

function CustomLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    // exact: activeOnlyWhenExact,
  });

  const selectedStyles = match
    ? { backgroundColor: "white", color: "black" }
    : null;

  return (
    <div style={selectedStyles} className={classes.navButton}>
      <Link to={to}>{label}</Link>
    </div>
  );
}

export default CustomLink;
