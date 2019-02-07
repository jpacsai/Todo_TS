import React from 'react';
import { connect } from 'react-redux';
import { State } from './store';
import { fetchPic, clearTodos, toggleChecked, changeFilter } from './store/actions';
import { getVisibleTodos, getCountOfAll, getCountOfVisibles } from './store/selectors';
import { Todo } from './store/reducers/todos';
import { Filter } from './store/reducers/filter';
import './App.css';

const mapStateToProps = (state: State) => ({
  todos: getVisibleTodos(state),
  allCount: getCountOfAll(state),
  visibleCount: getCountOfVisibles(state),
  filter: state.filter
});

const mapDispatchToProps = { fetchPic, clearTodos, toggleChecked, changeFilter };

type AppProps = {
  todos: Todo[];
  allCount: number;
  visibleCount: number;
  clearTodos: typeof clearTodos;
  fetchPic: typeof fetchPic;
  toggleChecked: typeof toggleChecked;
  changeFilter: typeof changeFilter;
  filter: Filter;
};

type AppState = {
  textInput: string;
};

class App extends React.PureComponent<AppProps, AppState> {
  state = {
    textInput: ''
  };

  handleChange = (evt: any) => {
    evt.preventDefault();
    this.setState({ textInput: evt.target.value });
  };

  handleSubmit = (evt: any) => {
    const { textInput } = this.state;
    const { fetchPic, changeFilter } = this.props;
    evt.preventDefault();
    if (!textInput.trim()) {
      return;
    }
    changeFilter(Filter.all);
    fetchPic(textInput.trim());
    this.setState({ textInput: '' });
  };

  handleFilter = (evt: any) => {
    const { changeFilter } = this.props;
    changeFilter(evt.target.value);
  };

  handleRemove = () => {
    const { clearTodos } = this.props;
    clearTodos();
  };

  render() {
    const { textInput } = this.state;
    const { todos, allCount, visibleCount, toggleChecked, filter } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Shopping List</h1>
        </header>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <input className="App-input" type="text" name="item" value={textInput} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <section className="info-section">
          <button disabled={allCount === 0} className="clear-btn" onClick={this.handleRemove}>
            Clear shopping list
          </button>
          {allCount ? (
            (filter == Filter.all && (
              <p>{`There ${allCount > 1 ? 'are' : 'is'} ${allCount} item${
                allCount > 1 ? 's' : ''
              } on your shopping list`}</p>
            )) ||
            (filter == Filter.done && (
              <p>
                {visibleCount
                  ? `You bought ${visibleCount} item${visibleCount > 1 ? 's' : ''} from your list`
                  : `You haven't bougth anything yet!`}
              </p>
            )) ||
            (filter == Filter.todo && (
              <p>
                {visibleCount
                  ? `There ${visibleCount > 1 ? 'are' : 'is'} still ${visibleCount} item${
                      visibleCount > 1 ? 's' : ''
                    } on your list`
                  : `You bought everything, well done :)`}
              </p>
            ))
          ) : (
            <p>Your shopping list is empty</p>
          )}
        </section>
        <form className="App-filter">
          {Object.keys(Filter).map(key => (
            <label key={key}>
              <input
                type="radio"
                value={Filter[key as any]}
                name={Filter[key as any]}
                checked={filter == Filter[key as any]}
                className="form-check-input"
                onChange={this.handleFilter}
              />
              {Filter[key as any]}
            </label>
          ))}
        </form>
        <ul className="App-list">
          {todos.map((todo: Todo) => {
            return (
              <li
                className={`App-listItem${todo.isChecked ? ' checked' : ''}`}
                key={todo.id}
                onClick={() => {
                  toggleChecked(todo.id);
                }}
              >
                <p>{todo.id}</p>
                <p>{todo.text}</p>
                <img src={todo.imgUrl} alt={todo.text} className="list-img" />
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
