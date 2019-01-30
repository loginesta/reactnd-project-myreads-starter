import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import Booklist from "./Booklist";

class SearchBooks extends React.Component {
  state = {
    query: "",
    error: false,
    searchBooks: [],
    books: this.props.books,
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query,
    }));

    if (query !== "") {
      BooksAPI.search(query.toLowerCase()).then(matchingBooks => {
        if (matchingBooks.error) {
          this.setState({
            searchBooks: [],
            error: true,
          });
        } else {
          /* WIP */
          /* for all matching books, check if book in myReads */
          /* If in my reads - remove current, add the one in my reads */
          this.setState({
            searchBooks: matchingBooks,
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
          {this.state.query && !this.state.error && (
            <Booklist
              books={this.state.searchBooks}
              onChangeBookshelf={this.props.onChangeBookshelf}
            />
          )}
          {this.state.error && <p>No books matching search criteria</p>}
        </div>
      </div>
    );
  }
}
export default SearchBooks;
