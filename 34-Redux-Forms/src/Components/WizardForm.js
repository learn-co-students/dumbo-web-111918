import React, { Component } from 'react';

class WizardForm extends Component {


  handleChange = (e) => {
      console.log(e.target.name, e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted!");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
        </label>
          <input type="text" name="name" onChange={this.handleChange}/>
        <label>
          House
        </label>
          <input type="text" name="house" onChange={this.handleChange}/>
        <label>
          Redux
        </label>
          <input type="text" name="redux" onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    );
  }

}



export default WizardForm;
