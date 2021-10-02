import { onSnapshot, collection } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import Card from "../components/layout/Card";
import db from "./../firebase/firebase.config";
import { useSelector, useDispatch } from "react-redux";
import classes from "./pageStyles/SearchPlayers.module.css";
import Features from "../components/Features";
import PlayersList from "../components/PlayersList";

const SearchPlayer = () => {
  const playersFound = useState(false);
  // const state = useSelector((state) => state.state);
  const dispatch = useDispatch();

  const addPlayer = (selectedPlayer) => {
    dispatch({ type: "add", player: selectedPlayer });
  };

  // useEffect(() => {
  //   onSnapshot(collection(db, "players"), (snapshot) => {
  //     console.log(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);
  return (
    <React.Fragment>
      <Card></Card>
      <div className={classes.body}>
        <div className={classes.title}>
          <h1>Search For Your Favorite Players</h1>
        </div>
        <div className={classes.description}>
          <p>Use this tool to search for any player on an active MLB roster</p>
        </div>
        <PlayersList
          players={[
            "Austin Hays",
            "Cedric Mullins",
            "Trey Mancini",
            "Ryan Mountcastle",
          ]}
        />

        <Features page="search" />
      </div>
    </React.Fragment>
  );
};

export default SearchPlayer;
