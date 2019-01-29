import React from "react";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import SearchBooks from "./SearchBooks";
import MyReads from "./MyReads";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
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
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MyReads
              books={this.state.books}
              handleChangeBookshelf={this.handleChangeBookshelf}
            />
          )}
        />
        <Route path="/search" render={({ history }) => <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;
