import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBookApi } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBookApi())
  },[]);

  return (
    <div className="books">
      {books.map((book) => (
        <Book
          item_id={book.item_id}
          key={book.item_id}
          title={book.title}
          category={book.category}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;
