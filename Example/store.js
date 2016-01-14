import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

export default (initialState) => {
  const store = applyMiddleware(
    thunk
  )(createStore)(reducer, initialState);
  return store;
};
