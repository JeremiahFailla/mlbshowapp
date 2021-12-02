import Layout from "./components/layout/Layout";
import { Switch, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import ComparePlayers from "./pages/ComparePlayers";
import BuildTeam from "./pages/BuildTeam";
import SearchPlayer from "./pages/SearchPlayer";
import classes from "./App.module.css";
import React, { useEffect } from "react";

import {
  onSnapshot,
  collection,
  query,
  where,
  getDocs,
} from "@firebase/firestore";
import db from "./firebase/firebase.config";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const getData = async () => {
    const players = [];
    const querySnapshot = await getDocs(collection(db, "players"));
    querySnapshot.forEach((player) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(player.id, " => ", player.data());
      players.push(player.data());
    });
    dispatch({ type: "insertFirebasePlayers", players: players });
  };

  useEffect(() => {
    // getData();
  }, []);

  return (
    <div className={classes.app}>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/build-team">
            <BuildTeam />
          </Route>
          <Route path="/compare-players">
            <ComparePlayers />
          </Route>
          <Route path="/search-players">
            <SearchPlayer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
