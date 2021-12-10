import React from "react";
import Card from "../components/layout/Card";
import classes from "./pageStyles/Welcome.module.css";

import Features from "../components/Features";
import Footer from "../components/layout/Footer";

const Welcome = () => {
  return (
    <React.Fragment>
      <Card></Card>
      <div className={classes.body}>
        <div className={classes.title}>
          <h1>
            Welcome to <span className={classes.brand}>HomePlate</span>
          </h1>
        </div>
        <div className={classes.description}>
          <p>
            The Site that all the MLB The Show players have been waiting for.{" "}
          </p>
        </div>
        <Features title="welc" />
        <div className={classes.updates}>
          <p>
            Watch out for the latest Roster Updates to see which of your
            favorite players got upgrades or downgrades
          </p>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Welcome;
