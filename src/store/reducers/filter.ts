import { Actions } from '../actionTypes';
import { FILTER_CHANGE } from '../actionNames';

export enum Filter {
  all = 'All',
  done = 'Done',
  todo = 'Todo'
}

export default (state: Filter = Filter.all, action: Actions): Filter => {
  switch (action.type) {
    case FILTER_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
