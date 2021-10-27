import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const [name, setName] = useState("");
  const [league, setLeague] = useState("");
  const [division, setDivision] = useState("");
  const [divisionToggle, setDivisionToggle] = useState(true);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Finding player");
  };

  const onLeagueHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "AL" || e.target.value === "NL") {
      setDivisionToggle(false);
    } else {
      setDivisionToggle(true);
    }
  };

  const onDivisionChangeHandler = (e) => {};

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
          <option value="All">All</option>
          <option value="All">East</option>
          <option value="All">Central</option>
          <option value="All">West</option>
        </select>
      ) : (
        <select
          name="division"
          id="division"
          className={classes.division}
          onChange={onDivisionChangeHandler}
        >
          <option value="All">All</option>
          <option value="All">East</option>
          <option value="All">Central</option>
          <option value="All">West</option>
        </select>
      )}
    </form>
  );
};

export default SearchBar;
