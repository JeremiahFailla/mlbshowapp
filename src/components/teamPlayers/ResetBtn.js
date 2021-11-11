import React from "react";
import classes from "./ResetBtn.module.css";

const ResetBtn = (props) => {
  return (
    <button className={classes.resetBtn} onClick={props.resetFunc}>
      {props.children}
    </button>
  );
};

export default ResetBtn;
