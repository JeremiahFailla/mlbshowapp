import React, { useState } from "react";
import Card from "../components/layout/Card";
import { useSelector } from "react-redux";
import SearchBar from "../components/searchBar/SearchBar";
import Features from "../components/Features";
import PlayersList from "../components/PlayersList";
import Footer from "../components/layout/Footer";
import classes from "./pageStyles/ComparePlayers.module.css";
import PlayerComparison from "../components/comparePlayers/PlayerComparison";
// import names from "./../data/data";

const ComparePlayers = () => {
  const [searchedPlayers, setSearchedPlayers] = useState([]);
  const players = useSelector((state) => state.players);

  const getData = (player) => {
    const playersList = [];

    if (
      player.league !== "Both" &&
      player.division !== "All" &&
      player.team !== "All"
    ) {
      console.log("Query 1");
      players.forEach((pl) => {
        if (
          pl.league === player.league &&
          pl.division === player.division &&
          pl.team === player.team &&
          pl.name.toLowerCase().includes(player.name.toLowerCase().trim())
        ) {
          playersList.push(pl);
        }
      });
    } else if (
      player.league !== "Both" &&
      player.division !== "All" &&
      player.team === "All"
    ) {
      console.log("Query 2");
      players.forEach((pl) => {
        if (
          pl.league === player.league &&
          pl.division === player.division &&
          pl.name.toLowerCase().includes(player.name.toLowerCase().trim())
        ) {
          playersList.push(pl);
        }
      });
    } else if (
      player.league !== "Both" &&
      player.division === "All" &&
      player.team === "All"
    ) {
      console.log("Query 3");
      players.forEach((pl) => {
        if (
          pl.league === player.league &&
          pl.name.toLowerCase().includes(player.name.toLowerCase().trim())
        ) {
          playersList.push(pl);
        }
      });
    } else if (player.league === "Both") {
      console.log("Query 4");
      players.forEach((pl) => {
        if (pl.name.toLowerCase().includes(player.name.toLowerCase().trim())) {
          playersList.push(pl);
        }
      });
    }
    setSearchedPlayers([...playersList]);
  };

  return (
    <React.Fragment>
      <Card>
        <SearchBar searchFunc={getData} />
      </Card>
      <div className={classes.body}>
        <div className={classes.title}>
          <h1>Compare Players</h1>
        </div>
        <div className={classes.description}>
          <p>
            Use this tool to compare players on active MLB rosters. Double click
            a player to see everything about them.
          </p>
        </div>
        <PlayersList players={searchedPlayers} type="double" />
        <PlayerComparison />
        <Features page="compare" />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default ComparePlayers;
