import React from "react";
import BookshelfChanger from "./BookshelfChanger";

const Book = props => {
  const { authors, title, imageLinks } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            backgroundImage: `url(${imageLinks.thumbnail})`,
            display: "block",
            height: 180,
            width: 120,
          }}
        />
        <BookshelfChanger />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors.map(author => (
          <div>{author}</div>
        ))}
      </div>
    </div>
  );
};

export default Book;
