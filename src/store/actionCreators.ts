import { action } from 'typesafe-actions';
import * as actionNames from './actionNames';

export type Todo = {
    text: string,
    isChecked: boolean
}

export const addTodo = (todo: string) => {
  const todoObj: Todo = {
    text: todo,
    isChecked: false
  }
  return action(actionNames.ADD_TODO, todoObj)
};