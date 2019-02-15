import React, { Component } from 'react';
import './App.css';
import WizardDisplay from './Components/WizardDisplay'
import WizardForm from './Components/WizardForm'

import {connect} from 'react-redux'
import {addWizard} from './redux/actions'

class App extends Component {

  handleClick = () => {
    this.props.addWizard({
      name: "111918",
      house: "Flatiron",
      redux: "Wizards"
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"https://image.flaticon.com/icons/svg/135/135869.svg"} className="App-logo" alt="logo" />
          <p>Harry Potter of Redux</p>
          <button onClick={this.handleClick}>Click to add a Wizard</button>
        </header>
        <WizardForm></WizardForm>
        <WizardDisplay></WizardDisplay>
      </div>
    );
  }
}

export default connect(null, {addWizard})(App);
