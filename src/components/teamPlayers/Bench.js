import React from "react";
import AddPlayerCard from "./AddPlayerCard";
import classes from "./Bench.module.css";
import { useSelector, useDispatch } from "react-redux";

const Bench = () => {
  const startingBench = useSelector((state) => state.bench);
  return (
    <React.Fragment>
      <p className={classes.title}>Bench</p>
      {startingBench.map((el, i) => (
        <div className="flex-c">
          <span>{i + 1}. </span>
          <AddPlayerCard key={i} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default Bench;
