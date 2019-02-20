import React from 'react';
import Hobbit from './Hobbit';
import EditForm from './EditForm';

import { getHobbits } from '../hobbitThunks'

import { connect } from 'react-redux'

class HobbitContainer extends React.Component {

  componentDidMount() {
    this.props.getHobbits()
  }

  render() {
    const hobsWithJobs = this.props.hobbits.map(hobbit => {
      return <Hobbit key={hobbit.id} hobbit={hobbit} dog='dog' />;
    });
    return (
      <div>
        <div className="App-logo">Jobbit</div>
        <EditForm />
        <div className="hobbitsContainer">
          {hobsWithJobs}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('NEW STATE: ', state);
  return {
    hobbits: state.hobbits
  }
}

const mapDispatchToProps = dispatch => ({
  getHobbits: () => dispatch(getHobbits())
})


export default connect(mapStateToProps, mapDispatchToProps)(HobbitContainer)
