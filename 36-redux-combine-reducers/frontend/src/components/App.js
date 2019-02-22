
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import HobbitContainer from './HobbitContainer'
import HogContainer from './HogContainer'

class App extends Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/hobbits' component={HobbitContainer} />
          <Route path='/hogs' component={HogContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
