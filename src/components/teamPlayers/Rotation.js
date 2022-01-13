import React, { useEffect } from "react";
import AddPlayerCard from "./AddPlayerCard";
import classes from "./Rotation.module.css";
import { useSelector, useDispatch } from "react-redux";
import ResetBtn from "./ResetBtn";

const Rotation = React.memo(() => {
  const dispatch = useDispatch();
  const startingRotation = useSelector((state) => state.rotation);
  const bullpen = useSelector((state) => state.bullpen);

  useEffect(() => {
    return () => {
      dispatch({ type: "unselectPlayerOnTeam" });
    };
  }, []);

  const addPlayerToRotation = (i, player) => {
    let invalid = startingRotation.some((pl) => {
      if (pl === undefined) return;
      return pl.id === player.id;
    });
    if (!invalid) {
      invalid = bullpen.some((pl) => {
        if (pl === undefined) return;
        return pl.id === player.id;
      });
    }

    if (invalid) {
      dispatch({
        type: "errorMessage",
        message: "Player is already in rotation or in bullpen",
      });
      return;
    }

    dispatch({ type: "addPlayerToRotation", index: i, player: player });
    dispatch({ type: "unselectPlayerOnTeam" });
  };

  const onResetRotationHandler = () => {
    dispatch({ type: "resetRotation" });
    dispatch({ type: "unselectPlayerOnTeam" });
  };

  const onSelectPlayerInRotation = (player, id, positionPlayer) => {
    dispatch({
      type: "selectedPlayerOnTeam",
      player: player,
      position: id,
      positionPlayer: positionPlayer,
    });
  };

  const swapRotationPositions = (player, position) => {
    dispatch({
      type: "swapPlayersInRotation",
      player: player,
      position: position,
    });
    dispatch({ type: "unselectPlayerOnTeam" });
  };

  return (
    <div className={classes.animation}>
      <div className={`flex-c ${classes.titleContainer}`}>
        <p className={classes.title}>Rotation</p>
        <ResetBtn resetFunc={onResetRotationHandler}>Reset Rotation</ResetBtn>
      </div>

      {startingRotation.map((el, i) => (
        <div className="flex-c">
          <span>{i + 1}. </span>
          <AddPlayerCard
            key={i}
            lineupPosition={i}
            addPlayer={addPlayerToRotation}
            player={el}
            selectPlayerFunc={onSelectPlayerInRotation}
            swapPosition={swapRotationPositions}
            positionPlayer={false}
            positionAllowed="SP"
          />
        </div>
      ))}
    </div>
  );
});

export default Rotation;
