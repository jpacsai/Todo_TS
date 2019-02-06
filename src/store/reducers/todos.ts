import { ADD_TODO, TOGGLE_CHECK } from '../actionNames';
import { Actions } from '../actionTypes';
import { Todo } from '../actionCreators'

export default (state: Todo[] = [], action: Actions): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_CHECK:
      return [...state].map(todo => {
        if (todo.id === action.payload.id) {
          todo.isChecked = !todo.isChecked
        }
        return todo;
      });
    default:
      return state;
  }
};