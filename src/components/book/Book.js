import React from 'react'
// import PropTypes from 'prop-types'
import './Book.css';

const Image = ({data, size}) => {
    
    const imageSize = data.filter( img => img && img[size]);
   
    return (
        imageSize && imageSize.map( (image, index) => <img key={index} src={image.small.url} alt={image.small.alt}/>)
    )
}


const Book = (props) => {
    return (
        <div className="Book">
            {
                props.books.length ? props.books.map( item => {
                    return (
                        <div data-testid="books" className="Book-wrapper" key={item.id}>
                            <Image data={item.images} size="small"/>
                            <div className="book-title">{item.title}</div>
                            <div className="book-author">{item.author}</div>
                            <div className="book-price">{item.price}</div>
                            <div className="book-description">{item.description}</div>
                        </div>
                    )
                }) : <div data-testid="no-books">Empty..</div>
            }
        </div>
    )
}

// Book.propTypes = {
    
// }

export default Book
