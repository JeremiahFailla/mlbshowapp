import React, { useEffect } from "react";
import AddPlayerCard from "./AddPlayerCard";
import classes from "./Bullpen.module.css";
import { useSelector, useDispatch } from "react-redux";
import ResetBtn from "./ResetBtn";

const Bullpen = React.memo(() => {
  const dispatch = useDispatch();
  const startingBullpen = useSelector((state) => state.bullpen);

  useEffect(() => {
    return () => {
      dispatch({ type: "unselectPlayerOnTeam" });
    };
  }, []);

  const addPlayerToBullpen = (i, player) => {
    let invalid = startingBullpen.some((pl) => {
      if (pl === undefined) return;
      return pl.id === player.id;
    });

    if (invalid) {
      dispatch({
        type: "errorMessage",
        message: "Player is already in rotation or in bullpen",
      });
      return;
    }
    dispatch({ type: "addPlayerToBullpen", index: i, player: player });
    dispatch({ type: "unselectPlayerOnTeam" });
  };

  const onResetBullpenHandler = () => {
    dispatch({ type: "resetBullpen" });
    dispatch({ type: "unselectPlayerOnTeam" });
  };

  const onSelectPlayerInBullpen = (player, id, positionPlayer) => {
    dispatch({
      type: "selectedPlayerOnTeam",
      player: player,
      position: id,
      positionPlayer: positionPlayer,
    });
  };

  const swapBullpenPositions = (player, position) => {
    console.log("Swap Bullpen Positions");
    dispatch({
      type: "swapPlayersInBullpen",
      player: player,
      position: position,
    });
    dispatch({ type: "unselectPlayerOnTeam" });
  };

  return (
    <div className={classes.animation}>
      <div className={`flex-c ${classes.titleContainer}`}>
        <p className={classes.title}>Bullpen</p>
        <ResetBtn resetFunc={onResetBullpenHandler}>Reset Bullpen</ResetBtn>
      </div>

      {startingBullpen.map((el, i) => (
        <div className="flex-c">
          <span>{i + 1}. </span>
          <AddPlayerCard
            key={i}
            lineupPosition={i}
            addPlayer={addPlayerToBullpen}
            player={el}
            selectPlayerFunc={onSelectPlayerInBullpen}
            swapPosition={swapBullpenPositions}
            positionPlayer={false}
            positionAllowed="RP"
          />
        </div>
      ))}
    </div>
  );
});

export default Bullpen;
