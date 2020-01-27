# MyReads Project

MyReads is a web application that allows users to select and categorize books into virtual bookshelves.

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are: _Currently Reading_, _Want to Read_ and _Read_.

![Screenshot](https://loginesta.github.io/static/projects/my-reads/main-page.png)

Each book has a control that lets the user select the shelf for that book. When the user selects a different shelf, the book moves there.

From the main page the user can navigate to a _Search_ page that allows the user to find books.
The search page will display the books that match the entered search criteria, along with a control that lets the user add books to the library.

![Screenshot](https://loginesta.github.io/static/projects/my-reads/search-page.png)

## Installation

To get started right away:

- install all project dependencies with `npm install`
- start the server with `npm start`

## Dependencies

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
And implemented using [React](https://reactjs.org/).

## Important

In order to perform searches, the backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Acknowledgements

This is a project for Udacity's React Fundamentals course. In this sense, Udacity provided static example of the CSS and HTML markup that was used, but without any of the React code needed to complete the project. The goal of this project was adding interactivity to the app by refactoring the provided code.
