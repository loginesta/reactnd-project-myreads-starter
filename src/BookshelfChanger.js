import React from "react";
import { bookshelves } from "./utils/bookshelves";

const BookshelfChanger = props => {
  const { current } = props;
  return (
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>
          Move to...
        </option>
        {bookshelves.map(bookshelf => (
          <option
            value={bookshelf.id}
            selected={current === bookshelf.id ? "selected" : ""}
          >
            {bookshelf.title}
          </option>
        ))}
        <option value="none" selected={current === "" ? "selected" : ""}>
          None
        </option>
      </select>
    </div>
  );
};

export default BookshelfChanger;
