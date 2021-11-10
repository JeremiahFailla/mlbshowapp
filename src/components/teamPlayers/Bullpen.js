import React from "react";
import AddPlayerCard from "./AddPlayerCard";
import classes from "./Bullpen.module.css";
import { useSelector, useDispatch } from "react-redux";

const Bullpen = () => {
  const startingBullpen = useSelector((state) => state.bullpen);

  return (
    <React.Fragment>
      <p className={classes.title}>Bullpen</p>
      {startingBullpen.map((el, i) => (
        <div className="flex-c">
          <span>{i + 1}. </span>
          <AddPlayerCard key={i} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default Bullpen;
