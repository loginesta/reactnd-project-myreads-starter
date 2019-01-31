import React from "react";
import BookCover from "./BookCover";
import BookshelfChanger from "./BookshelfChanger";
import PropTypes from "prop-types";

class Book extends React.Component {
  render() {
    const { book, bookshelf, onChangeBookshelf } = this.props;
    const { authors, title, imageLinks } = book;

    return (
      <div className="book">
        <div className="book-top">
          <BookCover imageLinks={imageLinks} />
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

Book.propTypes = {
  book: PropTypes.object.isRequired,
  bookshelf: PropTypes.string.isRequired,
  onChangeBookshelf: PropTypes.func.isRequired,
};

export default Book;
