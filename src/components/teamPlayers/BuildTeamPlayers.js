import React, { useState } from "react";
import classes from "./BuildTeamPlayers.module.css";
import Lineup from "./Lineup";
import Rotation from "./Rotation";
import Bench from "./Bench";
import Bullpen from "./Bullpen";

const BuildTeamPlayers = () => {
  const [showLineup, setShowLineup] = useState(true);
  const [showRotation, setShowRotation] = useState(true);

  const activeClasses = `${classes.btn} ${classes.active}`;
  const inactiveClasses = `${classes.btn} ${classes.inactive}`;

  const onPositionPlayerBtnHandler = () => {
    setShowLineup(!showLineup);
  };

  const onPitcherPlayerBtnHandler = () => {
    setShowRotation(!showRotation);
  };

  return (
    <div className={classes.container}>
      <div className={classes.btnContainer}>
        <div className={classes.positionPlayersBtnCont}>
          <button
            className={showLineup ? activeClasses : inactiveClasses}
            onClick={onPositionPlayerBtnHandler}
          >
            Lineup
          </button>
          <button
            className={!showLineup ? activeClasses : inactiveClasses}
            onClick={onPositionPlayerBtnHandler}
          >
            Bench
          </button>
        </div>
        <div className={classes.pitcherPlayersBtnCont}>
          <button
            className={showRotation ? activeClasses : inactiveClasses}
            onClick={onPitcherPlayerBtnHandler}
          >
            Rotation
          </button>
          <button
            className={!showRotation ? activeClasses : inactiveClasses}
            onClick={onPitcherPlayerBtnHandler}
          >
            Bullpen
          </button>
        </div>
      </div>
      <div className={classes.starters}>
        <div className={classes.positionPlayers}>
          {showLineup && <Lineup />}
          {!showLineup && <Bench />}
        </div>
        <div className={classes.pitcherPlayers}>
          {showRotation && <Rotation />}
          {!showRotation && <Bullpen />}
        </div>
      </div>
    </div>
  );
};

export default BuildTeamPlayers;
