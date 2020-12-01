import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails'


const BookList = () => {
    const {books} = useContext(BookContext);
    const booksList = books.map(book => (
        <BookDetails book={book} key={book.id} />
    ));
    const nothing = <p>You have nothing to read</p>
    const showBooks = books.length > 0 ? booksList : nothing
    return ( 
        <div>
            <ul style={{listStyle:'none'}}>
            {showBooks}
            </ul>
        </div>
     );
}
 
export default BookList;