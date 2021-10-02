import React from "react";
import classes from "./styles/PlayersList.module.css";

const PlayersList = (props) => {
  const addBackground = (e) => {
    e.target.style.backgroundColor = "black";
  };
  return (
    <div className={classes.grid}>
      {props.players.map((player) => (
        <div onClick={addBackground}>{player}</div>
      ))}
    </div>
  );
};

export default PlayersList;
