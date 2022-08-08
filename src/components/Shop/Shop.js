import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb} from '../../utilities/fakedb';
import './Shop.css';

const Shop = () => {
    const [products, setProducts]= useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts]= useState([]);

    useEffect(()=>
    {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res=> res.json())
        .then(data=> {
            setProducts(data);
            setDisplayProducts(data);
    });
    },[]);

   
    const handleAddToCart = (product)=>
    {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    const handleSearch = event=>
    {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product=> product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length);
    }
    return (
        <>
          <div className="search-container">
            <input type="text" placeholder="Search-Product" onChange={handleSearch} />
          </div>
        <div className="shop-container">
            <div className="product-container">
                
                {
                    displayProducts.map(product=> <Product 
                        key={product.id} 
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            {/* <h2>This is shop</h2> */}
        </div>
        </>
      
    );
};

export default Shop;