import React from "react";
import AddPlayerCard from "./AddPlayerCard";
import classes from "./Bullpen.module.css";

const Bullpen = () => {
  return (
    <React.Fragment>
      <p className={classes.title}>Bullpen</p>
      {[...Array(6).keys()].map((el, i) => (
        <div className="flex-c">
          <span>{i + 1}. </span>
          <AddPlayerCard key={i} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default Bullpen;
