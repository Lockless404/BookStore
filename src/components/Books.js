import React from 'react';
import Book from './Book';

const Books = () => {
  const data = [
    {
      title: 'A Game of Thrones',
      author: 'George R R Martin',
      genre: 'Epic Fantasy',
      id: '1',
    },
    {
      title: 'The Blade Itself',
      author: 'Joe Abercrombie',
      genre: 'Dark Fantasy',
      id: '2',
    },
    {
      title: 'Harry Potter and The Goblet Of Fire',
      author: 'J K Rowling',
      genre: 'Young Adult Fantasy',
      id: '3',
    },
  ];

  return (
    <div className="books">
      {data.map((book) => <Book key={book.id} data={book} />)}
    </div>
  );
};

export default Books;
