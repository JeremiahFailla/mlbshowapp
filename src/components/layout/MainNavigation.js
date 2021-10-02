import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav>
      <Link to="/" className={`${classes.link} ${classes.logo}`}>
        GoingPro
      </Link>
      <div className={classes.navGroup}>
        <ul className={classes.linkContainer}>
          <NavLink to="/build-team" className={classes.link}>
            Build Team
          </NavLink>
        </ul>
        <ul className={classes.linkContainer}>
          <NavLink to="search-players" className={classes.link}>
            Search Player
          </NavLink>
        </ul>
        <ul className={classes.linkContainer}>
          <NavLink to="compare-players" className={classes.link}>
            Compare Players
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
