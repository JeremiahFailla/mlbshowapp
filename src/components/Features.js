import React from "react";
import classes from "./Features.module.css";
import { Link } from "react-router-dom";

export const Features = () => {
  return (
    <div className={classes.toolArea}>
      <p>Tryout These New Tools</p>
      <div className={`${classes.tools} flex`}>
        <Link>Build a Team</Link>
        <Link>Search Players</Link>
        <Link>Compare Players</Link>
      </div>
    </div>
  );
};
