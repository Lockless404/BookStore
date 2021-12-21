import PropTypes from 'prop-types'

const Book = ({ title, author, genre }) => (
  <div className="book">
    <div>
      <h4>{genre}</h4>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </div>
    <button type="button">Remove</button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
}

export default Book;
