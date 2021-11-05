import React from "react";
import classes from "./BuildTeamPlayers.module.css";
import Lineup from "./Lineup";

const BuildTeamPlayers = () => {
  return (
    <div className={classes.container}>
      <div className={classes.starters}>
        <div className={classes.lineup}>
          <Lineup />
        </div>
        <div className={classes.rotation}></div>
      </div>
      <div className={classes.backups}>
        <div className={classes.bench}></div>
        <div className={classes.bullpen}></div>
      </div>
    </div>
  );
};

export default BuildTeamPlayers;
