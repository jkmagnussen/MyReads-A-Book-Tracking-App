import React from "react";

import Book from "./Book";

const Bookshelf = props => {
  const { books, title, setBooks } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map((book, index) => (
              <li key={index}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  imageUrl={book.imageLinks.thumbnail}
                  book={book}
                  books={books}
                  setBooks={setBooks}
                />
              </li>
            ))}
        </ol>
        <img
          className="profile-image"
          src={require("../Media/207-2075695_wooden-shelf-png.png")}
        />
      </div>
    </div>
  );
};

export default Bookshelf;
