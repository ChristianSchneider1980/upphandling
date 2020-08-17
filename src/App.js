import React from "react";
import "./App.css";
import "./Header.css";
import "./Hero.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./Header";
import Kontakt from "./Kontakt";
import OmOss from "./OmOss";
import Hero from "./Hero";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Kontakt">
            <Kontakt />
          </Route>
          <Route path="/OmOss">
            <OmOss />
          </Route>
          <Route path="/">
            <Header />
            <Hero />
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
