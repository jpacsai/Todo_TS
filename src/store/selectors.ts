import { State } from './';
import { Todo } from './reducers/todos';
import { Filter } from './reducers/filter';
import { createSelector } from 'reselect';

const getTodos = (state: State) => state.todos;
const getFilter = (state: State) => state.filter;

export const getVisibleTodos = createSelector(
  [getTodos, getFilter],
  (todos: Todo[], filter: Filter) => {
    switch (filter) {
      case Filter.all:
        return todos;
      case Filter.done:
        return todos.filter(t => t.isChecked);
      case Filter.todo:
        return todos.filter(t => !t.isChecked);
      default:
        return todos;
    }
  }
);

export const getCountOfAll = createSelector(
  [getTodos],
  (todos: Todo[]) => todos.length
);

export const getCountOfVisibles = createSelector(
  [getVisibleTodos],
  (todos: Todo[]) => todos.length
);
