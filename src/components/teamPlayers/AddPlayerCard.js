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
  }) => {
    const [selected, setSelected] = useState(false);
    const selectedPlayer = useSelector((state) => state.selectedPlayer);
    const selectedPlayerOnTeam = useSelector(
      (state) => state.selectedPlayerOnTeam
    );
    const dispatch = useDispatch();

    const selectedClass = selected
      ? `${classes.occupiedPlayerSpot} ${classes.selected}`
      : `${classes.occupiedPlayerSpot}`;

    useEffect(() => {
      console.log(player);
    }, [player]);

    const onSetCardHandler = () => {
      if (!selectedPlayer) return;

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
        console.log("Cannot swap the same player");
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
          <div
            className={classes.unoccupiedPlayerSpot}
            onClick={onSetCardHandler}
          >
            <FaPlus className={classes.plus} />
          </div>
        )}
        {player && (
          <div
            className={selectedClass}
            onClick={onSwapPlayerHandler}
            data-position={lineupPosition}
            data-id={player.id}
            onDoubleClick={onPlayerClick.bind(this, player)}
          >
            {player.name}
          </div>
        )}
      </React.Fragment>
    );
  }
);

export default AddPlayerCard;
