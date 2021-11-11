import React, { Fragment, useState, useEffect } from "react";
import AddPlayerCard from "./AddPlayerCard";
import classes from "./Rotation.module.css";
import { useSelector, useDispatch } from "react-redux";
import ResetBtn from "./ResetBtn";

const Rotation = () => {
  const dispatch = useDispatch();
  const startingRotation = useSelector((state) => state.rotation);
  const [player, setPlayer] = useState(startingRotation);

  useEffect(() => {
    setPlayer(startingRotation);
  }, [startingRotation]);

  const addPlayerToRotation = (i, player) => {
    dispatch({ type: "addPlayerToRotation", index: i, player: player });
  };

  const onResetRotationHandler = () => {
    dispatch({ type: "resetRotation" });
  };

  return (
    <div className={classes.animation}>
      <div className={`flex-c ${classes.titleContainer}`}>
        <p className={classes.title}>Rotation</p>
        <ResetBtn resetFunc={onResetRotationHandler}>Reset Rotation</ResetBtn>
      </div>

      {player.map((el, i) => (
        <div className="flex-c">
          <span>{i + 1}. </span>
          <AddPlayerCard
            key={i}
            lineupPosition={i}
            addPlayer={addPlayerToRotation}
            players={el}
          />
        </div>
      ))}
    </div>
  );
};

export default Rotation;
