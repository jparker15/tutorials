import React, {useContext} from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from "./BookDetails"

const BookList = () => {
    const {books} = useContext(BookContext);
        //check if there's any books
    return books.length ?
    (
        <ul className="book-list">
            {books.map(book=>{
                return(<BookDetails book={book} key={book.id}/>)
            })}
        </ul>
    )
    : 
    (
       <div className="empty">Find more books lmao XD</div> 
    )
}

export default BookList