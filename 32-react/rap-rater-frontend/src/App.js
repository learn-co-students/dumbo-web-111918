import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import "./App.css";
import RapContainer from "./Containers/RapContainer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

class App extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token");
      fetch("http://localhost:3000/api/v1/user", {
        headers: {
          "content-type": "application/json",
          Accepts: "application/json",
          Authorization: `${token}`
        }
      })
        .then(resp => resp.json())
        .then(data =>
          data.error ? alert(`Must Log In`) : this.setState({ user: data.user })
        );
    } else {
      this.props.history.push("/login");
    }
  }
  createUser = (e, userObj) => {
    let username = userObj.username;
    let password = userObj.password;
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({ user: { username: username, password: password } })
    })
      .then(resp => resp.json())
      .then(data =>
        data.error ? alert(`${data.error}`) : this.setState({ user: data.user })
      );
  };

  loginUser = userObj => {
    let username = userObj.username;
    let password = userObj.password;
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({ user: { username: username, password: password } })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          alert(`${data.message}`);
        } else {
          this.setState({ user: data.user }, () =>
            this.props.history.push("/rappers")
          );
        }
      });
  };

  isThereAUser = () => {
    return Object.keys(this.state.user).length > 0;
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({
      user: {}
    });
    this.props.history.push("/login");
  };

  render() {
    return (
      <div>
        {this.isThereAUser() ? (
          <Navbar user={this.state.user} logout={this.logout} />
        ) : (
          <Navbar />
        )}
        <Switch>
          <Route
            path="/rappers"
            render={() => {
              return (
                <div>
                  {this.isThereAUser() ? (
                    <RapContainer user={this.state.user} />
                  ) : (
                    <Redirect to="/login" />
                  )}
                </div>
              );
            }}
          />
          <Route
            path="/home"
            render={() => {
              return (
                <div>
                  {this.isThereAUser() ? <Home /> : <Redirect to="/login" />}
                </div>
              );
            }}
          />
          <Route
            path="/signup"
            render={() => <Signup submitHandler={this.createUser} />}
          />
          <Route
            path="/login"
            render={() => <Login submitHandler={this.loginUser} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
