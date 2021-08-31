import dotenv from 'dotenv'
import axios from 'axios'

const url = 'https://www.googleapis.com/books/v1/volumes';
const env = dotenv.config()

async function ProductDetails(productId) {
    return await axios.get(`${url}/${productId}`, {
        headers: { 'Authorization': process.env.BOOK_AUTH }
    })
    .then( res => { 
        return res.data
    })
    .catch( err => { 
        console.log(err)
    })
}

export default ProductDetails;