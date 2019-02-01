import React, { Component } from "react";
import RapCard from "../Components/RapCard";
import Form from "../Components/Form";
import SearchForm from "../Components/SearchForm";

class RapContainer extends Component {
  state = {
    rappers: [],
    filteredRappers: [],
    searchTerm: ""
  };

  // constructor() {
  //   super();
  //   this.state = {
  //     rappers: rapperList
  //   };
  //   this.submitHandler = this.submitHandler.bind(this);
  // }

  componentDidMount() {
    console.log("Rap Container Did Mount");
    fetch("http://localhost:3000/rapperList")
      .then(resp => resp.json())
      .then(rappers =>
        this.setState({
          //this is the same as doing rappers: rappers
          rappers: rappers,
          filteredRappers: rappers
        })
      );
  }

  submitHandler = rapperObj => {
    let newRappers = [rapperObj, ...this.state.rappers];
    this.setState({
      rappers: newRappers
    });
  };

  changeHandler = e => {
    let searchTerm = e.target.value;
    let filteredArray = this.state.rappers.filter(rapper =>
      rapper.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({
      searchTerm: searchTerm,
      filteredRappers: filteredArray
    });
  };

  // filterRappers = searchTerm => {
  //   let term = searchTerm.toLowerCase();
  //   return this.state.rappers.filter(rapper =>
  //     rapper.name.toLowerCase().includes(term)
  //   );
  // };
  render() {
    console.log("Rap Container", this.state);
    let rapList = this.state.filteredRappers.map(rapperObj => (
      <RapCard key={rapperObj.name} rapper={rapperObj} />
    ));

    return (
      <div>
        {this.state.rappers.length > 0 ? (
          <div>
            <Form submitHandler={this.submitHandler} />
            <br />
            <SearchForm
              changeHandler={this.changeHandler}
              value={this.state.searchTerm}
            />
            {rapList}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}

export default RapContainer;
