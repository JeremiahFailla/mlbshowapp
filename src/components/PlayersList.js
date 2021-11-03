import React, { Fragment } from "react";
import DisplayStats from "./displayStats/DisplayStats";
import classes from "./styles/PlayersList.module.css";
import { useSelector, useDispatch } from "react-redux";

const PlayersList = (props) => {
  const modalOpen = useSelector((state) => state.modalState);
  const selectedPlayer = useSelector((state) => state.selectedPlayer);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch({ type: "openModal" });
  };

  const clickedPlayer = (player) => {
    dispatch({ type: "selectedPlayer", selectedPlayer: player });
  };

  const onPlayerClick = (player) => {
    openModal();
    clickedPlayer(player);
  };
  return (
    <div className={classes.grid}>
      {props.players.map((player) => (
        <div key={player.id} onClick={onPlayerClick.bind(this, player)}>
          {player.name}
        </div>
      ))}
      {modalOpen && <DisplayStats player={selectedPlayer} />}
    </div>
  );
};

export default PlayersList;
