import React from "react";
import Home from "./Home";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>{" "}
          <Route path="/">
            {" "}
            {/* Home*/} <Home /> {/* SearchPage*/}{" "}
          </Route>{" "}
        </Switch>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
