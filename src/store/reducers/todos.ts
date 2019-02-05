import { ADD_TODO } from '../actionNames';
import { Actions } from '../actionTypes';

export default (state: string[] = [], action: Actions): string[] => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};