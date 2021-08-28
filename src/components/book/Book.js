import React from 'react'
// import PropTypes from 'prop-types'
import './Book.css';

const Book = (props) => {
    console.log(props.data.items)
    return (
        <div className="Book">
            {
                props.data.items? props.data.items.map( item => {
                    const {title, authors, price, averageRating, imageLinks} = item.volumeInfo
                    return (
                        <div data-testid="books" className="Book-wrapper" key={item.id}>
                            <img src={imageLinks.smallThumbnail} alt="product"/>
                            <div className="book-title">{title}</div>
                            <div className="book-rating">{averageRating}</div>
                            <div className="book-author">{authors && authors}</div>
                            <div className="book-price">{price}</div>
                            {/* <div className="book-description">{description}</div> */}
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
