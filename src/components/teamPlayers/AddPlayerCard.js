import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import classes from "./AddPlayerCard.module.css";
import { useSelector, useDispatch } from "react-redux";

const AddPlayerCard = React.memo(
  ({
    lineupPosition,
    addPlayer,
    player = "",
    selectPlayerFunc = "",
    swapPosition = "",
    positionPlayer,
    positionAllowed = "",
  }) => {
    const [selected, setSelected] = useState(false);
    const selectedPlayer = useSelector((state) => state.selectedPlayer);
    const selectedPlayerOnTeam = useSelector(
      (state) => state.selectedPlayerOnTeam
    );
    const dispatch = useDispatch();

    const onSetCardHandler = () => {
      if (!selectedPlayer) return;
      if (!positionAllowed.includes(selectedPlayer.position)) {
        dispatch({
          type: "errorMessage",
          message: "The player selected cannot play this position",
        });
        return;
      }
      console.log("Set card");
      addPlayer(lineupPosition, selectedPlayer);
      dispatch({ type: "unselectPlayer" });
    };

    const onSwapPlayerHandler = (e) => {
      console.log(e.target);
      const selectedPlayerid = +e.target.dataset.id;
      const selectedPlayerPosition = +e.target.dataset.position;
      if (!selectedPlayerOnTeam) {
        selectPlayerFunc(player, selectedPlayerPosition, positionPlayer);
        setSelected(true);
        return;
      }
      if (selectedPlayerOnTeam.player.id === selectedPlayerid) {
        dispatch({
          type: "errorMessage",
          message: "Cannot swap the same player",
        });
        return;
      }
      if (selectedPlayerOnTeam.positionPlayer !== positionPlayer) {
        console.log("They are not the same position");
        return;
      }
      swapPosition(player, selectedPlayerPosition);
    };

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
      <React.Fragment>
        {!player && (
          <div className="flex-col">
            <div
              className={classes.unoccupiedPlayerSpot}
              onClick={onSetCardHandler}
            >
              <FaPlus className={classes.plus} />
            </div>
          </div>
        )}
        {player && (
          <div className="flex-col">
            <div
              className={classes.occupiedPlayerSpot}
              onClick={onSwapPlayerHandler}
              data-position={lineupPosition}
              data-id={player.id}
              onDoubleClick={onPlayerClick.bind(this, player)}
            >
              {player.name}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
);

export default AddPlayerCard;
