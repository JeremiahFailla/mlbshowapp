import React from "react";
import classes from "./DisplayStats.module.css";

const PitcherPlayerStats = ({ player }) => {
  return (
    <React.Fragment>
      <div className={classes.statsRow}>
        <div className={classes.individualStat}>
          <span className={classes.pitching}>STA</span>
          <span className={classes.playerStat}>{player.sta}</span>
        </div>
        <div className={classes.individualStat}>
          <span className={classes.pitching}>H/9</span>
          <span className={classes.playerStat}>{player.hPerNine}</span>
        </div>
        <div className={classes.individualStat}>
          <span className={classes.pitching}>K/9</span>
          <span className={classes.playerStat}>{player.kPerNine}</span>
        </div>
        <div className={classes.individualStat}>
          <span className={classes.pitching}>BB/9</span>
          <span className={classes.playerStat}>{player.wPerNine}</span>
        </div>
        <div className={classes.individualStat}>
          <span className={classes.pitching}>HR/9</span>
          <span className={classes.playerStat}>{player.hrPerNine}</span>
        </div>
      </div>
      <div className={classes.statsRow}>
        <div className={classes.individualStat}>
          <span className={classes.pitching}>CLU</span>
          <span className={classes.playerStat}>{player.pClu}</span>
        </div>
        <div className={classes.individualStat}>
          <span className={classes.pitching}>CTRL</span>
          <span className={classes.playerStat}>{player.ctrl}</span>
        </div>
        <div className={classes.individualStat}>
          <span className={classes.pitching}>VEL</span>
          <span className={classes.playerStat}>{player.vel}</span>
        </div>
        <div className={classes.individualStat}>
          <span className={classes.pitching}>BRK</span>
          <span className={classes.playerStat}>{player.brk}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PitcherPlayerStats;
