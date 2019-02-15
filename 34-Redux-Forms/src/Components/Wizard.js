import React, { Component } from 'react';
import {connect} from 'react-redux'
import {removeWizard} from '../redux/actions'

class Wizard extends Component {
  handleClick = () => {
    this.props.removeWizard(this.props.wizard)
  }

  render() {
    const {wizard} = this.props
    return (
      <div onClick={this.handleClick}>
      <h6>{wizard.name}</h6>
        <p>
          {wizard.house} | {wizard.redux}
        </p>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeWizard: (wizardObj) => dispatch({type: "REMOVE_WIZARD", payload: wizardObj})
//   }
// }






export default connect(null, {removeWizard})(Wizard);
