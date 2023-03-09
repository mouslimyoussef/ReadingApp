import { useContext } from "react";
import { BooksContext } from "../contexts/BookContext";
import BookDetails from "./BookDetail";


const BookList = () => {
    const {books}=useContext(BooksContext);
    return  books.length ? ( 
  <div className="books-list">
    <ul>
        {books.map(book=>{
            return( <BookDetails book={book} key={book.id} />)
        })}
    </ul>
  </div>
    ) : (
 <div className="empty"> no books to read</div>
     )
}
 
export default BookList;
