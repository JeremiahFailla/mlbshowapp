import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import classes from "./AddPlayerCard.module.css";
import { useSelector, useDispatch } from "react-redux";

const AddPlayerCard = ({ lineupPosition, addPlayer, players = "" }) => {
  const selectedPlayer = useSelector((state) => state.selectedPlayer);
  const dispatch = useDispatch();

  const onSetCardHandler = () => {
    if (!selectedPlayer) return;
    console.log("Set card");
    dispatch({ type: "unselectPlayer" });
    addPlayer(lineupPosition, selectedPlayer);
  };

  return (
    <React.Fragment>
      {!players && (
        <div
          className={classes.unoccupiedPlayerSpot}
          onClick={onSetCardHandler}
        >
          <FaPlus className={classes.plus} />
        </div>
      )}
      {players && (
        <div className={classes.occupiedPlayerSpot}>{players.name}</div>
      )}
    </React.Fragment>
  );
};

export default AddPlayerCard;
