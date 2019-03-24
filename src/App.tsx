import React, { Component } from 'react';
import './App.css';
import SearchContainer from './components/SearchContainer/SearchContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SearchContainer/>
      </div>
    );
  }
}

export default App;
