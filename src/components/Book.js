const Book = (props) => {
  const { title, author, genre } = props.data  ;
  return (
    <div className="book">
      <div>
        <h4>{genre}</h4>
        <h2>{title}</h2>
        <h4>{author}</h4>
      </div>
      <button type='button'>Remove</button>
    </div>
  );
};

export default Book;
