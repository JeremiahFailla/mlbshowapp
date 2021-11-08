import React from "react";
import AddPlayerCard from "./AddPlayerCard";
import classes from "./Bench.module.css";

const Bench = () => {
  return (
    <React.Fragment>
      <p className={classes.title}>Bench</p>
      {[...Array(5).keys()].map((el, i) => (
        <div className="flex-c">
          <span>{i + 1}. </span>
          <AddPlayerCard key={i} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default Bench;
