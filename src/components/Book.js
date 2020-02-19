import React, { useState } from "react";

import * as BooksAPI from "../BooksAPI";

const Book = props => {
  const { title, authors, imageUrl, book, setBooks, books } = props;

  const handleShelfChange = event => {
    if (event.target.value !== "move") {
      BooksAPI.update(book, event.target.value).then(response =>
        BooksAPI.getAll().then(newBooks => {
          setBooks(newBooks);
        })
      );
    }
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imageUrl}")`
          }}
        ></div>
        <div className="book-shelf-changer">
          <select onChange={event => handleShelfChange(event)}>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors.map(author => `${author},`)}</div>
    </div>
  );
};

export default Book;
