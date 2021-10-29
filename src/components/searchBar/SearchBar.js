import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const [name, setName] = useState("");
  const [league, setLeague] = useState("Both");
  const [division, setDivision] = useState("All");
  const [divisionToggle, setDivisionToggle] = useState(true);

  useEffect(() => {
    console.log(league, division);
  }, [league, division]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Finding player");
  };

  const onLeagueHandler = (e) => {
    if (e.target.value === "AL" || e.target.value === "NL") {
      setLeague(e.target.value);
      setDivisionToggle(false);
    } else {
      setDivisionToggle(true);
      setDivision("All");
    }
  };

  const onDivisionChangeHandler = (e) => {
    setDivision(e.target.value);
  };

  let visibleTeams;

  if (division === "All") {
    visibleTeams = (
      <select name="teams" id="teams" className={classes.teams} disabled>
        <option value="All">All</option>
      </select>
    );
  }

  if (division === "east" && league === "AL") {
    visibleTeams = (
      <select name="teams" id="teams" className={classes.teams}>
        <option value="All">All</option>
        <option value="orioles">Orioles</option>
        <option value="redSox">Red Sox</option>
        <option value="blueJays">Blue Jays</option>
        <option value="rays">Rays</option>
        <option value="yankees">Yankees</option>
      </select>
    );
  }

  if (division === "central" && league === "AL") {
    visibleTeams = (
      <select name="teams" id="teams" className={classes.teams}>
        <option value="All">All</option>
        <option value="whiteSox">White Sox</option>
        <option value="royals">Royals</option>
        <option value="indians">Indians</option>
        <option value="twins">Twins</option>
        <option value="tigers">Tigers</option>
      </select>
    );
  }

  if (division === "west" && league === "AL") {
    visibleTeams = (
      <select name="teams" id="teams" className={classes.teams}>
        <option value="All">All</option>
        <option value="angels">Angels</option>
        <option value="athletics">Athletics</option>
        <option value="rangers">Rangers</option>
        <option value="mariners">Mariners</option>
        <option value="astros">Astros</option>
      </select>
    );
  }

  if (division === "east" && league === "NL") {
    visibleTeams = (
      <select name="teams" id="teams" className={classes.teams}>
        <option value="All">All</option>
        <option value="nationals">Nationals</option>
        <option value="marlins">Marlins</option>
        <option value="mets">Mets</option>
        <option value="phillies">Phillies</option>
        <option value="braves">Braves</option>
      </select>
    );
  }

  if (division === "central" && league === "NL") {
    visibleTeams = (
      <select name="teams" id="teams" className={classes.teams}>
        <option value="All">All</option>
        <option value="cubs">Cubs</option>
        <option value="brewers">Brewers</option>
        <option value="cardinals">Cardinals</option>
        <option value="reds">Reds</option>
        <option value="pirates">Pirates</option>
      </select>
    );
  }

  if (division === "west" && league === "NL") {
    visibleTeams = (
      <select name="teams" id="teams" className={classes.teams}>
        <option value="All">All</option>
        <option value="dodgers">Dodgers</option>
        <option value="diamondbacks">Diamondbacks</option>
        <option value="giants">Giants</option>
        <option value="rockies">Rockies</option>
        <option value="padres">Padres</option>
      </select>
    );
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <button type="submit" className={classes.submit}>
        <FaSearch className={classes.searchIcon} />
      </button>
      <input
        type="text"
        placeholder="Juan Soto"
        className={classes.nameInput}
      />
      <select
        name="league"
        id="league"
        className={classes.league}
        onChange={onLeagueHandler}
      >
        <option value="both" selected>
          Both
        </option>
        <option value="AL">AL</option>
        <option value="NL">NL</option>
      </select>
      {divisionToggle ? (
        <select
          name="division"
          id="division"
          className={classes.division}
          disabled
        >
          <option value="All" selected>
            All
          </option>
          <option value="east">East</option>
          <option value="central">Central</option>
          <option value="west">West</option>
        </select>
      ) : (
        <select
          name="division"
          id="division"
          className={classes.division}
          onChange={onDivisionChangeHandler}
        >
          <option value="All">All</option>
          <option value="east">East</option>
          <option value="central">Central</option>
          <option value="west">West</option>
        </select>
      )}

      {visibleTeams}
    </form>
  );
};

export default SearchBar;
