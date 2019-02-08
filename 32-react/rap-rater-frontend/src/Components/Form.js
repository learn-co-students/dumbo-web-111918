import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    rating: 0,
    sadImage: "",
    happyImage: ""
  };

  changeHandler = e => {
    let obj = {
      [e.target.name]: e.target.value
    };
    this.setState(obj);
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      name: "",
      sadImage: "",
      happyImage: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          placeholder="sadImage"
          name="sadImage"
          value={this.state.sadImage}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          placeholder="happyImage"
          name="happyImage"
          value={this.state.happyImage}
          onChange={this.changeHandler}
        />
        <button>Add Rapper</button>
      </form>
    );
  }
}
