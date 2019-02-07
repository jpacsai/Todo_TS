import React from 'react';
import { connect } from 'react-redux';
import { State } from './store';
import { fetchPic, clearTodos, toggleChecked, filterChange } from './store/actions';
import { getVisibleTodos, countAllTodos, countVisibleTodos } from './store/selectors'
import { Todo, FilterType } from './store/actionCreators';
import './App.css';

const mapStateToProps = (state: State) => (
  { 
    todos: getVisibleTodos(state), 
    allCount: countAllTodos(state), 
    visibleCount: countVisibleTodos(state), 
    filter: state.filter 
  }
);

const mapDispatchToProps = { fetchPic, clearTodos, toggleChecked, filterChange };

type AppProps = {
  todos: Todo[],
  allCount: number,
  visibleCount: number,
  clearTodos: typeof clearTodos;
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
    const { fetchPic, filterChange } = this.props;
    evt.preventDefault();
    if (!textInput.trim()) {
      return
    }
    filterChange('all');
    fetchPic(textInput.trim());
    this.setState({textInput: ''})
  }

  handleFilter = (evt: any) => {
    const { filterChange } = this.props;
    filterChange(evt.target.value)
  }

  handleRemove = () => {
    const { clearTodos } = this.props;
    clearTodos();
  }

  render() {
    const { textInput } = this.state;
    const { todos, allCount, visibleCount, toggleChecked, filter } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Shopping List</h1>
        </header>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <input className="App-input" type="text" name="item" value={textInput} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
        <section className="info-section">
          <button disabled={allCount === 0} className="clear-btn" onClick={this.handleRemove}>Clear shopping list</button>
          { allCount ? (
              (filter == 'all' &&
                <p>{`There ${allCount > 1 ? 'are' : 'is'} ${allCount} item${allCount > 1 ? 's' : ''} on your shopping list`}</p>
              ) || (
              filter == 'done' && 
                <p>{ visibleCount ?
                  `You bought ${visibleCount} item${visibleCount > 1 ? 's' : ''} from your list` :
                  `You haven't bougth anything yet!`
                }</p>
              ) || (
              filter == 'to_do' && 
                <p>{ visibleCount ?
                  `There ${visibleCount > 1 ? 'are' : 'is'} still ${visibleCount} item${visibleCount > 1 ? 's' : ''} on your list` :
                  `You bought everything, well done :)`
                }</p>)
            ) : (
            <p>Your shopping list is empty</p>
          )}
        </section>
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

/*
{ 
            }
            { 
            }
            { 
            }

            */