import React, { Component } from 'react';
import { Button, Row, Col, MenuItem } from 'react-bootstrap';
import './App.css';

import SelectOptions from './SelectOptions';
import AllDrinks from './AllDrinks';
import Navbar from './Navbar';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <Route exact path="/" component={SelectOptions} />
          <Route path="/alldrinks" component={AllDrinks} />
        </div>
      </Router>
    );
  }
}

export default App;