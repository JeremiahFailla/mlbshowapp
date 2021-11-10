import React, { useEffect, useState } from "react";
import AddPlayerCard from "./AddPlayerCard";
import classes from "./Lineup.module.css";
import { useSelector, useDispatch } from "react-redux";

const Lineup = () => {
  const dispatch = useDispatch();
  const startingLineup = useSelector((state) => state.lineup);

  const addPlayerToLineup = (i, player) => {
    dispatch({ type: "addPlayerToLineup", index: i, player: player });
  };

  // ------ Add Reset lineup button
  return (
    <div className={`${classes.animation}`}>
      <p className={classes.title}>Lineup</p>

      {startingLineup.map((el, i) => (
        <div className={`flex-c`}>
          <span>{i + 1}. </span>
          <AddPlayerCard
            key={i}
            lineupPosition={i}
            addPlayer={addPlayerToLineup}
            players={el}
          />
        </div>
      ))}
    </div>
  );
};

export default Lineup;
