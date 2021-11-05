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

// const getData = async () => {
//   // const q = query(
//   //   collection(db, "players"),
//   //   where("name", "==", "Austin Hays")
//   // );
//   const citiesRef = collection(db, "players");
//   // Create a query against the collection.
//   let q = query(citiesRef, where("name", "==", "james"));
//   // q = query(citiesRef, where("name", "==", "Austin Hays"));

//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });
// };

const SearchPlayer = () => {
  const playersFound = useState(false);

  // const dispatch = useDispatch();

  // const addPlayer = (selectedPlayer) => {
  //   dispatch({ type: "add", player: selectedPlayer });
  // };

  // useEffect(() => {
  //   // onSnapshot(collection(db, "players"), (snapshot) => {
  //   //   console.log(snapshot.docs.map((doc) => doc.data()));
  //   // });
  //   // const citiesRef = collection(db, "players");
  //   // // Create a query against the collection.
  //   // const q = query(citiesRef, where("name", "==", "Austin Hays"));
  //   // console.log(q);
  //   // getData();
  // }, []);
  return (
    <React.Fragment>
      <Card>
        <SearchBar />
      </Card>
      <div className={classes.body}>
        <div className={classes.title}>
          <h1>Search For Your Favorite Players</h1>
        </div>
        <div className={classes.description}>
          <p>Use this tool to search for any player on an active MLB roster</p>
        </div>
        <PlayersList
          players={[
            {
              id: 0,
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
          ]}
          type="click"
        />

        <Features page="search" />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default SearchPlayer;
