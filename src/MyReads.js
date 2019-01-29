import React from "react";
import Bookshelf from "./Bookshelf";
import { Link } from "react-router-dom";

class MyReads extends React.Component {
  filterBooks(books, bookshelf) {
    return books.filter(book => book.shelf === bookshelf);
  }

  render() {
    const { books, handleChangeBookshelf } = this.props;

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
              books={this.filterBooks(books, "currentlyReading")}
              onChangeBookshelf={handleChangeBookshelf}
            />
            <Bookshelf
              id="wantToRead"
              title="Want To Read"
              books={this.filterBooks(books, "wantToRead")}
              onChangeBookshelf={handleChangeBookshelf}
            />
            <Bookshelf
              id="read"
              title="Read"
              books={this.filterBooks(books, "read")}
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
  }
}

export default MyReads;
