import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router';
import fetchProductDetails from '../../api/product-details';
import Layout from '../../layout/Layout';

const Product = (props) => (
    <div className="product">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
)

const ProductDetails = () => {

    const [product, setProduct] = useState([])
    const location = useLocation();

    useEffect(() => {
        fetchProductDetails(location.state).then( (response) => {
            try {
                setProduct(response)
            } catch(err) {
                console.log(err)
            }
        })
    },[location.state])
    
    return (
        <Layout>
           {
               <Product {...product.volumeInfo}/>
           }
        </Layout>
    )
        
    
}

export default ProductDetails
