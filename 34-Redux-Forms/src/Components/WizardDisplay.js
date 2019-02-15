import React from 'react'
import Wizard from './Wizard'
import {connect} from 'react-redux'

class WizardDisplay extends React.Component{

  render(){
    console.log("WizardDisplay props are", this.props);
    const {wizards} = this.props

    const wizardsComponents = wizards.map(wizardObj => <Wizard key={wizardObj.name} wizard={wizardObj}/>)
    return(
      <div>
        <h2>Welcome to the Wizarding World of Harry Potter!</h2>
        <ul>
          {wizardsComponents}
        </ul>
      </div>
    )
  }
}







const mapStateToProps = (state) => {
  return {
    wizards: state.wizards
  }
}




export default connect(mapStateToProps)(WizardDisplay)
