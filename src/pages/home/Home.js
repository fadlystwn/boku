import React from 'react'
import './Home.css'
import Book from '../../components/book/Book';
import {Books} from '../../api-data';

const Home = () => {
    return (
        <div className="container">
           <h1>New Release</h1>
           <hr/>
            <Book books={Books}/>
           <h1>Best Seller</h1>
            <Book books={Books}/>
           <h1>Editors Pick</h1>
            <Book books={Books}/>
        </div>
    )
}

export default Home
