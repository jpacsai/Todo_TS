import { action } from 'typesafe-actions';
import * as actionNames from './actionNames';

// ----- ADD TODO ----- //

let id = 0;

export type Todo = {
    text: string,
    isChecked: boolean,
    id: number,
    imgUrl: string
}

export const addTodo = (todo: string, imgUrl: string) => {
  const todoObj: Todo = {
    text: todo,
    isChecked: false,
    id: id++,
    imgUrl
  }
  return action(actionNames.ADD_TODO, todoObj);
};

// ----- DELETE ALL TODOS ----- ///

export const clearTodos = () => action(actionNames.CLEAR_TODOS);

// ----- TOGGLE CHECKED ----- //

export const toggleChecked = (todo: Todo) => action(actionNames.TOGGLE_CHECK, todo);

// ----- FILTER CHANGE ----- //

export type FilterType = 'all' | 'done' | 'to_do';

export const filterChange = (filter: FilterType) => action(actionNames.FILTER_CHANGE, filter);