import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hey look I'm using React</h1>
        </header>
        <Table />
      </div>
    );
  }
}

export default App;
