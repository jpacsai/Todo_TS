import { action } from 'typesafe-actions';
import * as actionNames from './actionNames';
import { Todo } from './reducers/todos';
import { Filter } from './reducers/filter';

// ----- ADD TODO ----- //

export const addTodo = (text: string, imgUrl: string) => {
  return action(actionNames.ADD_TODO, { text, imgUrl });
};

// ----- DELETE ALL TODOS ----- ///

export const clearTodos = () => action(actionNames.CLEAR_TODOS);

// ----- TOGGLE CHECKED ----- //

export const toggleChecked = (id: number) => action(actionNames.TOGGLE_CHECK, id);
// TODO csak id

// ----- FILTER CHANGE ----- //

export const changeFilter = (filter: Filter) => action(actionNames.FILTER_CHANGE, filter);
