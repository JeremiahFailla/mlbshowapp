import React, { Fragment } from "react";
import AddPlayerCard from "./AddPlayerCard";
import classes from "./Rotation.module.css";

const Rotation = () => {
  return (
    <Fragment>
      <p className={classes.title}>Rotation</p>
      {[...Array(5).keys()].map((el, i) => (
        <div className="flex-c">
          <span>{i + 1}. </span>
          <AddPlayerCard key={i} />
        </div>
      ))}
    </Fragment>
  );
};

export default Rotation;
