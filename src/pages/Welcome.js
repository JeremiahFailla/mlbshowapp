import React from "react";
import Card from "../components/layout/Card";
import classes from "./pageStyles/Welcome.module.css";

const Welcome = () => {
  return (
    <React.Fragment>
      <Card></Card>
      <div className={classes.body}>
        <div className={classes.title}>
          <h1>Welcome to The Show</h1>
        </div>
        <div>
          <p>The Site that all the show players have been waiting for. </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
