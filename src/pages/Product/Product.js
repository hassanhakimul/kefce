import React from 'react';
import './Prodcut.css'
import single_buger from '../../images/single_burger.jpg'
import buger from '../../images/double.jpg'
import { BsSearch } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FcShare } from "react-icons/fc";
const Product = () => {
    return (
      <div className=' mt-5'>
        <h1 className='d-flex align-items-center justify-content-center banner_font'>Get Your <span className='hder ms-3'> Favourite's</span></h1>
          <div class="row mt-5">
    <div class="col-md-4 col-sm-6 g-5">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img src='https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
                </a>
                <span class="product-discount-label">-23%</span>
                <ul class="product-links">
                    <li><a href="#"><i class="fa fa-search"> <BsSearch/></i></a></li>
                    <li><a href="#"><i class="fa fa-heart"></i><BsFillSuitHeartFill/></a></li>
                    <li><a href="#"><i class="fa fa-random"></i><FcShare/></a></li>
                </ul>
                <a href="" class="add-to-cart">Add to Cart</a>
            </div>
            <div class="product-content ">
                <h3 class="title"><a href="#">Chicken Burger</a></h3>
                <div class="price">$53.55 <span>$68.88</span></div>
            </div>
        </div>
    </div>
    <div class="col-md-4 col-sm-6 g-5">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'/>
                </a>
                <span class="product-discount-label">-29%</span>
                <ul class="product-links">
                    <li><a href="#"><i class="fa fa-search"> <BsSearch/></i></a></li>
                    <li><a href="#"><i class="fa fa-heart"></i><BsFillSuitHeartFill/></a></li>
                    <li><a href="#"><i class="fa fa-random"></i><FcShare/></a></li>
                </ul>
                <a href="" class="add-to-cart">Add to Cart</a>
            </div>
            <div class="product-content">
                <h3 class="title"><a href="#">Chicken Burger</a></h3>
                <div class="price">$53.55 <span>$68.88</span></div>
            </div>
        </div>
    </div>
    <div class="col-md-4 col-sm-6 g-5">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img src='https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
                </a>
                <span class="product-discount-label">-20%</span>
                <ul class="product-links">
                    <li><a href="#"><i class="fa fa-search"> <BsSearch/></i></a></li>
                    <li><a href="#"><i class="fa fa-heart"></i><BsFillSuitHeartFill/></a></li>
                    <li><a href="#"><i class="fa fa-random"></i><FcShare/></a></li>
                </ul>
                <a href="" class="add-to-cart">Add to Cart</a>
            </div>
            <div class="product-content">
                <h3 class="title"><a href="#">Chicken Burger</a></h3>
                <div class="price">$53.55 <span>$68.88</span></div>
            </div>
        </div>
    </div>
    <div class="col-md-4 col-sm-6 g-5">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
                </a>
                <span class="product-discount-label">-23%</span>
                <ul class="product-links">
                    <li><a href="#"><i class="fa fa-search"> <BsSearch/></i></a></li>
                    <li><a href="#"><i class="fa fa-heart"></i><BsFillSuitHeartFill/></a></li>
                    <li><a href="#"><i class="fa fa-random"></i><FcShare/></a></li>
                </ul>
                <a href="" class="add-to-cart">Add to Cart</a>
            </div>
            <div class="product-content">
                <h3 class="title"><a href="#">Chicken Burger</a></h3>
                <div class="price">$53.55 <span>$68.88</span></div>
            </div>
        </div>
    </div>
    <div class="col-md-4 col-sm-6 g-5">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img src={buger}/>
                </a>
                <ul class="product-links">
                <li><a href="#"><i class="fa fa-search"> <BsSearch/></i></a></li>
                    <li><a href="#"><i class="fa fa-heart"></i><BsFillSuitHeartFill/></a></li>
                    <li><a href="#"><i class="fa fa-random"></i><FcShare/></a></li>
                </ul>
                <a href="" class="add-to-cart">Add to Cart</a>
            </div>
            <div class="product-content">
                <h3 class="title"><a href="#">Double Burger</a></h3>
                <div class="price">$75.55</div>
            </div>
        </div>
    </div>
</div>
      </div>
    );
};

export default Product;