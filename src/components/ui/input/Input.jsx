import React from "react";
import classes from "./Input.module.css";

const Input = ({ ...props }) => {
  return (
    <div>
      <input className={classes.Inp} {...props} />
    </div>
  );
};

export default Input;
