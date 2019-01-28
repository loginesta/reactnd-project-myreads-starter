import React from "react";
import BookshelfChanger from "./BookshelfChanger";
import * as BooksAPI from "./utils/BooksAPI";

class Book extends React.Component {
  state = {
    bookshelf: this.props.bookshelf,
  };

  handleChange(book, shelf) {
    BooksAPI.update(book, shelf).then(
      this.setState(() => ({
        bookshelf: shelf,
      })),
    );
  }

  render() {
    const { book, bookshelf } = this.props;
    const { authors, title, imageLinks } = book;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              backgroundImage: `url(${imageLinks.thumbnail})`,
              backgroundSize: "cover",
              display: "block",
              height: "100%",
              width: "100%",
            }}
          />
          <BookshelfChanger
            book={book}
            current={bookshelf}
            onChangeBookshelf={this.handleChange}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors.map((author, index) => (
            <div key={index}>{author}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Book;
