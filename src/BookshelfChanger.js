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
        <option key="move" value="move" disabled>
          Move to...
        </option>
        {bookshelves.map(bookshelf => (
          <option key={bookshelf.id} value={bookshelf.id}>
            {bookshelf.title}
          </option>
        ))}
        <option key="none" value="none">
          None
        </option>
      </select>
    </div>
  );
};

export default BookshelfChanger;
