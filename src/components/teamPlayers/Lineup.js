import React from "react";
import AddPlayerCard from "./AddPlayerCard";
import classes from "./Lineup.module.css";

const Lineup = () => {
  return (
    <React.Fragment>
      <p className={classes.title}>Lineup</p>
      {[...Array(9).keys()].map((el, i) => (
        <div className="flex-c">
          <span>{i + 1}. </span>
          <AddPlayerCard key={i} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default Lineup;
