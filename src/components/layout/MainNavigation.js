import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { FaBars } from "react-icons/fa";

const MainNavigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  // const mobileNavClasses = showMobileNav
  //   ? `${classes.mobileNav} ${classes.moveDown}`
  const showNavBarHandler = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <nav>
      <div className={classes.desktopNav}>
        <Link to="/" className={`${classes.link} ${classes.logo}`}>
          HomePlate
        </Link>
        <div className={classes.navGroup}>
          <ul className={classes.linkContainer}>
            <NavLink
              to="/build-team"
              activeClassName={classes.active}
              className={classes.link}
            >
              Build Team
            </NavLink>
          </ul>
          <ul className={classes.linkContainer}>
            <NavLink
              to="search-players"
              activeClassName={classes.active}
              className={classes.link}
            >
              Search Player
            </NavLink>
          </ul>
          <ul className={classes.linkContainer}>
            <NavLink
              to="compare-players"
              activeClassName={classes.active}
              className={classes.link}
            >
              Compare Players
            </NavLink>
          </ul>
        </div>
        <div className={classes.bars}>
          <FaBars onClick={showNavBarHandler} />
        </div>
      </div>
      {showMobileNav && (
        <div className={`${classes.mobileNav} ${classes.moveDown}`}>
          <ul className={classes.mobileLinkContainer}>
            <NavLink
              to="/build-team"
              activeClassName={classes.active}
              className={classes.link}
              onClick={showNavBarHandler}
            >
              Build Team
            </NavLink>
          </ul>
          <ul className={classes.mobileLinkContainer}>
            <NavLink
              to="search-players"
              activeClassName={classes.active}
              className={classes.link}
              onClick={showNavBarHandler}
            >
              Search Player
            </NavLink>
          </ul>
          <ul className={classes.mobileLinkContainer}>
            <NavLink
              to="compare-players"
              activeClassName={classes.active}
              className={classes.link}
              onClick={showNavBarHandler}
            >
              Compare Players
            </NavLink>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MainNavigation;
