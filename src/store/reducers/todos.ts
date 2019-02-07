import { ADD_TODO, CLEAR_TODOS, TOGGLE_CHECK } from '../actionNames';
import { Actions } from '../actionTypes';

export type Todo = {
  text: string;
  isChecked: boolean;
  id: number;
  imgUrl: string;
};

export default (state: Todo[] = [], action: Actions): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { ...action.payload, isChecked: false, id: state.length }];
    case CLEAR_TODOS:
      return [];
    case TOGGLE_CHECK:
      return [...state].map(todo => {
        return todo.id === action.payload ? { ...todo, isChecked: !todo.isChecked } : todo;
      });
    default:
      return state;
  }
};
