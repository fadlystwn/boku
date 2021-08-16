import React from 'react'
import './Home.css'
import Book from '../../components/book/Book';

const Home = () => {
    return (
        <div className="container">
           <h1>Promo buy 2 get 1!</h1>
           <hr/>
           <Book/>
        </div>
    )
}

export default Home
