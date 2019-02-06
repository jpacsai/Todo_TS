import React from 'react';
import { connect } from 'react-redux';
import { State } from './store';
import { fetchPic, addTodo, toggleChecked } from './store/actions';
import { Todo } from './store/actionCreators';
import './App.css';

const mapStateToProps = (state: State) => ({ todos: state.todos });
const mapDispatchToProps = { fetchPic, addTodo, toggleChecked };

type AppProps = {
  todos: Todo[],
  addTodo: typeof addTodo,
  fetchPic: typeof fetchPic,
  toggleChecked: typeof toggleChecked
}

/*
type filterTypes = 'all'|'checked'|'unchecked';

*/

type AppState = {
  textInput: string,
  filter: string
}

class App extends React.PureComponent<AppProps, AppState> {
  state = {
    textInput: '',
    filter: 'all'
  }

  handleChange = (evt: any) => {
    evt.preventDefault();
    this.setState({textInput: evt.target.value})
  }

  handleSubmit = (evt: any) =>  {
    const { textInput } = this.state;
    const { fetchPic } = this.props;
    evt.preventDefault();
    if (!textInput.trim()) {
      return
    }
    fetchPic(textInput.trim());
    this.setState({textInput: ''})
  }

  filterChange = (evt: any) => {
    this.setState({filter: evt.target.value})
  }

  render() {
    const { textInput } = this.state;
    const { todos, toggleChecked } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Shopping List</h1>
        </header>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <input className="App-input" type="text" name="item" value={textInput} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
        <form className="App-filter">
          <label>
            <input
              type="radio"
              name="react-tips"
              value="all"
              checked={this.state.filter === 'all'}
              className="form-check-input"
              onChange={this.filterChange}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="react-tips"
              value="done"
              checked={this.state.filter === 'done'}
              className="form-check-input"
              onChange={this.filterChange}
            />
            Done
          </label>
          <label>
            <input
              type="radio"
              name="react-tips"
              value="to do"
              checked={this.state.filter === 'to do'}
              className="form-check-input"
              onChange={this.filterChange}
            />
            To do
          </label>
        </form>
        <ul className="App-list">
            {todos.map((todo: Todo) => {
              return (
                <li className={`App-listItem${todo.isChecked ? " checked" : ""}`} key={ todo.id }
                onClick={ () => {
                  console.log(todo.isChecked)
                  toggleChecked(todo)
                }}>
                  <p>{ todo.id }</p>
                  <p>{ todo.text }</p>
                  <img src={todo.imgUrl} alt={todo.text} className="list-img"/>
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