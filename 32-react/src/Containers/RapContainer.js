import React, { Component } from "react";
import RapCard from "../Components/RapCard";
import rapperList from "../rapperList";

class RapContainer extends Component {
  state = {
    rappers: rapperList
  };

  render() {
    let rapList = this.state.rappers.map(rapperObj => (
      <RapCard key={rapperObj.name} rapper={rapperObj} />
    ));

    return <div>{rapList}</div>;
  }
}

export default RapContainer;
