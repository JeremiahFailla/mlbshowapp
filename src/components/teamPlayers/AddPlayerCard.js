import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import classes from "./AddPlayerCard.module.css";
import { useSelector, useDispatch } from "react-redux";

const AddPlayerCard = ({ lineupPosition, addPlayer, players = "" }) => {
  const [player, setPlayer] = useState(players);
  const selectedPlayer = useSelector((state) => state.selectedPlayer);
  const dispatch = useDispatch();

  const onSetCardHandler = () => {
    if (!selectedPlayer) return;
    console.log("Set card");
    addPlayer(lineupPosition, selectedPlayer);
    setPlayer(selectedPlayer);
    dispatch({ type: "unselectPlayer" });
  };

  const onSwapPlayerHandler = (e) => {
    console.log(e.target);
  };
  useEffect(() => {
    console.log(players);
    setPlayer(players);
  }, [players]);
  return (
    <React.Fragment>
      {!player && (
        <div
          className={classes.unoccupiedPlayerSpot}
          onClick={onSetCardHandler}
        >
          <FaPlus className={classes.plus} />
        </div>
      )}
      {player && (
        <div
          className={classes.occupiedPlayerSpot}
          onClick={onSwapPlayerHandler}
          data-id={lineupPosition}
        >
          {player.name}
        </div>
      )}
    </React.Fragment>
  );
};

export default AddPlayerCard;
