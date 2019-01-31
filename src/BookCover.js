import React from "react";
import defaultImage from "./img/default-book-cover.png";
import PropTypes from "prop-types";

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

BookCover.propTypes = {
  imageLinks: PropTypes.object.isRequired,
};

export default BookCover;
