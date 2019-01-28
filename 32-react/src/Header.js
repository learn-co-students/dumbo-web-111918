import React from "react";

class Header extends React.Component {
  render() {
    console.log(this.props);
    return <h1>{this.props.cohortName}</h1>;
  }
}

export default Header;
