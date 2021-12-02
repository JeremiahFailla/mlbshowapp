import React from "react";
import classes from "./DisplayStats.module.css";

const PositionPlayerStats = ({ player }) => {
  return (
    <React.Fragment>
      <table>
        <tbody>
          <tr>
            <th className={classes.batting}>CON R</th>
            <th className={classes.batting}>CON L</th>
            <th className={classes.batting}>PWR R</th>
            <th className={classes.batting}>PWR R</th>
            <th className={classes.batting}>VIS</th>
            <th className={classes.batting}>DISC</th>
            <th className={classes.batting}>CLU</th>
          </tr>
          <tr>
            <td>{player.conR}</td>
            <td>{player.conL}</td>
            <td>{player.pwrR}</td>
            <td>{player.pwrL}</td>
            <td>{player.vis}</td>
            <td>{player.disc}</td>
            <td>{player.clu}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default PositionPlayerStats;
