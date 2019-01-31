import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigPen from '../containers/PigPen'

class App extends Component {
  state = {
    hogArray: hogs,
    filterOn: false,
    sortType: ""
  }

  toggleFilter = () => {
    this.setState({
      filterOn: !this.state.filterOn
    })
  }

  toggleSort = (type) => {
    this.setState({
      sortType: type
    })
  }

  whichArrayToSendDown = () => {
    let array =  [...this.state.hogArray]
    const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    if (this.state.filterOn) {
      array = this.state.hogArray.filter(hog => hog.greased)
    }
    if (this.state.sortType === "name") {
      array = array.sort((a, b) => a.name.localeCompare(b.name))
    } else if(this.state.sortType === "weight"){
      array = array.sort((a, b) => a[weight] - b[weight])
    }
    return array
  }

  render() {
    return (
      <div className="App">
        < Nav
          toggleFilter={this.toggleFilter}
          toggleSort={this.toggleSort}
        />
        {this.state.filterOn ? "On" : "Off"}
        <PigPen hogs={this.whichArrayToSendDown()}/>
      </div>
    )
  }
}







export default App;
