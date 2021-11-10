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

  let content;

  if (props.type === "click") {
    content = (
      <div className={classes.grid}>
        {props.players.map((player) => (
          <div
            className={classes.playerCard}
            key={player.id}
            onClick={onPlayerClick.bind(this, player)}
          >
            <div className={`flex-c ${player.rating} ${classes.rating}`}>
              {player.overall}
            </div>
            <div>{player.name}</div>
          </div>
        ))}
        {modalOpen && <DisplayStats player={selectedPlayer} />}
      </div>
    );
  } else if (props.type === "double") {
    content = (
      <div className={classes.grid}>
        {props.players.map((player) => (
          <div
            className={classes.playerCard}
            key={player.id}
            onDoubleClick={onPlayerClick.bind(this, player)}
            onClick={clickedPlayer.bind(this, player)}
          >
            <div className={`flex-c ${player.rating} ${classes.rating}`}>
              {player.overall}
            </div>
            <div>{player.name}</div>
          </div>
        ))}
        {modalOpen && <DisplayStats player={selectedPlayer} />}
      </div>
    );
  }
  return content;
};

export default PlayersList;
