import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const reducer = combineReducers({
  books: booksReducer,
  // additional reducers could be added here
});

// const getBooks = async () => {
//   const pull = await fetch(url);
//   await pull.json();
// };

// const sendBooks = async (books) => {
//   await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(books),
//   });
// }

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
