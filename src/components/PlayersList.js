import React, { Fragment, useState, useEffect } from "react";
import DisplayStats from "./displayStats/DisplayStats";
import classes from "./styles/PlayersList.module.css";
import { useSelector, useDispatch } from "react-redux";

const PlayersList = (props) => {
  const modalOpen = useSelector((state) => state.modalState);
  const selectedPlayer = useSelector((state) => state.selectedPlayer);
  const dispatch = useDispatch();
  const [searchedPlayersObj, setSearchedPlayersObj] = useState({
    players: props.players,
    page: 0,
  });

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

  const onPrevBtnHandler = () => {
    if (searchedPlayersObj.page === 0) return;
    setSearchedPlayersObj({
      ...searchedPlayersObj,
      page: searchedPlayersObj.page - 1,
    });
  };

  const onNextBtnHandler = () => {
    const numPages = Math.floor(searchedPlayersObj.players.length / 9);
    console.log(numPages);
    if (searchedPlayersObj.page === numPages) return;
    setSearchedPlayersObj({
      ...searchedPlayersObj,
      page: searchedPlayersObj.page + 1,
    });
  };

  let content;

  if (props.type === "click") {
    content = (
      <div className={classes.grid}>
        {searchedPlayersObj.players
          .slice(
            0 + searchedPlayersObj.page * 9,
            9 + searchedPlayersObj.page * 9
          )
          .map((player) => (
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
        <div className={classes.paginationContainer}>
          <button type="button">next</button>
        </div>
        {modalOpen && <DisplayStats player={selectedPlayer} />}
      </div>
    );
  } else if (props.type === "double") {
    content = (
      <div className={classes.grid}>
        {searchedPlayersObj.players
          .slice(
            0 + searchedPlayersObj.page * 9,
            9 + searchedPlayersObj.page * 9
          )
          .map((player) => (
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
        <div className={classes.paginationContainer}>
          <button
            type="button"
            className={classes.paginationBtn}
            onClick={onPrevBtnHandler}
          >
            Prev
          </button>
          <button
            type="button"
            className={classes.paginationBtn}
            onClick={onNextBtnHandler}
          >
            Next
          </button>
        </div>
        {modalOpen && <DisplayStats player={selectedPlayer} />}
      </div>
    );
  }
  return (
    <div className={classes.contentContainer}>
      {props.players.length > 0 ? (
        content
      ) : (
        <div className={`flex-c`}>
          <p className={classes.noContent}>Search For Players To Select From</p>
        </div>
      )}
    </div>
  );
};

export default PlayersList;
