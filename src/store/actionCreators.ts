import { action } from 'typesafe-actions';
import * as actionNames from './actionNames';

let id = 0;

export type Todo = {
    text: string,
    isChecked: boolean,
    id: number
}

export const addTodo = (todo: string) => {
  const todoObj: Todo = {
    text: todo,
    isChecked: false,
    id: id++
  }
  return action(actionNames.ADD_TODO, todoObj)
};