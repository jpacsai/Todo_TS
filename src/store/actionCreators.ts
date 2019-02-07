import { action } from 'typesafe-actions';
import * as actionNames from './actionNames';

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

export const toggleChecked = (todo: Todo) => action(actionNames.TOGGLE_CHECK, todo);

export type FilterType = 'all' | 'done' | 'to_do';

export const filterChange = (filter: FilterType) => {
  console.log(filter);
  return action(actionNames.FILTER_CHANGE, filter);
};