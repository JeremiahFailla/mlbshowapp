import React from "react";
import { FaPlus } from "react-icons/fa";
import classes from "./AddPlayerCard.module.css";

const AddPlayerCard = () => {
  return (
    <div className={classes.playerSpot}>
      <FaPlus className={classes.plus} />
    </div>
  );
};

export default AddPlayerCard;
