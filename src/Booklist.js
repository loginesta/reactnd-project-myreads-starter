import React from "react";
import Book from "./Book";

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

export default Booklist;
