import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router';
import fetchProductDetails from '../../api/product-details';

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
    
    console.log(product)
    return (
        <div>
           {
               Object.values(product).map( item => {
                   return (
                        <div className="ProductDetails">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <p>{item.description}</p>
                            
                        </div>
                   )
               })
           }
           
        </div>
    )
}

export default ProductDetails
