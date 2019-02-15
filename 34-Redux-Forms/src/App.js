import React, { Component } from 'react';
import './App.css';
import WizardDisplay from './Components/WizardDisplay'
import WizardForm from './Components/WizardForm'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={"https://image.flaticon.com/icons/svg/135/135869.svg"} className="App-logo" alt="logo" />
          <p>Harry Potter of Redux</p>
        </header>
        <WizardForm></WizardForm>
        <WizardDisplay></WizardDisplay>
      </div>
    );
  }
}

export default App;
