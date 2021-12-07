import React, { useEffect, useState } from "react";
import Card from "../components/layout/Card";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../components/searchBar/SearchBar";
import Features from "../components/Features";
import PlayersList from "../components/PlayersList";
import Footer from "../components/layout/Footer";
import classes from "./pageStyles/ComparePlayers.module.css";
import PlayerComparison from "../components/comparePlayers/PlayerComparison";

const names = [
  {
    id: 0,
    team: "Orioles",
    name: "Austin Hays",
    number: 21,
    position: "LF",
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
    btn: 71,
    drgBtn: 62,
    dur: 78,
    fld: 85,
    armStr: 55,
    armAcc: 48,
    reac: 87,
  },
  {
    id: 2,
    team: "Orioles",
    name: "John Means",
    number: 47,
    position: "SP",
    overall: 83,
    bats: "L",
    throws: "L",
    secondary: "",
    weight: 235,
    height: "6'3\"",
    age: 27,
    born: "Kansas",
    conR: 6,
    conL: 3,
    pwrR: 0,
    pwrL: 0,
    vis: 2,
    disc: 8,
    clu: 3,
    dur: 74,
    fld: 48,
    armStr: 56,
    armAcc: 38,
    reac: 39,
    spd: 38,
    stl: 0,
    brAgg: 7,
    btn: 71,
    drgBtn: 62,
    sta: 83,
    hPerNine: 81,
    kPerNine: 56,
    wPerNine: 86,
    hrPerNine: 52,
    pClu: 90,
    ctrl: 65,
    vel: 73,
    brk: 98,
  },
];

const ComparePlayers = () => {
  const [searchedPlayers, setSearchedPlayers] = useState([]);
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(players);
  }, []);

  const getData = (player) => {
    // if (true) return;
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
          <h1>Compare Players</h1>
        </div>
        <div className={classes.description}>
          <p>Use this tool to compare players on active MLB rosters</p>
        </div>
        <PlayersList players={names} type="double" />
        <PlayerComparison />
        <Features page="compare" />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default ComparePlayers;
