import React from 'react';
// import { connect } from 'react-redux'
// import { editHobbit } from '../store'

class HogEditForm extends React.Component {

  state = {
    name: '',
    specialty: '',
    greased: false,
    weightRatio: 0,
    medal: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidUpdate (prevState, prevProps) {
    if (prevProps.name !== this.props.selectedHog.name) {
      const {name, specialty, greased, 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water' : weightRatio, 'highest medal achieved' : medal } = this.props.selectedHog

      // const { name, specialty, greased } = this.props.hog
      // const medal = this.props.hog['highest medal achieved']
      // const weightRatio = this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']

      this.setState({ name, specialty, greased, weightRatio, medal})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }


  render() {
    // console.log(this.state);
    return (
      <div style={{ textAlign: 'center' }}>
        <div> </div>
        <form onSubmit={this.handleSubmit}>
          <h5> Name: {this.state.name} </h5>
          <label>
            Specialty
          </label>
          <input name="specialty" value={this.state.specialty} onChange={this.handleChange} />
          <label>
            Highest Medal Achieved
          </label>
          <input name="medal" value={this.state.medal} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

// const mapStateToProps = ({selectedHobbit}) => {
//   return {
//     selectedHobbit: selectedHobbit
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     editHobbit: (hobbit) => dispatch(editHobbit(hobbit)),
//
//   }
// }

export default HogEditForm
