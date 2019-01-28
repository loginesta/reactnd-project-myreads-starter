import React from "react";
import Book from "./Book";

class Booklist extends React.Component {
  render() {
    const { books, bookshelf, onChangeBookshelf } = this.props;
    return (
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book
              book={book}
              bookshelf={bookshelf}
              onChangeBookshelf={onChangeBookshelf}
            />
          </li>
        ))}
      </ol>
    );
  }
}

export default Booklist;
