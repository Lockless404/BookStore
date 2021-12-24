import {createStore, combineReducers, applyMiddleware} from 'redux';
import booksReducer from './books/books';

const reducer = combineReducers({
    books: booksReducer,
    // additional reducers could be added here
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
