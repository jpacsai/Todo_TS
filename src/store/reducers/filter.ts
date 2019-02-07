import { Actions } from '../actionTypes';
import { FILTER_CHANGE } from '../actionNames';
import { FilterType } from '../actionCreators'


export default (state: FilterType = 'all', action: Actions): FilterType => {
  switch (action.type) {
    case FILTER_CHANGE:
      return action.payload;
    default:
      return state;
  }
};