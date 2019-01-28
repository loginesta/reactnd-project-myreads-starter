import React from "react";
import Book from "./Book";

class Booklist extends React.Component {
  render() {
    const { books, bookshelf } = this.props;
    return (
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book book={book} bookshelf={bookshelf} />
          </li>
        ))}
      </ol>
    );
  }
}

export default Booklist;
