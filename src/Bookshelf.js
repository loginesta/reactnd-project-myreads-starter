import React from "react";
import Booklist from "./Booklist";
import PropTypes from "prop-types";

const Bookshelf = props => {
  const { title, books, onChangeBookshelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <Booklist books={books} onChangeBookshelf={onChangeBookshelf} />
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChangeBookshelf: PropTypes.func.isRequired,
};

export default Bookshelf;
