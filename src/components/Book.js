import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (
  {
    title,
    category,
    id,
  },
) => {
  const dispatch = useDispatch();

  return (
    <div id={id} className="book">
      <div key={id}>
        <h4>{category}</h4>
        <h2>{title}</h2>
        <h4>author</h4>
      </div>
      <button
        type="button"
        onClick={(e) => {
          const { id } = e.target.parentElement;
          dispatch(deleteBook(id));
        }}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
