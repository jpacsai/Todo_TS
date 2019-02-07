import React from 'react';
import { connect } from 'react-redux';
import { State } from './store';
import { fetchPic, addTodo, toggleChecked, filterChange } from './store/actions';
import { getVisibleTodos } from './store/selectors'
import { Todo, FilterType } from './store/actionCreators';
import './App.css';

const mapStateToProps = (state: State) => ({ todos: getVisibleTodos(state), filter: state.filter });
const mapDispatchToProps = { fetchPic, addTodo, toggleChecked, filterChange };

type AppProps = {
  todos: Todo[],
  addTodo: typeof addTodo,
  fetchPic: typeof fetchPic,
  toggleChecked: typeof toggleChecked,
  filterChange: typeof filterChange,
  filter: FilterType
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
    const { fetchPic } = this.props;
    evt.preventDefault();
    if (!textInput.trim()) {
      return
    }
    fetchPic(textInput.trim());
    this.setState({textInput: ''})
  }

  handleFilter = (evt: any) => {
    const { filterChange } = this.props;
    filterChange(evt.target.value)
  }

  render() {
    const { textInput } = this.state;
    const { todos, toggleChecked, filter } = this.props;

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
              value="all"
              checked={filter == 'all'}
              className="form-check-input"
              onChange={this.handleFilter}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              value="done"
              checked={filter == 'done'}
              className="form-check-input"
              onChange={this.handleFilter}
            />
            Done
          </label>
          <label>
            <input
              type="radio"
              value="to_do"
              checked={filter == 'to_do'}
              className="form-check-input"
              onChange={this.handleFilter}
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