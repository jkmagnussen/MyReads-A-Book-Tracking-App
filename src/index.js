import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Search from "./components/Search";

import "./index.css";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <App />
    </Route>
    <Route path="/search">
      <Search />
    </Route>
  </Switch>
);

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("root")
);
