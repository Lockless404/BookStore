const Book = (props) => {
  const {title, author, genre} = props;
  
  return (
    <div className="book">
      <div>
        <h4>{genre}</h4>
        <h2>{title}</h2>
        <h4>{author}</h4>
      </div>
      <button>Remove</button>
    </div>
  )
}

export default Book;
