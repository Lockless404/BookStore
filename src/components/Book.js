import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (
  {
    title,
    author,
    genre,
    id,
  }
) => {
  const dispatch = useDispatch();

  return (
    <div id={id} className="book">
      <div key={id}>
        <h4>{genre}</h4>
        <h2>{title}</h2>
        <h4>{author}</h4>
      </div>
      <button
        type="button"
        onClick={(e) => {
          const { id } = e.target.parentElement;
          dispatch(removeBook(id));
        }}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
