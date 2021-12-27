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
        <table>
          <tbody>
            <tr>
              <th className={classes.fielding}>FLD</th>
              <th className={classes.fielding}>ARM STR</th>
              <th className={classes.fielding}>ARM ACC</th>
              <th className={classes.fielding}>REAC</th>
            </tr>
            <tr>
              <td>{player.conR}</td>
              <td>{player.conL}</td>
              <td>{player.pwrR}</td>
              <td>{player.pwrL}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th className={classes.running}>SPD</th>
              <th className={classes.running}>STL</th>
              <th className={classes.running}>BR AGG</th>
            </tr>
            <tr>
              <td>{player.spd}</td>
              <td>{player.stl}</td>
              <td>{player.brAgg}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </PlayerStatsModal>
  );
};

export default DisplayStats;
