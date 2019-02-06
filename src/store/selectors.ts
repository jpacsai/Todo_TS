import { State } from './';
import { createSelector } from 'reselect';

const getTodos = (state: State) => state.todos;
const getFilter = (state: State) => state.filter;

export const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos, filter) => {
    switch (filter) {
      case 'all':
        return todos;
      case 'done':
        return todos.filter(t => t.isChecked);
      case 'to_do':
        return todos.filter(t => t.isChecked === false);
    }
  }
);