import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    return ( 
        <div className="navbar">
            <h1>Book Reading List</h1>
            <h4>Currently you have { books.length } {books.length === 1 ? "book": "books"} to get through...</h4>
        </div>
     );
}
 
export default Navbar;