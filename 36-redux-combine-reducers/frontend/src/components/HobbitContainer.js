import React from 'react';
import Hobbit from './Hobbit';
import HobbitEditForm from './HobbitEditForm';

import { getHobbits } from '../store'

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
        <div className="App-logo">Jobbit Hobbit</div>
        <HobbitEditForm />
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
    hobbits: state.hobbitInfo.hobbits
  }
}

const mapDispatchToProps = dispatch => ({
  getHobbits: () => dispatch(getHobbits())
})


export default connect(mapStateToProps, mapDispatchToProps)(HobbitContainer)
