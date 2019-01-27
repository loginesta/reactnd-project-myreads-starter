import React from "react";
import Booklist from "./Booklist";

const Bookshelf = props => {
  const { id, title, books } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <Booklist books={books} bookshelf={id} />
      </div>
    </div>
  );
};

export default Bookshelf;
