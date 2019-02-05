import React from 'react';
import { connect } from 'react-redux';
import { State } from './store';
import { addTodo } from './store/actions';
import { Todo } from './store/actionCreators';
import './App.css';

const mapStateToProps = (state: State) => ({ todos: state.todos });
const mapDispatchToProps = { addTodo };

type AppProps = {
  todos: Todo[]
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
    evt.preventDefault();
    this.setState({textInput: evt.target.value})
  }

  handleSubmit = (evt: any) =>  {
    const { textInput } = this.state;
    const { addTodo } = this.props;
    evt.preventDefault();
    if (!textInput.trim()) {
      return
    }
    addTodo(textInput)
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
          <input className="App-input" type="text" name="item" value={textInput} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
        <ul className="App-list">
            {todos.map((todo: Todo, i:number) => {
              return (
                <li className={"App-listItem " + todo.isChecked ? "checked" : ""} key={i}>
                  { todo.text } - { todo.isChecked ? 'checked' : 'not checked' }
                </li>
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
