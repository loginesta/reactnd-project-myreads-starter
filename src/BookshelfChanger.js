import React from "react";

const bookshelves = [
  {
    id: "currentlyReading",
    title: "Currently Reading",
    books: [],
  },
  {
    id: "wantToRead",
    title: "Want To Read",
    books: [],
  },
  {
    id: "read",
    title: "Read",
    books: [],
  },
];

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
