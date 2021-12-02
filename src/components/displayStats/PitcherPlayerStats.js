import React from "react";
import classes from "./DisplayStats.module.css";

const PitcherPlayerStats = ({ player }) => {
  return (
    <React.Fragment>
      <table>
        <tbody>
          <tr>
            <th className={classes.pitching}>STA</th>
            <th className={classes.pitching}>H/9</th>
            <th className={classes.pitching}>K/9</th>
            <th className={classes.pitching}>BB/9</th>
            <th className={classes.pitching}>HR/9</th>
          </tr>
          <tr>
            <td>{player.sta}</td>
            <td>{player.hPerNine}</td>
            <td>{player.kPerNine}</td>
            <td>{player.wPerNine}</td>
            <td>{player.hrPerNine}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th className={classes.pitching}>CLU</th>
            <th className={classes.pitching}>CTRL</th>
            <th className={classes.pitching}>VEL</th>
            <th className={classes.pitching}>BRK</th>
          </tr>
          <tr>
            <td>{player.pClu}</td>
            <td>{player.ctrl}</td>
            <td>{player.vel}</td>
            <td>{player.brk}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default PitcherPlayerStats;
