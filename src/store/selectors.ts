import { State } from './';
import { Todo, FilterType } from './actionCreators'
import { createSelector } from 'reselect';

const getTodos = (state: State) => state.todos;
const getFilter = (state: State) => state.filter;

export const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos: Todo[], filter: FilterType) => {
    switch (filter) {
      case 'all':
        return todos;
      case 'done':
        return todos.filter(t => t.isChecked);
      case 'to_do':
        return todos.filter(t => !t.isChecked);
    }
  }
);

export const countAllTodos = createSelector(
  [getTodos],
  (todos: Todo[]) => todos.length
);

export const countVisibleTodos = createSelector(
  [getVisibleTodos],
  (todos: Todo[]) => todos.length
);