import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class Booklist extends React.Component {
  render() {
    const { books, onChangeBookshelf } = this.props;
    return (
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book
              book={book}
              bookshelf={book.shelf ? book.shelf : "none"}
              onChangeBookshelf={onChangeBookshelf}
            />
          </li>
        ))}
      </ol>
    );
  }
}

Booklist.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeBookshelf: PropTypes.func.isRequired,
};

export default Booklist;
