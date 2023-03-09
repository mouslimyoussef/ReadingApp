import { useContext } from "react";
import { BooksContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BooksContext);
  return (
    <li onClick={() => dispatch({type:'REMOVE_BOOK',id:book.id})} >
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
