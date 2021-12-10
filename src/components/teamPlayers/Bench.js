import React, { useEffect } from "react";
import AddPlayerCard from "./AddPlayerCard";
import classes from "./Bench.module.css";
import { useSelector, useDispatch } from "react-redux";
import ResetBtn from "./ResetBtn";

const Bench = React.memo(() => {
  const startingLineup = useSelector((state) => state.lineup);
  const startingBench = useSelector((state) => state.bench);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Bench has changed");
  }, [startingBench]);

  useEffect(() => {
    return () => {
      dispatch({ type: "unselectPlayerOnTeam" });
    };
  }, []);

  const addPlayerToBench = (i, player, showErrorFunc) => {
    // check to see if player is already in either lineup or on bench
    let invalid = startingLineup.some((pl) => {
      if (pl === undefined) return;
      return pl.id === player.id;
    });
    if (!invalid) {
      invalid = startingBench.some((pl) => {
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
    dispatch({ type: "addPlayerToBench", index: i, player: player });
    dispatch({ type: "unselectPlayerOnTeam" });
  };

  const onResetBenchHandler = () => {
    dispatch({ type: "resetBench" });
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

  const swapBenchPositions = (player, position) => {
    console.log("Swap Bench Postions");
    dispatch({
      type: "swapPlayersOnBench",
      player: player,
      position: position,
    });
    dispatch({ type: "unselectPlayerOnTeam" });
  };

  return (
    <div className={classes.animation}>
      <div className={`flex-c ${classes.titleContainer}`}>
        <p className={classes.title}>Bench</p>
        <ResetBtn resetFunc={onResetBenchHandler}>Reset Bench</ResetBtn>
      </div>
      {startingBench.map((el, i) => (
        <div className="flex-c" key={i}>
          <span>{i + 1}. </span>
          <AddPlayerCard
            key={i}
            lineupPosition={i}
            addPlayer={addPlayerToBench}
            player={el}
            selectPlayerFunc={onSelectPlayerOnTeam}
            swapPosition={swapBenchPositions}
            positionPlayer={true}
            positionAllowed="C,1B,2B,3B,SS,LF,CF,RF"
          />
        </div>
      ))}
    </div>
  );
});

export default Bench;
