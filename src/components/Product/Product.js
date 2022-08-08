import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
  console.log(props);
    const {name, img,seller, stock, price, ratings}= props.product;
    
    return (
        <div className="product">
            <div>
            <img className="img" src={img} alt="" />
            </div>
          <div className="write">
             <h4 className="product-name">{name}</h4>
            <p><small>by: {seller}</small></p>
            <p>Price: {price}</p>
            <p><small>Only{stock} left in stock - order soon</small></p>
            <Rating 
            initialRating={ratings} 
            emptySymbol="far fa-star icon-rating"
            fullSymbol="fas fa-star icon-rating"
            readonly></Rating>
            <br />
            <button onClick={()=>props.handleAddToCart(props.product)}
            className="btn-regular">
              <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
          </div>
           
        </div>
    );
};

export default Product;