import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import quoteReducer from './QuoteReducer';

const store = createStore(
  quoteReducer,
  applyMiddleware(thunkMiddleware)
);

export default store;
