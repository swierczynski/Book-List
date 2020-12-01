import React, {useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type:'ADD_BOOK', book: {
            title,
            author
        }});
        setTitle('');
        setAuthor('');
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='wpisz tytuł...' />
            <input type="text" value={author} onChange={(e)=> setAuthor(e.target.value)} placeholder='wpisz autora...' />
            <button type='submit'>Dodaj książkę</button>
        </form>
     );
}
 
export default NewBookForm;
