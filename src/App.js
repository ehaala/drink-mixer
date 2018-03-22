import React, { Component } from 'react';
import { Button, Row, Col, MenuItem } from 'react-bootstrap';
import './App.css';
import SelectOptions from './SelectOptions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Drink Mixer!</h1>
          <hr />
        </header>
        <SelectOptions />
      </div>
    );
  }
}

export default App;