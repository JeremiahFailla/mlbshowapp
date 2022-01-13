import React, { useState } from "react";
import PlayerStatsModal from "../modals/PlayerStatsModal";
import classes from "./DisplayStats.module.css";
import { useDispatch } from "react-redux";
import { FaRegWindowClose } from "react-icons/fa";
import PositionPlayerStats from "./PositionPlayerStats";
import PitcherPlayerStats from "./PitcherPlayerStats";

const DisplayStats = ({ player }) => {
  const [toggle, setToggle] = useState(
    player.position.includes("SP") || player.position.includes("RP")
      ? false
      : true
  );
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: "closeModal" });
  };

  const onToggleStatsHandler = () => {
    console.log("Change showing stats");
    setToggle(!toggle);
  };

  return (
    <PlayerStatsModal>
      <div className={`flex-col ${classes.playerStats}`}>
        <div className={`flex-c`}>
          {player.position.includes("SP") || player.position.includes("RP") ? (
            <button
              type="button"
              className={classes.toggleBtn}
              onClick={onToggleStatsHandler}
            >
              {toggle ? "Show Pitching Stats" : "Show Batting Stats"}
            </button>
          ) : (
            ""
          )}

          <button type="button" onClick={closeModal} className={classes.btn}>
            <FaRegWindowClose className={classes.btnIcon} />
          </button>
        </div>
        <div className={classes.nameArea}>
          <span>{player.name}</span>
          <span># {player.number}</span>
          <span>Team: {player.team}</span>
          <span>Position: {player.position}</span>
          <span>Overall: {player.overall}</span>
        </div>
        <div className={`${classes.generalPlayerInfo} flex-c`}>
          <div className={classes.statContainer}>
            <span className={`${classes.label}`}>Bat</span>
            <span className={`${classes.playerStat}`}>{player.bats}</span>
          </div>
          <div className={classes.statContainer}>
            <span className={`${classes.label}`}>Throws</span>
            <span className={`${classes.playerStat}`}>{player.throws}</span>
          </div>
          <div className={classes.statContainer}>
            <span className={`${classes.label}`}>Secondary</span>
            <span className={`${classes.playerStat}`}>
              {player.secondary ? player.secondary : "None"}
            </span>
          </div>
          <div className={classes.statContainer}>
            <span className={`${classes.label}`}>Weight</span>
            <span className={`${classes.playerStat}`}>{player.weight}</span>
          </div>
          <div className={classes.statContainer}>
            <span className={`${classes.label}`}>Height</span>
            <span className={`${classes.playerStat}`}>{player.height}</span>
          </div>
          <div className={classes.statContainer}>
            <span className={`${classes.label}`}>Age</span>
            <span className={`${classes.playerStat}`}>{player.age}</span>
          </div>
          <div className={classes.statContainer}>
            <span className={`${classes.label}`}>Born</span>
            <span className={`${classes.playerStat}`}>{player.born}</span>
          </div>
        </div>
        {toggle && <PositionPlayerStats player={player} />}
        {!toggle && <PitcherPlayerStats player={player} />}
        <div className={classes.statsRow}>
          <div className={classes.individualStat}>
            <span className={classes.fielding}>FLD</span>
            <span className={classes.playerStat}>{player.fld}</span>
          </div>
          <div className={classes.individualStat}>
            <span className={classes.fielding}>ARM STR</span>
            <span className={classes.playerStat}>{player.armStr}</span>
          </div>
          <div className={classes.individualStat}>
            <span className={classes.fielding}>ARM ACC</span>
            <span className={classes.playerStat}>{player.armAcc}</span>
          </div>
          <div className={classes.individualStat}>
            <span className={classes.fielding}>REAC</span>
            <span className={classes.playerStat}>{player.reac}</span>
          </div>
        </div>

        <div className={classes.statsRow}>
          <div className={classes.individualStat}>
            <span className={classes.running}>SPD</span>
            <span className={classes.playerStat}>{player.spd}</span>
          </div>
          <div className={classes.individualStat}>
            <span className={classes.running}>STL</span>
            <span className={classes.playerStat}>{player.stl}</span>
          </div>
          <div className={classes.individualStat}>
            <span className={classes.running}>BR AGG</span>
            <span className={classes.playerStat}>{player.brAgg}</span>
          </div>
        </div>
      </div>
    </PlayerStatsModal>
  );
};

export default DisplayStats;
