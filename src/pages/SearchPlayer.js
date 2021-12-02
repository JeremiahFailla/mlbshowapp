import {
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
} from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import Card from "../components/layout/Card";
import db from "./../firebase/firebase.config";
import { useSelector, useDispatch } from "react-redux";
import classes from "./pageStyles/SearchPlayers.module.css";
import Features from "../components/Features";
import PlayersList from "../components/PlayersList";
import SearchBar from "../components/searchBar/SearchBar";
import Footer from "../components/layout/Footer";

// const q = query(
//   collection(db, "players"),
//   where("name", "==", "Austin Hays")
// );
// q = query(citiesRef, where("name", "==", "Austin Hays"));

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
  },
];

const SearchPlayer = () => {
  const [searchedPlayers, setSearchedPlayers] = useState([]);
  const players = useSelector((state) => state.players);

  useEffect(() => {
    console.log(players);
  }, []);

  // const getData = async (player) => {
  //   if (true) return;
  //   const playersList = [];
  //   console.log(player);

  //   const playersRef = collection(db, "players");
  //   // Create a query against the collection.
  //   // let q = query(playersRef, where("name", ">=", player.name));
  //   let q;
  //   if (
  //     player.league !== "Both" &&
  //     player.division !== "All" &&
  //     player.team !== "All"
  //   ) {
  //     console.log("Query 1");
  //     q = query(
  //       playersRef,
  //       where(
  //         "nameContains",
  //         "array-contains",
  //         player.name.toLowerCase().trim()
  //       ),
  //       where("league", "==", player.league),
  //       where("division", "==", player.division),
  //       where("team", "==", player.team)
  //     );
  //   } else if (
  //     player.league !== "Both" &&
  //     player.division !== "All" &&
  //     player.team === "All"
  //   ) {
  //     console.log("Query 2");
  //     q = query(
  //       playersRef,
  //       where(
  //         "nameContains",
  //         "array-contains",
  //         player.name.toLowerCase().trim()
  //       ),
  //       where("league", "==", player.league),
  //       where("division", "==", player.division)
  //     );
  //   } else if (
  //     player.league !== "Both" &&
  //     player.division === "All" &&
  //     player.team === "All"
  //   ) {
  //     console.log("Query 3");
  //     q = query(
  //       playersRef,
  //       where(
  //         "nameContains",
  //         "array-contains",
  //         player.name.toLowerCase().trim()
  //       ),
  //       where("league", "==", player.league)
  //     );
  //   } else if (player.league === "Both") {
  //     console.log("Query 4");
  //     q = query(
  //       playersRef,
  //       where(
  //         "nameContains",
  //         "array-contains",
  //         player.name.toLowerCase().trim()
  //       )
  //     );
  //   }

  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //     playersList.push(doc.data());
  //   });
  //   setPlayers([...playersList]);
  // };

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
          <h1>Search For Your Favorite Players</h1>
        </div>
        <div className={classes.description}>
          <p>Use this tool to search for any player on an active MLB roster</p>
        </div>
        <PlayersList players={names} type="click" />

        <Features page="search" />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default SearchPlayer;
