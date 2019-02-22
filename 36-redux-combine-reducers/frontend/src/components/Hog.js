import React, { Component } from 'react'

class HogCard extends Component {

  constructor() {
    super()
    this.state = {
      clicked: false
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    const clicked = !this.state.clicked
    this.setState({ clicked: clicked })
  }

  render() {
    const { name, specialty, greased } = this.props.hog
    const medal = this.props.hog['highest medal achieved']
    const weightRatio = this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']

    const hogData = (
      <div className="card-data">
        <p>Specialty: {specialty}</p>
        <p>Greased: {greased ? 'Yes' : 'No'}</p>
        <p>Medal: {medal}</p>
        <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {weightRatio}</p>
      </div>
    )

    return (
      <div onClick={this.clickHandler}>
        <img alt={name} src={`./hog-imgs/${snakeCase(name)}.jpg`}/>
        <h2>{name}</h2>
        {this.state.clicked ? hogData : 'Click for more info!'}
      </div>
    )
  }
}

function snakeCase(str) {
  return str.toLowerCase().split(' ').join('_')
}
export default HogCard
