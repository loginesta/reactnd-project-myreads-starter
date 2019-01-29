import React from "react";
import Bookshelf from "./Bookshelf";
import { Link } from "react-router-dom";

const MyReads = props => {
  const { books, handleChangeBookshelf } = props;

  const currentlyReading = books.filter(
    book => book.shelf === "currentlyReading",
  );
  const wantToRead = books.filter(book => book.shelf === "wantToRead");
  const read = books.filter(book => book.shelf === "read");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            id="currentlyReading"
            title="Currently Reading"
            books={currentlyReading}
            onChangeBookshelf={handleChangeBookshelf}
          />
          <Bookshelf
            id="wantToRead"
            title="Want To Read"
            books={wantToRead}
            onChangeBookshelf={handleChangeBookshelf}
          />
          <Bookshelf
            id="read"
            title="Read"
            books={read}
            onChangeBookshelf={handleChangeBookshelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" className="button">
          Add a book
        </Link>
      </div>
    </div>
  );
};

export default MyReads;
