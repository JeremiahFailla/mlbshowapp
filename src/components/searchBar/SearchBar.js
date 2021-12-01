import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [searchPlayer, setSearchPlayer] = useState({
    name: "",
    league: "Both",
    division: "All",
    team: "All",
  });
  const [league, setLeague] = useState("Both");
  const [division, setDivision] = useState("All");
  const [divisionToggle, setDivisionToggle] = useState(true);
  const [name, setName] = useState("");
  const [player, setPlayer] = useState("");

  useEffect(() => {
    console.log(searchPlayer);
  }, [searchPlayer]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      player.name === searchPlayer.name &&
      player.league === searchPlayer.league &&
      player.division === searchPlayer.division &&
      player.team === searchPlayer.team
    ) {
      console.log("Search Result Are Already Below");
      return;
    }
    if (!searchPlayer.name) {
      console.log("Enter a Name");
      return;
    }
    console.log("Finding player");
    setPlayer(searchPlayer);
    props.searchFunc(searchPlayer);
  };

  const onLeagueHandler = (e) => {
    if (e.target.value === "AL" || e.target.value === "NL") {
      setLeague(e.target.value);
      setDivisionToggle(false);
      setSearchPlayer((prev) => {
        return {
          ...prev,
          league: e.target.value,
          team: "All",
        };
      });
    } else {
      setSearchPlayer((prev) => {
        return {
          ...prev,
          league: e.target.value,
          division: "All",
          team: "All",
        };
      });
      setDivisionToggle(true);
      setDivision("All");
    }
  };

  const onDivisionChangeHandler = (e) => {
    setDivision(e.target.value);
    setSearchPlayer((prev) => {
      return {
        ...prev,
        division: e.target.value,
        team: "All",
      };
    });
  };

  const onTeamChangeHandler = (e) => {
    setSearchPlayer((prev) => {
      return {
        ...prev,
        team: e.target.value,
      };
    });
  };

  const onNameChangeHandler = (e) => {
    setSearchPlayer((prev) => {
      setName(e.target.value);
      return {
        ...prev,
        name: e.target.value,
      };
    });
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
      <select
        name="teams"
        id="teams"
        className={classes.teams}
        onChange={onTeamChangeHandler}
      >
        <option value="All">All</option>
        <option value="Orioles">Orioles</option>
        <option value="Red Sox">Red Sox</option>
        <option value="Blue Jays">Blue Jays</option>
        <option value="Rays">Rays</option>
        <option value="Yankees">Yankees</option>
      </select>
    );
  }

  if (division === "central" && league === "AL") {
    visibleTeams = (
      <select
        name="teams"
        id="teams"
        className={classes.teams}
        onChange={onTeamChangeHandler}
      >
        <option value="All">All</option>
        <option value="White Sox">White Sox</option>
        <option value="Royals">Royals</option>
        <option value="Indians">Indians</option>
        <option value="Twins">Twins</option>
        <option value="Tigers">Tigers</option>
      </select>
    );
  }

  if (division === "west" && league === "AL") {
    visibleTeams = (
      <select
        name="teams"
        id="teams"
        className={classes.teams}
        onChange={onTeamChangeHandler}
      >
        <option value="All">All</option>
        <option value="Angels">Angels</option>
        <option value="Athletics">Athletics</option>
        <option value="Rangers">Rangers</option>
        <option value="Mariners">Mariners</option>
        <option value="Astros">Astros</option>
      </select>
    );
  }

  if (division === "east" && league === "NL") {
    visibleTeams = (
      <select
        name="teams"
        id="teams"
        className={classes.teams}
        onChange={onTeamChangeHandler}
      >
        <option value="All">All</option>
        <option value="Nationals">Nationals</option>
        <option value="Marlins">Marlins</option>
        <option value="Mets">Mets</option>
        <option value="Phillies">Phillies</option>
        <option value="Braves">Braves</option>
      </select>
    );
  }

  if (division === "central" && league === "NL") {
    visibleTeams = (
      <select
        name="teams"
        id="teams"
        className={classes.teams}
        onChange={onTeamChangeHandler}
      >
        <option value="All">All</option>
        <option value="Cubs">Cubs</option>
        <option value="Brewers">Brewers</option>
        <option value="Cardinals">Cardinals</option>
        <option value="Reds">Reds</option>
        <option value="Pirates">Pirates</option>
      </select>
    );
  }

  if (division === "west" && league === "NL") {
    visibleTeams = (
      <select
        name="teams"
        id="teams"
        className={classes.teams}
        onChange={onTeamChangeHandler}
      >
        <option value="All">All</option>
        <option value="Dodgers">Dodgers</option>
        <option value="Diamondbacks">Diamondbacks</option>
        <option value="Giants">Giants</option>
        <option value="Rockies">Rockies</option>
        <option value="Padres">Padres</option>
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
        value={name}
        onChange={onNameChangeHandler}
      />
      <select
        name="league"
        id="league"
        className={classes.league}
        onChange={onLeagueHandler}
      >
        <option value="Both" selected>
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
