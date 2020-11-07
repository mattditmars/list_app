import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: { title, author }});
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handSubmit}>
            <input required={true} type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input required={true} type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <input type="submit" value="Add Book" />
        </form>
    );
}
 
export default BookForm;