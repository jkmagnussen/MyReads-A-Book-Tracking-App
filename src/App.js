import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

import Search from "./components/Search";
import Bookshelf from "./components/Bookshelf";

const bookshelves = [
  { title: "Currently Reading", shelfName: "currentlyReading" },
  { title: "Want to Read", shelfName: "wantToRead" },
  { title: "Read", shelfName: "read" }
];

const App = () => {
  const [isSearching, setSearching] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then(booksFromApi => {
      setBooks(booksFromApi);
    });
  }, []);

  return (
    <div className="app">
      {isSearching ? (
        <Search setSearchText={setSearchText} setSearching={setSearching} />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {bookshelves.map((bookshelf, index) => (
                <Bookshelf
                  key={index}
                  title={bookshelf.title}
                  books={
                    books &&
                    books.filter(
                      book => book && book.shelf === bookshelf.shelfName
                    )
                  }
                  setBooks={setBooks}
                />
              ))}
            </div>
          </div>
          <div className="open-search">
            <button onClick={() => setSearching(true)}>Add a book</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
