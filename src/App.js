import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeaderBar from "./components/Header";
import MyRepositories from "./components/MyRepositories";

function App() {
  return (
    <>
      <Router>
        <HeaderBar />
        <Switch>
          <Route path="/my-repos">
            <MyRepositories />
          </Route>
          <Route path="/" exact>
            <div>Hi</div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
