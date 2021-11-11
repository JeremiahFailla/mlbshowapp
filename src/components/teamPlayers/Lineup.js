import React, { useEffect, useState } from "react";
import AddPlayerCard from "./AddPlayerCard";
import classes from "./Lineup.module.css";
import { useSelector, useDispatch } from "react-redux";
import ResetBtn from "./ResetBtn";

const Lineup = () => {
  const dispatch = useDispatch();
  const startingLineup = useSelector((state) => state.lineup);
  const [players, setPlayers] = useState(startingLineup);

  const addPlayerToLineup = (i, player) => {
    dispatch({ type: "addPlayerToLineup", index: i, player: player });
  };

  const onResetLineupHandler = () => {
    dispatch({ type: "resetLineup" });
  };

  // ------ Add Reset lineup button
  useEffect(() => {
    setPlayers(startingLineup);
  }, [startingLineup]);
  return (
    <div className={`${classes.animation}`}>
      <div className={`flex-c ${classes.titleContainer}`}>
        <p className={classes.title}>Lineup</p>
        <ResetBtn resetFunc={onResetLineupHandler}>Reset Lineup</ResetBtn>
      </div>

      {players.map((el, i) => (
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
