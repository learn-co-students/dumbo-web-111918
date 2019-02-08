import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import RapContainer from "./Containers/RapContainer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/rappers" component={RapContainer} />
          <Route path="/home" component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
