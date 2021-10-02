import React from "react";

const DisplayStats = (props) => {
  return (
    <div className={`flex-col ${classes.playerStats}`}>
      <div className={classes.nameArea}>
        <span>#{props.number}</span>
        <span>{props.position}</span>
        <span>#{props.name}</span>
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
          <td>{props.overall}</td>
          <td>{props.bats}</td>
          <td>{props.throws}</td>
          <td>{props.secondary}</td>
          <td>{props.weight}</td>
          <td>{props.height}</td>
          <td>{props.age}</td>
          <td>{props.born}</td>
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
          <td>{props.conR}</td>
          <td>{props.conL}</td>
          <td>{props.pwrR}</td>
          <td>{props.pwrL}</td>
          <td>{props.vis}</td>
          <td>{props.disc}</td>
          <td>{props.clu}</td>
        </tr>
      </table>
      <table>
        <tr>
          <th>SPD</th>
          <th>STL</th>
          <th>BR AGG</th>
        </tr>
        <tr>
          <td>{props.spd}</td>
          <td>{props.stl}</td>
          <td>{props.brAgg}</td>
        </tr>
      </table>
    </div>
  );
};

export default DisplayStats;
