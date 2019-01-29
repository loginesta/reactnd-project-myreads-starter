import React from "react";
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

export default BookshelfChanger;
