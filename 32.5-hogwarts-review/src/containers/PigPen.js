import React, {Component} from 'react'
import HogCard from '../components/HogCard'

class PigPen extends Component{

  mapHogs = () => {
    return this.props.hogs.map(hogObj => <HogCard key={hogObj.name} hog={hogObj}/>)
  }

  render(){
    return(
      <div className="ui grid container">
        {this.mapHogs()}
      </div>
    )
  }

}

export default PigPen
