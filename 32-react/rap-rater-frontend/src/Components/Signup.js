import React from "react";

class Signup extends React.Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    this.props.submitHandler(e, this.state);
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="username"
          value={this.state.username}
          name="username"
          onChange={this.changeHandler}
        />
        <input
          type="password"
          placeholder="password"
          value={this.state.password}
          name="password"
          onChange={this.changeHandler}
        />
        <button>Sign Up</button>
      </form>
    );
  }
}

export default Signup;
