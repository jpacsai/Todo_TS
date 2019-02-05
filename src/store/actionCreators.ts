import { action } from 'typesafe-actions';
import * as actionNames from './actionNames';

export const addTodo = (todo: string) => action(actionNames.ADD_TODO, todo);
