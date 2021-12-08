import React, { useEffect, useState } from "react";
import Features from "../components/Features";
import Card from "../components/layout/Card";
import Footer from "../components/layout/Footer";
import BuildTeamPlayers from "../components/teamPlayers/BuildTeamPlayers";
import PlayersList from "../components/PlayersList";
import SearchBar from "../components/searchBar/SearchBar";
import classes from "./pageStyles/BuildTeam.module.css";
import { useSelector } from "react-redux";

const names = [
  {
    id: 0,
    name: "Austin Hays",
    number: 21,
    position: "lf",
    rating: "gold",
    overall: 81,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 84,
  },
  {
    id: 5,
    name: "Centric Mullins",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 6,
    name: "Ryan Mountcastle",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 7,
    name: "Dj Stewart",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 8,
    name: "Anthony Santandar",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 9,
    name: "Trey Mancini",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 10,
    name: "Ryan Makena",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 11,
    name: "Kyle Tucker",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 12,
    name: "Carlos Correa",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 13,
    name: "Aaron Judge",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 13,
    name: "Aaron Hicks",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 14,
    name: "Manny Machado",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 15,
    name: "Jordan Westburg",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 16,
    name: "Mike Trout",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 17,
    name: "Corey Seagar",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 18,
    name: "Kyle Seagar",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 19,
    name: "Max Kepler",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
  {
    id: 20,
    name: "Jon Jay",
    number: 31,
    position: "cf",
    rating: "diamond",
    overall: 86,
    bats: "R",
    throws: "R",
    secondary: "CF, RF",
    weight: 210,
    height: "6'",
    age: 26,
    born: "7/5/95",
    conR: 75,
    conL: 75,
    pwrR: 81,
    pwrL: 90,
    vis: 60,
    disc: 52,
    clu: 80,
    spd: 79,
    stl: 65,
    brAgg: 85,
    fld: 88,
  },
];

const BuildTeam = () => {
  const [searchedPlayers, setSearchedPlayers] = useState([]);
  const players = useSelector((state) => state.players);

  useEffect(() => {
    console.log(players);
  }, []);

  const getData = (player) => {
    const playersList = [];
    console.log(player);

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
    console.log(playersList);
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
            Create the team that you have always wanted with any current active
            players. Simply search for players using the above searchbar and
            select player and place them into the lineup, rotation, bullpen, or
            bench. To view a players attributes, double click their name
          </p>
        </div>
        <PlayersList players={names} type="double" searchFunc={getData} />
        <BuildTeamPlayers />
        <Features page="build" />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default BuildTeam;
