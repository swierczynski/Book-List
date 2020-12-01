import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);
    const handleDelete = () => {
        dispatch({type:'REMOVE_BOOK', id: book.id})
    }
    return ( 
        <li style={{fontSize:'25px'}}>
            <div className='title' style={{letterSpacing:'3px', fontWeight:'bold'}}>{book.title.toUpperCase()}</div>
            <div className='author'>{book.author.toUpperCase()}</div>
            <button style={{borderRadius:'50%', cursor: 'pointer'}} onClick={handleDelete} >X</button>
        </li>
     );
}
 
export default BookDetails;