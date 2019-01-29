import React from "react";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import SearchBooks from "./SearchBooks";
import MyReads from "./MyReads";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books: books,
      }));
    });
  }

  handleChangeBookshelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(
      (book.shelf = shelf),
      this.setState(currentState => ({
        books: currentState.books
          .filter(b => {
            return b.id !== book.id;
          })
          .concat([book]),
      })),
    );
  };

  render() {
    const { books } = this.state;
    const currentlyReading = books.filter(
      book => book.shelf === "currentlyReading",
    );
    const wantToRead = books.filter(book => book.shelf === "wantToRead");
    const read = books.filter(book => book.shelf === "read");

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks />
        ) : (
          <MyReads
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
            handleChangeBookshelf={this.handleChangeBookshelf}
          />
        )}
      </div>
    );
  }
}

export default BooksApp;
