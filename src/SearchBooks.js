import React from "react";
import Booklist from "./Booklist";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";

class SearchBooks extends React.Component {
  state = {
    query: "",
    error: false,
    searchBooks: [],
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query,
    }));

    if (query !== "") {
      BooksAPI.search(query.toLowerCase()).then(requestedBooks => {
        if (requestedBooks.error) {
          this.setState({
            searchBooks: [],
            error: true,
          });
        } else {
          const books = this.props.books;
          const searchBooks = requestedBooks.map(b => {
            for (let book of books) {
              if (b.id === book.id) {
                return book;
              }
            }
            b.shelf = "none";
            return b;
          });

          this.setState({
            searchBooks: searchBooks,
            error: false,
          });
        }
      });
    } else {
      this.setState({
        searchBooks: [],
        error: false,
      });
    }
  };

  clearQuery = () => {
    this.updateQuery("");
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {!this.state.error && this.state.query && (
            <Booklist
              books={this.state.searchBooks}
              onChangeBookshelf={this.props.handleChangeBookshelf}
            />
          )}
          {this.state.error && <p>No books matching search criteria</p>}
        </div>
      </div>
    );
  }
}

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  handleChangeBookshelf: PropTypes.func.isRequired,
};

export default SearchBooks;
