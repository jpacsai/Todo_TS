import { Action } from 'redux';
import { ExtraArguments } from './';
import fetchImgUrl from './utils/fetchPic';
import { addTodo } from './actionCreators'

export type Thunk = (
  dispatch: (action: Action | Thunk) => any,
  extraArguments: ExtraArguments
) => any;

export const fetchPic = (inputText: string): Thunk => async dispatch => {
  const imgUrl = await dispatch(fetchImgUrl(inputText));
  dispatch(addTodo(inputText, imgUrl));
};