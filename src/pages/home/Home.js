import React from 'react';
import Layout from '../../layout/Layout';
import fetchBooks from '../../api/book-api';
import withFetch from '../../components/with-fetch/withFetch';
import Book from '../../components/book/Book';
import './Home.css'

const BookWithFetchNewest = withFetch(Book, fetchBooks('newest'));
const BookWithFetchRelevance = withFetch(Book, fetchBooks('relevance'));

const Home = () => {
    
    return (
        <Layout>
            <div className="container">
                <h1>New Release</h1>
                <hr/>
                <BookWithFetchNewest/>
                <h1>Relevance</h1>
                <BookWithFetchRelevance/>
            </div>
        </Layout>
    )
}

export default Home
