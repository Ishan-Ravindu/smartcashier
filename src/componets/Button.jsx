import React from "react";
import classes from "./Button.module.css";

function Button({ title, onClick, ...otherprops }) {
  return (
    <div>
      <button {...otherprops} onClick={onClick} className={classes.button}>
        {title}
      </button>
    </div>
  );
}

export default Button;
