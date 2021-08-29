import axios from 'axios';

const url = 'https://www.googleapis.com/books/v1/volumes';

async function ProductDetails(productId) {
    return await axios.get(`${url}/${productId}`, {
        headers: { 'Authorization': 'AIzaSyAs8ouFNAGYNVPhQeJV0_MAAx81Wn2kn6I}' }
    })
    .then( res => { 
        return res.data
    })
    .catch( err => { 
        console.log(err)
    })
}

export default ProductDetails;