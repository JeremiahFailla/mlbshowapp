import React, { useState } from "react";
import classes from "./PlayerComparison.module.css";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import Player from "./Player";

const PlayerComparison = () => {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const selectedPlayer = useSelector((state) => state.selectedPlayer);
  const [toggle, setToggle] = useState(true);

  const onUnoccupiedSpotOneHandler = () => {
    console.log(selectedPlayer);
    setPlayerOne(selectedPlayer);
  };

  const onUnoccupiedSpotTwoHandler = () => {
    console.log(selectedPlayer);
    setPlayerTwo(selectedPlayer);
  };

  const onChangeStatsHandler = () => {
    setToggle(!toggle);
  };

  let displayStatsContent;

  if (toggle) {
    displayStatsContent = (
      <React.Fragment>
        <span className={classes.batting}>Contact R</span>
        <span className={classes.batting}>Contact L</span>
        <span className={classes.batting}>Power R</span>
        <span className={classes.batting}>Power L</span>
        <span className={classes.batting}>Vision</span>
        <span className={classes.batting}>Discipline</span>
        <span className={classes.batting}>Clutch</span>
        <span className={classes.batting}>Bunting</span>
        <span className={classes.batting}>Drag Bunting</span>
      </React.Fragment>
    );
  } else {
    displayStatsContent = (
      <React.Fragment>
        <span className={classes.pitching}>Stamina</span>
        <span className={classes.pitching}>H/9</span>
        <span className={classes.pitching}>K/9</span>
        <span className={classes.pitching}>BB/9</span>
        <span className={classes.pitching}>HR/9</span>
        <span className={classes.pitching}>Clutch</span>
        <span className={classes.pitching}>Control</span>
        <span className={classes.pitching}>Velocity</span>
        <span className={classes.pitching}>Break</span>
      </React.Fragment>
    );
  }

  return (
    <div className={`${classes.playerContainer} flex-col`}>
      <button
        type="button"
        className={classes.toggleBtn}
        onClick={onChangeStatsHandler}
      >
        {toggle ? "Show Pitching Stats" : "Show Batting Stats"}
      </button>
      <div className="flex-c">
        <div className={`${classes.playerOne} flex-col`}>
          <div className={classes.name}>
            {!playerOne && (
              <button
                type="button"
                className={classes.unoccupiedPlayerSpot}
                onClick={onUnoccupiedSpotOneHandler}
              >
                <FaPlus className={classes.plus} />
              </button>
            )}
            {playerOne && (
              <Player player={playerOne} toggle={toggle} side="left" />
            )}
          </div>
        </div>
        <div className={`${classes.stats} flex-col`}>
          <span>Name</span>
          <span>Overall</span>
          {displayStatsContent}
          <span className={classes.fielding}>Duration</span>
          <span className={classes.fielding}>Fielding</span>
          <span className={classes.fielding}>Arm Strength</span>
          <span className={classes.fielding}>Arm Accuracy</span>
          <span className={classes.fielding}>Reaction</span>
          <span className={classes.running}>Speed</span>
          <span className={classes.running}>Stealing</span>
          <span className={classes.running}>Base Running</span>
        </div>
        <div className={`${classes.playerTwo} flex-col`}>
          {!playerTwo && (
            <button
              type="button"
              className={classes.unoccupiedPlayerSpot}
              onClick={onUnoccupiedSpotTwoHandler}
            >
              <FaPlus className={classes.plus} />
            </button>
          )}
          {playerTwo && (
            <Player player={playerTwo} toggle={toggle} side="right" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerComparison;
