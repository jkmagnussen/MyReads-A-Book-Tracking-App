import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import Book from "./Book";

import * as BooksAPI from "../BooksAPI";

const Search = props => {
  const [searchText, setSearchText] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();

    if (searchText.length !== 0) {
      BooksAPI.search(searchText).then(books => {
        console.log(books);
        if (!books.error) {
          setSearchedBooks(books);
        }
      });
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button className="close-search" onClick={() => history.push("/")}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          <form onSubmit={event => handleSubmit(event)}>
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
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
