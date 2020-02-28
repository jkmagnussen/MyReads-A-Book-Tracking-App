import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import Book from "./Book";

import * as BooksAPI from "../BooksAPI";

const Search = props => {
  const [searchText, setSearchText] = useState("");
  const [searchedBooks, setSearchedBooks, myBooks] = useState([]);
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    if (searchText.length !== 0) {
      BooksAPI.search(searchText).then(books => {
        if (!books.error) {
          setSearchedBooks(books);
        } else {
          setSearchedBooks([]);
        }
      });
    }
  };

  // Comparrison attempt

  const setDefaultShelves = (searchedBooks, myBooks) => {
    return searchedBooks.map(book => {
      console.log("---> Looping over book item of searchedBooks: ", book);
      myBooks.forEach(myBook => {
        if (myBook.id === searchedBooks.id) {
          console.log(book);
        }
        console.log("Looping over book item of myBooks: ", myBook);
        setSearchedBooks(book);
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
                setDefaultShelves
                key={index}
                title={book.title}
                authors={book.authors}
                imageUrl={book.imageLinks && book.imageLinks.thumbnail}
                bookshelf={book.shelf}
                book={book}
                isSearching
                searchBooks={searchedBooks}
                myBooks={myBooks}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
