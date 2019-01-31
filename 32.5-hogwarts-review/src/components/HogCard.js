import React, { Component } from 'react';

class HogCard extends Component {

  state = {
    clicked: false
  }

  hogImageName = () => {
    const hogName = this.props.hog.name
    // if (hogName.includes(" ")) {
    //   let newHogName = hogName.replace(/\s\s|\s/g, "_").toLowerCase()
    //   return newHogName
    // } else {
    //   return hogName.toLowerCase()
    // }
    return hogName.toLowerCase().split(" ").join("_")
  }

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div className="ui eight wide column">
        <div className="pigTile" onClick={this.clickHandler}>
          <h3>{this.props.hog.name}</h3>
          <img src={require(`../hog-imgs/${this.hogImageName()}.jpg`)}></img>
          {this.state.clicked ?
            <div>
              <p>Specialty: {this.props.hog.specialty}</p>
              <p>Greased: {this.props.hog.greased ? "What a greasy boy" : "Clean"}</p>
              <p>Weight: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
              <p>Medal: {this.props.hog["highest medal achieved"]}</p>

            </div>
            :
            null
          }
        </div>
      </div>
    );
  }

}

export default HogCard;
