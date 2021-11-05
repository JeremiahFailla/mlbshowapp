import React from "react";
import classes from "./Lineup.module.css";
import { FaPlus } from "react-icons/fa";

const spots = [...Array(9).keys()];

const Lineup = () => {
  console.log(spots);
  return (
    <React.Fragment>
      <p className={classes.title}>Lineup</p>
      {spots.map((el, i) => (
        <div className="flex-c">
          <span>{i + 1}. </span>
          <div className={classes.playerSpot} key={i}>
            <FaPlus className={classes.plus} />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Lineup;
