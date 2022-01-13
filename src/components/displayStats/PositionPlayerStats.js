import React from "react";
import classes from "./DisplayStats.module.css";

const PositionPlayerStats = ({ player }) => {
  return (
    <div className={classes.statsRow}>
      <div className={classes.individualStat}>
        <span className={classes.batting}>CON R</span>
        <span className={classes.playerStat}>{player.conR}</span>
      </div>
      <div className={classes.individualStat}>
        <span className={classes.batting}>CON L</span>
        <span className={classes.playerStat}>{player.conL}</span>
      </div>
      <div className={classes.individualStat}>
        <span className={classes.batting}>PWR R</span>
        <span className={classes.playerStat}>{player.pwrR}</span>
      </div>
      <div className={classes.individualStat}>
        <span className={classes.batting}>PWR L</span>
        <span className={classes.playerStat}>{player.pwrL}</span>
      </div>
      <div className={classes.individualStat}>
        <span className={classes.batting}>VIS</span>
        <span className={classes.playerStat}>{player.vis}</span>
      </div>
      <div className={classes.individualStat}>
        <span className={classes.batting}>DISC</span>
        <span className={classes.playerStat}>{player.disc}</span>
      </div>
      <div className={classes.individualStat}>
        <span className={classes.batting}>CLU</span>
        <span className={classes.playerStat}>{player.clu}</span>
      </div>
    </div>
  );
};

export default PositionPlayerStats;
