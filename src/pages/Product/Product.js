import React, { useEffect, useState } from 'react';
import './Prodcut.css'
import buger from '../../images/double.jpg'
import ProductDetail from './ProductDetail';

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
        <h1 className='d-flex align-items-center justify-content-center banner_font mt-5' id='favourite'>Get Your <span className='fab-color ms-3'> Favourite's</span></h1>
            <div className='row mt-5'>
            {
                products.map(product => <ProductDetail product={product} key={product._id}></ProductDetail>)
            }
        </div>
        </div>
    );
};

export default Product;