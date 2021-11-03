import React from "react";
import Features from "../components/Features";
import Card from "../components/layout/Card";
import Footer from "../components/layout/Footer";
import PlayersList from "../components/PlayersList";
import SearchBar from "../components/searchBar/SearchBar";
import classes from "./pageStyles/BuildTeam.module.css";

const BuildTeam = () => {
  return (
    <React.Fragment>
      <Card>
        <SearchBar />
      </Card>
      <div className={classes.body}>
        <div className={classes.title}>
          <h1>Build Your Team</h1>
        </div>
        <div className={classes.description}>
          <p>
            Create the team that you have always wanted with any current active
            players. Simply search for players using the above searchbar and
            place them into your lineup and rotation located below
          </p>
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
        />
        <Features page="build" />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default BuildTeam;
