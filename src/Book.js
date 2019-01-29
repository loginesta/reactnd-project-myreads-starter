import React from "react";
import BookshelfChanger from "./BookshelfChanger";

class Book extends React.Component {
  render() {
    const { book, bookshelf, onChangeBookshelf } = this.props;
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
            onChangeBookshelf={onChangeBookshelf}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors &&
            authors.map((author, index) => <div key={index}>{author}</div>)}
        </div>
      </div>
    );
  }
}

export default Book;
