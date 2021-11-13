import React from "react";
import AddPlayerCard from "./AddPlayerCard";
import classes from "./Bench.module.css";
import { useSelector, useDispatch } from "react-redux";
import ResetBtn from "./ResetBtn";

const Bench = () => {
  const startingBench = useSelector((state) => state.bench);
  const dispatch = useDispatch();

  const addPlayerToBench = (i, player) => {
    dispatch({ type: "addPlayerToBench", index: i, player: player });
  };
  const onResetBenchHandler = () => {
    dispatch({ type: "resetBench" });
  };
  return (
    <div className={classes.animation}>
      <div className={`flex-c ${classes.titleContainer}`}>
        <p className={classes.title}>Bench</p>
        <ResetBtn resetFunc={onResetBenchHandler}>Reset Bench</ResetBtn>
      </div>
      {startingBench.map((el, i) => (
        <div className="flex-c" key={i}>
          <span>{i + 1}. </span>
          <AddPlayerCard
            key={i}
            lineupPosition={i}
            addPlayer={addPlayerToBench}
            player={el}
          />
        </div>
      ))}
    </div>
  );
};

export default Bench;
