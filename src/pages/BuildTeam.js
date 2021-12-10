import React, { useState } from "react";
import Features from "../components/Features";
import Card from "../components/layout/Card";
import Footer from "../components/layout/Footer";
import BuildTeamPlayers from "../components/teamPlayers/BuildTeamPlayers";
import PlayersList from "../components/PlayersList";
import SearchBar from "../components/searchBar/SearchBar";
import classes from "./pageStyles/BuildTeam.module.css";
import { useSelector } from "react-redux";
// import names from "./../data/data";

const BuildTeam = () => {
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
          <h1>Build Your Team</h1>
        </div>
        <div className={classes.description}>
          <p>
            Create the team that you have always wanted with any of the current
            active players. Simply search for players using the above searchbar.
            Once you found the player you are looking for select the player and
            place them into the lineup, rotation, bullpen, or bench. To view a
            players attributes, double click their name
          </p>
        </div>
        <PlayersList
          players={searchedPlayers}
          type="double"
          searchFunc={getData}
        />
        <BuildTeamPlayers />
        <Features page="build" />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default BuildTeam;
