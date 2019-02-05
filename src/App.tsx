import React from 'react';
import { connect } from 'react-redux';
import { State } from './store';
import { addTodo } from './store/actions';
import './App.css';

const mapStateToProps = (state: State) => ({ todos: state.todos });
const mapDispatchToProps = { addTodo };

type AppProps = {
  todos: string[]
  addTodo: typeof addTodo
}

type AppState = {
  textInput: string
}

class App extends React.PureComponent<AppProps, AppState> {
  state = {
    textInput: ''
  }

  handleChange = (evt: any) => {
    const { textInput } = this.state;
    evt.preventDefault();
    this.setState({textInput: evt.target.value})
  }

  handleSubmit = (evt: any) =>  {
    const { textInput } = this.state;
    evt.preventDefault();
    if (!textInput.trim()) {
      return
    }
    this.props.addTodo(textInput)
    this.setState({textInput: ''})
  }

  render() {
    const { textInput } = this.state;
    const { todos } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Shopping List</h1>
        </header>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <input type="text" name="item" value={textInput} onChange={this.handleChange}/>
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
