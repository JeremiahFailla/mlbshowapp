import React, { useState } from "react";
import classes from "./BuildTeamPlayers.module.css";
import Lineup from "./Lineup";
import Rotation from "./Rotation";
import Bench from "./Bench";
import Bullpen from "./Bullpen";
import { useSelector, useDispatch } from "react-redux";

const BuildTeamPlayers = () => {
  const [showLineup, setShowLineup] = useState(true);
  const [showRotation, setShowRotation] = useState(true);
  const player = useSelector((state) => state.selectedPlayer);
  const activeClasses = `${classes.btn} ${classes.active}`;
  const inactiveClasses = `${classes.btn} ${classes.inactive}`;

  const onShowLineupBtnHandler = () => {
    setShowLineup(true);
  };

  const onShowBenchBtnHandler = () => {
    setShowLineup(false);
  };

  const onShowRotationBtnHandler = () => {
    setShowRotation(true);
  };

  const onShowBullpenBtnHandler = () => {
    setShowRotation(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.btnContainer}>
        <div className={classes.positionPlayersBtnCont}>
          <button
            className={showLineup ? activeClasses : inactiveClasses}
            onClick={onShowLineupBtnHandler}
          >
            Lineup
          </button>
          <button
            className={!showLineup ? activeClasses : inactiveClasses}
            onClick={onShowBenchBtnHandler}
          >
            Bench
          </button>
        </div>
        <div className={classes.pitcherPlayersBtnCont}>
          <button
            className={showRotation ? activeClasses : inactiveClasses}
            onClick={onShowRotationBtnHandler}
          >
            Rotation
          </button>
          <button
            className={!showRotation ? activeClasses : inactiveClasses}
            onClick={onShowBullpenBtnHandler}
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
