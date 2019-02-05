import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Shopping List</h1>
        </header>
        <form className="App-form">
          <input type="text" name="item" value=""/>
          <input type="submit" value="Submit"/>
        </form> 
      </div>
    );
  }
}

export default App;
