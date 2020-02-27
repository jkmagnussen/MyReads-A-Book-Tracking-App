import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import Book from "./Book";

import * as BooksAPI from "../BooksAPI";

const Search = props => {
  const [searchText, setSearchText] = useState("");
  const [searchedBooks, setSearchedBooks, book] = useState([]);
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    if (searchText.length !== 0) {
      BooksAPI.search(searchText).then(books => {
        console.log(books);
        console.log(book);
        if (!books.error) {
          setSearchedBooks(books);
        } else {
          setSearchedBooks([]);
        }
      });
    }
  };

  // Attempt at search - bookshelf comparison 1

  const setDefaultShelves = (books, book) => {
    return books.map(book => {
      books.shelf = "none";
      books.forEach(books => {
        if (books.id === book.id) {
          /* TODO: set the book shelf to the same shelf of myBook*/
          books.bookshelf = book.bookshelf;
        }
      });
      return book;
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => history.push("/")}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          <form onSubmit={event => handleSubmit(event)}>
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => setSearchText(event.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks &&
            searchedBooks.map((book, index) => (
              <Book
                key={index}
                title={book.title}
                authors={book.authors}
                imageUrl={book.imageLinks && book.imageLinks.thumbnail}
                bookshelf={book.shelf}
                book={book}
                isSearching
                setDefaultShelves
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
