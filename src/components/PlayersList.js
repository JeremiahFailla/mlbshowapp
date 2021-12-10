import React, { useState, useEffect } from "react";
import DisplayStats from "./displayStats/DisplayStats";
import classes from "./styles/PlayersList.module.css";
import { useSelector, useDispatch } from "react-redux";

const PlayersList = (props) => {
  const modalOpen = useSelector((state) => state.modalState);
  const selectedPlayer = useSelector((state) => state.selectedPlayer);
  const [noPlayerContent, setNoPlayerContent] = useState("");
  const dispatch = useDispatch();
  const [searchedPlayersObj, setSearchedPlayersObj] = useState({
    players: [],
    page: 0,
    notFirstPage: 0,
  });

  useEffect(() => {
    setNoPlayerContent("Search For Players To Select From");
  }, []);

  useEffect(() => {
    setSearchedPlayersObj({
      players: props.players,
      page: 0,
      notFirstPage: 0,
    });

    return () => {
      setNoPlayerContent("No Players Found");
    };
  }, [props.players]);

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
    const first = searchedPlayersObj.page - 1;
    if (first === 0) {
      setSearchedPlayersObj({
        ...searchedPlayersObj,
        notFirstPage: 0,
        page: 0,
      });
      return;
    }
    setSearchedPlayersObj({
      ...searchedPlayersObj,
      notFirstPage: 1,
      page: searchedPlayersObj.page - 1,
    });
  };

  const onNextBtnHandler = () => {
    const numPages = Math.floor(searchedPlayersObj.players.length / 9) - 1;
    if (searchedPlayersObj.page >= numPages) return;
    setSearchedPlayersObj({
      ...searchedPlayersObj,
      notFirstPage: 1,
      page: searchedPlayersObj.page + 1,
    });
  };

  let content;

  if (props.type === "click") {
    content = (
      <div className={classes.grid}>
        {searchedPlayersObj.players
          .slice(
            searchedPlayersObj.notFirstPage + searchedPlayersObj.page * 9,
            searchedPlayersObj.notFirstPage + 9 + searchedPlayersObj.page * 9
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
        {searchedPlayersObj.players.length > 8 && (
          <div className={classes.paginationContainer}>
            <button
              type="button"
              className={classes.paginationBtn}
              onClick={onPrevBtnHandler}
            >
              Prev
            </button>
            <span className={classes.pageNumber}>
              {searchedPlayersObj.page + 1}
            </span>
            <button
              type="button"
              className={classes.paginationBtn}
              onClick={onNextBtnHandler}
            >
              Next
            </button>
          </div>
        )}
        {modalOpen && <DisplayStats player={selectedPlayer} />}
      </div>
    );
  } else if (props.type === "double") {
    content = (
      <div className={classes.grid}>
        {searchedPlayersObj.players
          .slice(
            searchedPlayersObj.notFirstPage + searchedPlayersObj.page * 9,
            searchedPlayersObj.notFirstPage + 9 + searchedPlayersObj.page * 9
          )
          .map((player) => (
            <div
              className={classes.playerCard}
              key={player.id}
              onDoubleClick={onPlayerClick.bind(this, player)}
              onClick={clickedPlayer.bind(this, player)}
              tabIndex="0"
            >
              <div className={`flex-c ${player.rating} ${classes.rating}`}>
                {player.overall}
              </div>
              <div>{player.name}</div>
            </div>
          ))}
        {searchedPlayersObj.players.length > 8 && (
          <div className={classes.paginationContainer}>
            <button
              type="button"
              className={classes.paginationBtn}
              onClick={onPrevBtnHandler}
            >
              Prev
            </button>
            <span className={classes.pageNumber}>
              {searchedPlayersObj.page + 1}
            </span>
            <button
              type="button"
              className={classes.paginationBtn}
              onClick={onNextBtnHandler}
            >
              Next
            </button>
          </div>
        )}
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
          <p className={classes.noContent}>{noPlayerContent}</p>
        </div>
      )}
    </div>
  );
};

export default PlayersList;
