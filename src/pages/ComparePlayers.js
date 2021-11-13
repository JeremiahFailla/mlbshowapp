import React, { useEffect, useState } from "react";
import Card from "../components/layout/Card";
import { useSelector, useDispatch } from "react-redux";

const ComparePlayers = () => {
  const counter = useSelector((state) => state.counter);
  // const [number, setNumber] = useState(counter);
  const dispatch = useDispatch();

  const increaseCounter = () => {
    dispatch({ type: "increase" });
  };

  useEffect(() => {
    console.log(counter);
    // setNumber(counter);
  }, [counter]);

  return (
    <React.Fragment>
      <Card></Card>
      <h1>Page to compare players</h1>
      <button onClick={increaseCounter}>Increase</button>
      {counter}
    </React.Fragment>
  );
};

export default ComparePlayers;
