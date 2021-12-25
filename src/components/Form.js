import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: new Date().getTime().toString(),
      title,
      category,
    };
    dispatch(sendBook(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <div className="formPage">
      <h2 className="formHeading">Add New Book</h2>
      <form action="#" onSubmit={submitBookToStore}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          name="genre"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" defaultValue>Category</option>
          <option value="Epic Fantasy">Epic Fantasy</option>
          <option value="Grimdark Fantasy">Grimdark Fantasy</option>
          <option value="YA Fantasy">YA Fantasy</option>
        </select>
        <button className="formBtn" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
