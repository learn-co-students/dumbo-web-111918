import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addWizard} from '../redux/actions'

class WizardForm extends Component {

  state = {
    name: "",
    house: "",
    redux: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const wizard = this.state
    this.props.addWizard(wizard)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
        </label>
          <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
        <label>
          House
        </label>
          <input type="text" name="house" onChange={this.handleChange} value={this.state.house}/>
        <label>
          Redux
        </label>
          <input type="text" name="redux" onChange={this.handleChange} value={this.state.redux}/>
        <input type="submit"/>
      </form>
    );
  }

}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addWizard: (wizardObject) => {dispatch({type: "ADD_WIZARD", payload: wizardObject})}
//   }
// }







// First argument of connect is to "Get" information
// Second argument of connect is to "Set" information

const someFunc = connect(null, { addWizard })
const someComponent = someFunc(WizardForm)
export default someComponent
