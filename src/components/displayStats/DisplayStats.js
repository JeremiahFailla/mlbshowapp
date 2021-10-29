import React from "react";
import PlayerStatsModal from "../modals/PlayerStatsModal";
import classes from "./DisplayStats.module.css";

const DisplayStats = ({ player }) => {
  return (
    <PlayerStatsModal>
      <div className={`flex-col ${classes.playerStats}`}>
        <div className={classes.nameArea}>
          <span>#{player.number}</span>
          <span>{player.position}</span>
          <span>{player.name}</span>
        </div>
        <table className={classes.personal}>
          <tr>
            <th>Overall</th>
            <th>Bats</th>
            <th>Throws</th>
            <th>Secondary</th>
            <th>Weight</th>
            <th>Height</th>
            <th>Age</th>
            <th>Born</th>
          </tr>
          <tr>
            <td>{player.overall}</td>
            <td>{player.bats}</td>
            <td>{player.throws}</td>
            <td>{player.secondary}</td>
            <td>{player.weight}</td>
            <td>{player.height}</td>
            <td>{player.age}</td>
            <td>{player.born}</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>CON R</th>
            <th>CON L</th>
            <th>PWR R</th>
            <th>PWR R</th>
            <th>VIS</th>
            <th>DISC</th>
            <th>CLU</th>
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
        </table>
        <table>
          <tr>
            <th>SPD</th>
            <th>STL</th>
            <th>BR AGG</th>
          </tr>
          <tr>
            <td>{player.spd}</td>
            <td>{player.stl}</td>
            <td>{player.brAgg}</td>
          </tr>
        </table>
      </div>
    </PlayerStatsModal>
  );
};

export default DisplayStats;
