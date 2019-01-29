import React from "react";
import Bookshelf from "./Bookshelf";
import { Link } from "react-router-dom";
import { bookshelves } from "./utils/bookshelves";

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
            {bookshelves.map(bookshelf => (
              <Bookshelf
                key={bookshelf.id}
                id={bookshelf.id}
                title={bookshelf.title}
                books={this.filterBooks(books, bookshelf.id)}
                onChangeBookshelf={handleChangeBookshelf}
              />
            ))}
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
