import React, { Fragment, useState } from "react";
import DisplayStats from "./displayStats/DisplayStats";
import classes from "./styles/PlayersList.module.css";

const PlayersList = (props) => {
  const [showStats, setShowStats] = useState(false);

  const addBackground = (e) => {
    setShowStats(true);
    e.target.style.backgroundColor = "black";
  };
  return (
    <div className={classes.grid}>
      {props.players.map((player, i) => (
        <Fragment>
          <div onClick={addBackground} key={i}>
            {player.name}
          </div>
          <div>{showStats && <DisplayStats player={player} />}</div>
        </Fragment>
      ))}
    </div>
  );
};

export default PlayersList;
