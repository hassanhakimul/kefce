import React from 'react';
import './ProductDetail.css'
import { BsSearch } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FcShare } from "react-icons/fc";
const ProductDetail = ({product}) => {
    const{name,img,price,nPrice,discount}=product;
    return (
       
        <div class="col-md-4 col-sm-6 g-5">
            <div class="product-grid">
                <div class="product-image">
                    <a href="#" class="image">
                        <img src={img} />
                    </a>
                    <span class="product-discount-label">{discount}</span>
                    <ul class="product-links">
                        <li><a href="#"><i class="fa fa-search"> <BsSearch /></i></a></li>
                        <li><a href="#"><i class="fa fa-heart"></i><BsFillSuitHeartFill /></a></li>
                        <li><a href="#"><i class="fa fa-random"></i><FcShare /></a></li>
                    </ul>
                    <a href="" class="add-to-cart">Add to Cart</a>
                </div>
                <div class="product-content ">
                    <h3 class="title"><a href="#">{name}</a></h3>
                    <div class="price">${price} <span>${nPrice}</span></div>
                </div>
            </div>

        
   
    </div>
    );
};

export default ProductDetail;