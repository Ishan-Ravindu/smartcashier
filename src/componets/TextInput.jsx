import React from "react";
import classes from "./TextInput.module.css";

function TextInput({ placeholder, type, value, icon, ...otherprops }) {
  return (
    <div className={classes.container}>
      <label htmlFor={placeholder} className={classes.icon}>
        {icon}
      </label>
      <input
        {...otherprops}
        value={value}
        id={placeholder}
        className={classes.input}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
