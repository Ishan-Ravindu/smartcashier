import React from "react";
import classes from "./RadioButton.module.css";

function RadioButton({ label, ...otherprops }) {
  return (
    <>
      <div className="container">
        <input {...otherprops} className={classes.radioButton} type="radio" />
        <label className={classes.label} htmlFor="radio">
          {label}
        </label>
      </div>
    </>
  );
}

export default RadioButton;
