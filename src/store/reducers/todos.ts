import { ADD_TODO } from '../actionNames';
import { Actions } from '../actionTypes';
import { Todo } from '../actionCreators'

export default (state: Todo[] = [], action: Actions): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};