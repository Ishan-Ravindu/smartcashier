import React from "react";
import classes from "./TabButton.module.css";

function TabButton({ title, onClick, borderBottom, ...otherprops }) {
  return (
    <button
      {...otherprops}
      style={borderBottom ? { borderBottom: "blue 5px solid" } : {}}
      onClick={onClick}
      className={classes.button}
    >
      {title}
    </button>
  );
}

export default TabButton;
