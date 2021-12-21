import React from 'react';

const Form = () => (
  <div>
    <h2>Add New Book</h2>
    <form action="#">
      <input type="text" name="title" placeholder="Book Title" />
      <select name="genre">
        <option value="" defaultValue>Category</option>
        <option value="Epic Fantasy">Epic Fantasy</option>
        <option value="Grimdark Fantasy">Grimdark Fantasy</option>
        <option value="YA Fantasy">YA Fantasy</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Form;
