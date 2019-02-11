import React from "react";
import { Link } from "react-router-dom";

class RapCard extends React.Component {
  state = {
    clicked: false
  };

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  renderOrNah = () => {
    return this.state.clicked
      ? this.props.rapper.happyImage
      : this.props.rapper.sadImage;
  };

  render() {
    return (
      <div>
        <h2>{this.props.rapper.name}</h2>
        <Link to={`/rappers/${this.props.rapper.name}`}>
          <img alt="" src={this.renderOrNah()} />
        </Link>
        <button onClick={this.clickHandler}>Flip Pic</button>
      </div>
    );
  }
}

export default RapCard;
