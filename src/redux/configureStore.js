import { createStore, combineReducers } from 'redux';
import booksReducer from './books/books';

const reducer = combineReducers({
  books: booksReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
);

export default store;
