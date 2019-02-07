import { Action } from 'redux';
import { ExtraArguments, State } from './';
import { addTodo } from './actionCreators';

export type Thunk = (
  dispatch: (action: Action | Thunk) => any,
  getState: () => State,
  extraArguments: ExtraArguments
) => any;

export const fetchPic = (inputText: string): Thunk => async (dispatch, getState, {fetchPic}) => {
  const imgUrl: string = await fetchPic(inputText);
  dispatch(addTodo(inputText, imgUrl));
};