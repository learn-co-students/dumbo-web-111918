import React, { Component } from "react";
import RapCard from "../Components/RapCard";
import Form from "../Components/Form";
import rapperList from "../rapperList";

class RapContainer extends Component {
  state = {
    rappers: rapperList
  };

  // constructor() {
  //   super();
  //   this.state = {
  //     rappers: rapperList
  //   };
  //   this.submitHandler = this.submitHandler.bind(this);
  // }

  submitHandler = rapperObj => {
    let newRappers = [rapperObj, ...this.state.rappers];
    this.setState({
      rappers: newRappers
    });
  };

  render() {
    let rapList = this.state.rappers.map(rapperObj => (
      <RapCard key={rapperObj.name} rapper={rapperObj} />
    ));

    return (
      <div>
        <Form submitHandler={this.submitHandler} />
        {rapList}
      </div>
    );
  }
}

export default RapContainer;
