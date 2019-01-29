import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import Booklist from "./Booklist";

class SearchBooks extends React.Component {
  state = {
    query: "",
    searchBooks: [],
    books: this.props.books,
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query,
    }));

    if (query !== "") {
      BooksAPI.search(query.toLowerCase()).then(books => {
        this.setState({
          searchBooks: books,
        });
      });
    } else {
      this.setState({
        searchBooks: [],
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
            {/*
                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                          You can find these search terms here:
                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
        
                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                          you don't find a specific author or title. Every search is limited by search terms.
                        */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <Booklist
            books={this.state.searchBooks}
            onChangeBookshelf={this.props.onChangeBookshelf}
          />
        </div>
      </div>
    );
  }
}
export default SearchBooks;
