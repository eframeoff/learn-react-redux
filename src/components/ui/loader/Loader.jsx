import React from "react";
import classes from "./Loader.module.css";
const Loader = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <div className={classes.Loader}></div>
    </div>
  );
};

export default Loader;
