import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header cohortName="Jerold's MOD" SamsProp="Prada" />
        <Header cohortName="Hashgang" />
      </div>
    );
  }
}

export default App;
