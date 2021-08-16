import React from 'react'
// import PropTypes from 'prop-types'
import {Books} from '../../api-data';
import './Book.css';

const Image = ({data, size}) => {
    
    const imageSize = data.filter( img => img && img[size]);
   
    return (
        imageSize && imageSize.map( image => <img src={image.small.url} alt={image.small.alt}/>)
    )
}


const Book = (props) => {
    return (
        <div className="Book">
            {
                Books && Books.map( item => {
                    return (
                        <div className="Book-wrapper" key={item.id}>
                            <Image data={item.images} size="small"/>
                            <div className="book-title">{item.title}</div>
                            <div className="book-author">{item.author}</div>
                            <div className="book-description">{item.description}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

// Book.propTypes = {
    
// }

export default Book
