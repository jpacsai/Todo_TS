import { Actions } from '../actionTypes';
import { FILTER_CHANGE } from '../actionNames';

export default (state: string = 'all', action: Actions): string => {
  switch (action.type) {
    case FILTER_CHANGE:
      return action.payload;
    default:
      return state;
  }
};