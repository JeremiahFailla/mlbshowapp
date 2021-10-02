import React from "react";
import classes from "./styles/Features.module.css";
import { Link } from "react-router-dom";

const Features = (props) => {
  const title =
    props.title === "welc"
      ? "Tryout These Tools"
      : "Checkout These Other Tools";
  return (
    <div className={classes.toolArea}>
      <p>{title}</p>
      <div className={`${classes.tools} flex`}>
        {props.page !== "build" && <Link to="/build-team">Build a Team</Link>}
        {props.page !== "search" && (
          <Link to="search-players">Search Players</Link>
        )}
        {props.page !== "compare" && (
          <Link to="compare-players">Compare Players</Link>
        )}
      </div>
    </div>
  );
};

export default Features;
