import React from 'react'
import Wizard from './Wizard'

class WizardDisplay extends React.Component{
  render(){
    return(
      <div>
        <h2>Welcome to the Wizarding World of Harry Potter!</h2>
        <ul>
          {"All the Wizards will get rendered here!"}
        </ul>
      </div>
    )
  }
}

export default WizardDisplay
