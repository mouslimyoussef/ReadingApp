import React, { createContext, useReducer, useEffect } from "react";
import { v1 as uuid } from "uuid";
import { bookReducer } from "../reducer/BookReducer";

export const BooksContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");

    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BookContextProvider;
