import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hog from './Hog'
import HogEditForm from './HogEditForm'
import { getHogs } from '../store'



class HogContainer extends Component {

  componentDidMount() {
    this.props.getHogs()
  }

  render() {
    const hogsWithJogs = this.props.hogs.map(hog => <Hog key={hog.name} hog={hog} />)
    return (
      <div>
        <div className="App-logo">Joggit Hoggit</div>
        <HogEditForm />
        <div className="hobbitsContainer">
          {hogsWithJogs}
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({ hogs: state.hogs })
const mapDispatchToProps = dispatch => ({ getHogs: () => dispatch(getHogs()) })

export default connect(mapStateToProps, mapDispatchToProps)(HogContainer)
