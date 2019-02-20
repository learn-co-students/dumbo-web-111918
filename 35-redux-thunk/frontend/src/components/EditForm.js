import React from "react";

import { connect } from 'react-redux'
import { patchHobbit } from '../hobbitThunks'

class EditForm extends React.Component {

  state = {
    id: 0,
    name: '',
    title: '',
    key_skill: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidUpdate (prevState, prevProps) {
    if (prevProps.id !== this.props.selectedHobbit.id) {
      this.setState({
        ...this.props.selectedHobbit
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.patchHobbit(this.state)
  }


  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div> </div>
        <form onSubmit={this.handleSubmit}>
          <h5> Name: {this.state.name} </h5>
          <label>
            Title
          </label>
          <input name="title" value={this.state.title} onChange={this.handleChange} />
          <label>
            Key Skill
          </label>
          <input name="key_skill" value={this.state.key_skill} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedHobbit: state.selectedHobbit
})

const mapDispatchToProps = (dispatch) => ({
  patchHobbit: (hob) => dispatch(patchHobbit(hob))
})


export default connect(mapStateToProps, mapDispatchToProps)(EditForm)


// patchHobbit = () => {
//   return fetch(`http://localhost:3000/hobbits/${this.state.id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-type': 'application/json',
//       'Accept': 'application/json'
//     },
//     body: JSON.stringify(this.state)
//   })
//   .then(r => r.json())
//   .then(res => this.props.editHobbit(res))
// }
