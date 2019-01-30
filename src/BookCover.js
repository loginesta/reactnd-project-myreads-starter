import React from "react";
import defaultImage from "./img/default-book-cover.png";

const BookCover = props => {
  const { imageLinks } = props;
  let image = defaultImage;
  if (imageLinks && imageLinks.thumbnail) {
    image = imageLinks.thumbnail;
  }

  return (
    <div
      className="book-cover"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        display: "block",
        height: "100%",
        width: "100%",
      }}
    />
  );
};

export default BookCover;
