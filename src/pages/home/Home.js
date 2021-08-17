import React from 'react'
import './Home.css'
import Book from '../../components/book/Book';
import {Books} from '../../api-data';

const Home = () => {
    return (
        <div className="container">
           <h1>Promo buy 2 get 1!</h1>
           <hr/>
            <Book books={Books}/>
        </div>
    )
}

export default Home
