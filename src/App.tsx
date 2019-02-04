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
          <section className="App-input">
            <span>To buy:</span>
            <input type="text" name="item" value=""/>
          </section>
          <section className="App-input">
            <span>Amount:</span>
            <input type="number" name="amount" value=""/>
            <section>
            <span>Unit:</span>
              <select>
                <option value="kg">kg</option>
                <option value="dkg">dkg</option>
                <option value="litre">litre</option>
                <option value="piece">piece</option>
                <option value="box">box</option>
                <option value="bottle">bottle</option>
                <option value="can">can</option>
                <option value="packet">packet</option>
                <option value="bunch">bunch</option>
              </select>
            </section>
          </section>
          <input type="submit" value="Submit"/>
        </form> 
      </div>
    );
  }
}

export default App;
