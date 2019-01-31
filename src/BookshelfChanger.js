import React from "react";
import PropTypes from "prop-types";
import { bookshelves } from "./utils/bookshelves";

const BookshelfChanger = props => {
  const { book, current, onChangeBookshelf } = props;
  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={current}
        onChange={event => onChangeBookshelf(book, event.target.value)}
      >
        {bookshelves.map(bookshelf => (
          <option
            key={bookshelf.id}
            value={bookshelf.id}
            disabled={bookshelf.disabled}
          >
            {bookshelf.title}
          </option>
        ))}
      </select>
    </div>
  );
};

BookshelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  current: PropTypes.string.isRequired,
  onChangeBookshelf: PropTypes.func.isRequired,
};

export default BookshelfChanger;
