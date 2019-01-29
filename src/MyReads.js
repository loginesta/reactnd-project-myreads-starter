import React from "react";
import Bookshelf from "./Bookshelf";

const MyReads = props => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            id="currentlyReading"
            title="Currently Reading"
            books={props.currentlyReading}
            onChangeBookshelf={props.handleChangeBookshelf}
          />
          <Bookshelf
            id="wantToRead"
            title="Want To Read"
            books={props.wantToRead}
            onChangeBookshelf={props.handleChangeBookshelf}
          />
          <Bookshelf
            id="read"
            title="Read"
            books={props.read}
            onChangeBookshelf={props.handleChangeBookshelf}
          />
        </div>
      </div>
      <div className="open-search">
        {/** this button should be a link too */}
        <button>Add a book</button>
      </div>
    </div>
  );
};

export default MyReads;
