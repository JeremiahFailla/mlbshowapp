import { onSnapshot, collection } from "@firebase/firestore";
import React, { useEffect } from "react";
import Card from "../components/layout/Card";
import db from "./../firebase/firebase.config";
import { useSelector, useDispatch } from "react-redux";

const SearchPlayer = () => {
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
      <div>
        <h1>This is the searh player page</h1>
      </div>
    </React.Fragment>
  );
};

export default SearchPlayer;
