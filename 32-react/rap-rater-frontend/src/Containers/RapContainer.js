import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
    fetch("http://localhost:3004/rapperList")
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

  doThisStuff = routerProps => {
    let name = routerProps.match.params.name;
    let rapper = this.state.rappers.find(rapperObj => rapperObj.name === name);
    return <RapCard rapper={rapper} />;
  };

  render() {
    console.log("Rap Container", this.state);
    let rapList = this.state.filteredRappers.map(rapperObj => (
      <RapCard key={rapperObj.name} rapper={rapperObj} />
    ));

    return (
      <div>
        {this.props.user ? (
          <Switch>
            <Route
              path="/rappers/:name"
              render={routerProps => (
                <div>
                  {this.state.rappers.length > 0
                    ? this.doThisStuff(routerProps)
                    : null}
                </div>
              )}
            />
            <Route
              path="/rappers"
              render={() => {
                return <div>{rapList}</div>;
              }}
            />
          </Switch>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}

export default RapContainer;

// <Form submitHandler={this.submitHandler} />
// <br />
// <SearchForm
//   changeHandler={this.changeHandler}
//   value={this.state.searchTerm}
// />

// <Route
//   path="/rappers/:name"
//   render={routerProps => {
//      <div>{this.state.rappers.length > 0 ? (this.doThisStuff(routerProps)):(<h1>Loading</h1>)}</div>
//     }
// />
