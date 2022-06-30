import React from 'react';
import { BsFillSuitHeartFill, BsSearch } from 'react-icons/bs';
import { FcShare } from 'react-icons/fc';
import './FeturedProduct.css'
const FeturedProdcut = () => {
    return (
        <div className='h-100vh'>
            <h1 className='fetured'>FEATURED PRODUCTS</h1>
            <div class="row " style={{ marginLeft: '200px',marginBottom:'120px' }}>
                <div class="col-md-4 col-sm-6 g-5">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="#" class="image">
                                <img src='https://st.depositphotos.com/2444995/3919/i/450/depositphotos_39190691-stock-photo-closeup-of-home-made-burgers.jpg' />
                            </a>
                            <span class="product-discount-label">-49 $</span>
                            <ul class="product-links">
                                <li><a href="#"><i class="fa fa-search"> <BsSearch /></i></a></li>
                                <li><a href="#"><i class="fa fa-heart"></i><BsFillSuitHeartFill /></a></li>
                                <li><a href="#"><i class="fa fa-random"></i><FcShare /></a></li>
                            </ul>
                            <a  href="" class="add-to-cart">Add to Cart</a>
                        </div>
                        <div class="product-content ">
                            <h3 class="title"><a href="#"> Burger & Fries</a></h3>
                            <div class="price">$73.55 <span>$79</span></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 g-5">
                    <div class="product-grid">
                        <div class="product-image">
                            <a href="#" class="image">
                                <img src='https://st2.depositphotos.com/1020618/8867/i/450/depositphotos_88671260-stock-photo-close-up-of-home-made.jpg' />
                            </a>
                            <span class="product-discount-label">-35 $</span>
                            <ul class="product-links">
                                <li><a href="#"><i class="fa fa-search"> <BsSearch /></i></a></li>
                                <li><a href="#"><i class="fa fa-heart"></i><BsFillSuitHeartFill /></a></li>
                                <li><a href="#"><i class="fa fa-random"></i><FcShare /></a></li>
                            </ul>
                            <a href="" class="add-to-cart">Add to Cart</a>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="#">Chicken Burger</a></h3>
                            <div class="price">$60.55 <span>$69.88</span></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeturedProdcut;