const Book = (props) => (
  <div className="book">
    <div>
      <h4>{props.data.genre}</h4>
      <h2>{props.data.title}</h2>
      <h4>{props.data.author}</h4>
    </div>
    <button type="button">Remove</button>
  </div>
);

export default Book;
