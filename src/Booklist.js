import React from "react";
import Book from "./Book";

const Booklist = props => {
  const { books, bookshelf } = props;
  return (
    <ol className="books-grid">
      {books.map(book => (
        <li key={book.id}>
          <Book
            title={book.title}
            authors={book.authors}
            imageLinks={book.imageLinks}
            bookshelf={bookshelf}
          />
        </li>
      ))}
    </ol>
  );
};

export default Booklist;
