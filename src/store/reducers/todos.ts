import { SOMETHING } from '../actionNames';
import { Actions } from '../actionTypes';

export default (state: string[] = [], action: Actions): string[] => {
  switch (action.type) {
    case SOMETHING:
      return [...state, action.payload];
    default:
      return state;
  }
};