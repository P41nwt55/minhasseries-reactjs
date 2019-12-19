import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ola from './Ola';

class App extends Component {
  render() {
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <Ola name='Eder'></Ola>
      </div>
    )
  }
}
export default App

/*
    TUDO FUNCIONANDO, SEM HOOKS, GLORIA A DEUXXXXX
*/