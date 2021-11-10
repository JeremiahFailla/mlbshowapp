import React, { Fragment } from "react";
import AddPlayerCard from "./AddPlayerCard";
import classes from "./Rotation.module.css";
import { useSelector, useDispatch } from "react-redux";

const Rotation = () => {
  const startingRotation = useSelector((state) => state.rotation);
  return (
    <div className={classes.animation}>
      <p className={classes.title}>Rotation</p>
      {startingRotation.map((el, i) => (
        <div className="flex-c">
          <span>{i + 1}. </span>
          <AddPlayerCard key={i} />
        </div>
      ))}
    </div>
  );
};

export default Rotation;
