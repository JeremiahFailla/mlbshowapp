import React from "react";
import classes from "./DisplayStats.module.css";

const PitcherPlayerStats = ({ player }) => {
  return (
    <React.Fragment>
      <table>
        <tbody>
          <tr>
            <th className={`${classes.pitching} ${classes.pitching1}`}>STA</th>
            <th className={`${classes.pitching} ${classes.pitching1}`}>H/9</th>
            <th className={`${classes.pitching} ${classes.pitching1}`}>K/9</th>
            <th className={`${classes.pitching} ${classes.pitching1}`}>BB/9</th>
            <th className={`${classes.pitching} ${classes.pitching1}`}>HR/9</th>
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
            <th className={`${classes.pitching} ${classes.pitching2}`}>CLU</th>
            <th className={`${classes.pitching} ${classes.pitching2}`}>CTRL</th>
            <th className={`${classes.pitching} ${classes.pitching2}`}>VEL</th>
            <th className={`${classes.pitching} ${classes.pitching2}`}>BRK</th>
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
