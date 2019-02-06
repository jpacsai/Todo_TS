import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import fetchPic from './utils/fetchPic'

const extraArguments = { fetchPic };
export type ExtraArguments = typeof extraArguments;

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(extraArguments)));

export type State = ReturnType<typeof rootReducer>;

export default store;