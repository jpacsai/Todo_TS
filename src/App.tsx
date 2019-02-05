import React from 'react';
import { connect } from 'react-redux';
import { State } from './store';
import { addTodo } from './store/actions';
import './App.css';

const mapStateToProps = (state: State) => ({ todos });
const mapDispatchToProps = { addTodo };

class App extends React.PureComponent {
  state = {
    textInput: ''
  }

  handleSubmit = (evt: any) =>  {
    const { textInput } = this.state;
    evt.preventDefault();
    if (!textInput.trim()) {
      return
    }
    addTodo(textInput)
    this.setState({textInput: ''})
  }

  render() {
    const { textInput } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Shopping List</h1>
        </header>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <input type="text" name="item" value={textInput}/>
          <input type="submit" value="Submit"/>
        </form>
        <ul>
            {todos.map((todo: string, i:number) => {
              return (
                <li key={i}>{ todo }</li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
