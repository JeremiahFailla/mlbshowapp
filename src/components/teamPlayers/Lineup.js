import React, { useEffect, useState } from "react";
import AddPlayerCard from "./AddPlayerCard";
import classes from "./Lineup.module.css";
import { useSelector, useDispatch } from "react-redux";
import ResetBtn from "./ResetBtn";

const Lineup = React.memo(() => {
  const dispatch = useDispatch();
  const startingLineup = useSelector((state) => state.lineup);
  const bench = useSelector((state) => state.bench);

  useEffect(() => {
    console.log("Starting Lineup Changed");
  }, [startingLineup]);

  useEffect(() => {
    return () => {
      dispatch({ type: "unselectPlayerOnTeam" });
    };
  }, []);

  const addPlayerToLineup = (i, player) => {
    // check to see if player is already in either lineup or on bench
    let invalid = startingLineup.some((pl) => {
      if (pl === undefined) return;
      return pl.id === player.id;
    });
    if (!invalid) {
      invalid = bench.some((pl) => {
        if (pl === undefined) return;
        return pl.id === player.id;
      });
    }

    if (invalid) {
      dispatch({
        type: "errorMessage",
        message: "Player is already in lineup or on bench",
      });
      return;
    }
    dispatch({ type: "addPlayerToLineup", index: i, player: player });
    dispatch({ type: "unselectPlayerOnTeam" });
  };

  const onResetLineupHandler = () => {
    dispatch({ type: "resetLineup" });
    dispatch({ type: "unselectPlayerOnTeam" });
  };

  const onSelectPlayerOnTeam = (player, id, positionPlayer) => {
    dispatch({
      type: "selectedPlayerOnTeam",
      player: player,
      position: id,
      positionPlayer: positionPlayer,
    });
  };

  const swapLineupPositions = (player, position) => {
    console.log("Swap Lineup Postions");
    dispatch({
      type: "swapPlayersInLineup",
      player: player,
      position: position,
    });
    dispatch({ type: "unselectPlayerOnTeam" });
  };

  return (
    <div className={`${classes.animation}`}>
      <div className={`flex-c ${classes.titleContainer}`}>
        <p className={classes.title}>Lineup</p>
        <ResetBtn resetFunc={onResetLineupHandler}>Reset Lineup</ResetBtn>
      </div>

      {startingLineup.map((el, i) => (
        <div className={`flex-c`}>
          <span>{i + 1}. </span>
          <AddPlayerCard
            key={Math.random()}
            lineupPosition={i}
            addPlayer={addPlayerToLineup}
            player={el}
            selectPlayerFunc={onSelectPlayerOnTeam}
            swapPosition={swapLineupPositions}
            positionPlayer={true}
            positionAllowed="C,1B,2B,3B,SS,LF,CF,RF"
          />
        </div>
      ))}
    </div>
  );
});

export default Lineup;
