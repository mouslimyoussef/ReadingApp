import React, { useContext } from "react";
import { BooksContext } from "../contexts/BookContext";

const NavBar = () => {
  const { books } = useContext(BooksContext);
  return (
    <div className="navbar">
      <h1>reading list</h1>
      <p>currently you have {books.length} books to get through...</p>
    </div>
  );
};

export default NavBar;
