import React from "react";
import BookshelfChanger from "./BookshelfChanger";

const Book = props => {
  const { authors, title, imageLinks, bookshelf } = props;
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
        <BookshelfChanger current={bookshelf} />
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
