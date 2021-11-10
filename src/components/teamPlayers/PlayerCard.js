import React from "react";
import { useSelector, useDispatch } from "react-redux";

const PlayerCard = ({ player }) => {
  return <div>{player.name}</div>;
};

export default PlayerCard;
