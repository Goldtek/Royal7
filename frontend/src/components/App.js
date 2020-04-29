import React, { Component } from 'react';
import Routes from '../routes';
import Navigation from './Nav/navigation';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Navigation/>
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
