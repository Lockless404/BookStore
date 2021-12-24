import React from 'react';
import Book from './Book';
import Form from './Form';
import { useSelector } from 'react-redux';

const Books = () => {
  const books = useSelector((state) => {
    return state.books;
  });

  return (
    <div className="books">
      {books.map((book) => (
        <Book
          id={book.id}
          key={book.id}
          title={book.title}
          author={book.author}
          genre={book.genre}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;
