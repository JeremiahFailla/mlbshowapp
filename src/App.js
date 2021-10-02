import Layout from "./components/layout/Layout";
import { Switch, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import ComparePlayers from "./pages/ComparePlayers";
import BuildTeam from "./pages/BuildTeam";
import SearchPlayer from "./pages/SearchPlayer";
import classes from "./App.module.css";

function App() {
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
