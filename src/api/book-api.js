import axios from 'axios';

const url = 'https://www.googleapis.com/books/v1/volumes';

async function fetchBooks(orderBy) {
    return await axios.get(`${url}/?q=programming&orderBy=${orderBy}&maxResults=8&filter=paid-ebooks`)
    .then( res => { 
        return res.data
    })
    .catch( err => { 
        console.log(err)
    })
    
}

export default fetchBooks;