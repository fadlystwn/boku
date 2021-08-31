import React from 'react'
import {Link} from 'react-router-dom';
import formatCurrency from '../../modules/format-currency';
import convertToSlug from '../../modules/convert-to-slug';
// import PropTypes from 'prop-types'
import './Book.css';

const Book = (props) => {
    return (
        <div className="Book">
            {
                props.data.items? props.data.items.map( item => {
                    const {title, authors, averageRating, imageLinks} = item.volumeInfo
                    const {retailPrice} = item.saleInfo;
                    const price = formatCurrency(retailPrice && retailPrice.amount)
                    // const LinkTo = {pathname: `/${convertToSlug(title && title)}`, state: item.id}
                    
                    return (
                        <div data-testid="books" className="Book-wrapper" key={item.id}>
                            <img src={imageLinks.smallThumbnail} alt="product"/>
                            <div className="book-title">{title}</div>
                            <div className="book-rating">{averageRating}</div>
                            <div className="book-author">{authors && authors}</div>
                            <div className="book-price">{price}</div>
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
