import React from 'react';
import './Footer.css'
import { FaTwitter, FaFacebook, FaInstagram, FaLocationArrow } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdLocalPhone } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import img from '../../images/serve.jpg'

const Footer = () => {
    return (
        <div>
            <div class="container">
                <div class="row border-bottom mb-5 pb-4 align-items-center">
                    <div class="col-md-6 mb-md-0 mb-4">
                        <h2 class="logo"><a href="#">KFC <span className='hder'>Feel the Test</span></a></h2>
                    </div>
                    <div class="col-md-6 mb-md-0 mb-4 text-md-right">
                        <div class="ftco-footer-social d-flex  p-0 ">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Twitter" data-original-title="Twitter"><span class="ms-3 fs-2"><FaTwitter /></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Facebook" data-original-title="Facebook"><span class="ms-3 fs-2"><FaFacebook /></span></a>
                            <a href="#" data-toggle="tooltip" data-placement="top" title="Instagram" data-original-title="Instagram"><span class="ms-3 fs-2"><FaInstagram /></span></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
                        <h2 class="footer-heading">Colorlib</h2>
                        <div class="block-23 mb-3">
                            <ul>
                                <li className='list'><span class="#"> <GoLocation /></span><span class="text ms-4">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                <li className='list'><a href="#"><span><MdLocalPhone /></span><span class="text ms-4">+2 392 3929 210</span></a></li>
                                <li className='list'><a href="#"><span ><FaLocationArrow /></span><span class="text ms-4">info@yourdomain.com</span></a></li>
                            </ul>
                        </div>
                        <form class="d-flex">
                            <input type="text" class="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="basic-addon2"/>
                                <span class="input-group-text hder" id="basic-addon2"><GrSend/></span>
                        </form>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
                        <h2 class="footer-heading">Latest News</h2>
                        <div class="block-21 mb-4 d-flex">
                            <a class="img mr-4 rounded" style={{ backgroundImage: `url(${img})`}} > </a>
                            <div class="text">
                                <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                                <div class="meta">
                                    <div><a href="#"><span class="icon-calendar"></span> Oct. 16, 2019</a></div>
                                    <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="block-21 mb-4 d-flex">
                            <a class="img mr-4 rounded" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1655821535288-0033302ed8fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60")` }}></a>
                            <div class="text">
                                <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                                <div class="meta">
                                    <div><a href="#"><span class="icon-calendar"></span> Oct. 16, 2019</a></div>
                                    <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
                        <h2 class="footer-heading">Best Sellers</h2>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="featured">
                                    <a href="#" class="img rounded mb-3" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1655821535288-0033302ed8fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60")` }}></a>
                                    <div class="text">
                                        <h3><a href="#">Grilled Beef with potatoes</a></h3>
                                        <p class="rate">
                                            <a href="#"><span class="ion-ios-star"></span></a>
                                            <a href="#"><span class="ion-ios-star"></span></a>
                                            <a href="#"><span class="ion-ios-star"></span></a>
                                            <a href="#"><span class="ion-ios-star"></span></a>
                                            <a href="#"><span class="ion-ios-star"></span></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
                        <h2 class="footer-heading">Instagram</h2>
                        <div class="block-24">
                            <div class="row no-gutters">
                                <div class="col-4 col-md-4">
                                    <a class="img" style={{
                                        backgroundImage: `url("https://via.placeholder.com/500")`
                                    }}></a>
                                </div>
                                <div class="col-4 col-md-4">
                                    <a href="#" class="img" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1655821535288-0033302ed8fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60")` }}></a>
                                </div>
                                <div class="col-4 col-md-4">
                                    <a href="#" class="img" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1655821535288-0033302ed8fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60")` }}></a>
                                </div>
                                <div class="col-4 col-md-4">
                                    <a href="#" class="img" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1655821535288-0033302ed8fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60")` }}></a>
                                </div>
                                <div class="col-4 col-md-4">
                                    <a href="#" class="img" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1655821535288-0033302ed8fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60")` }}></a>
                                </div>
                                <div class="col-4 col-md-4">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5 pt-4 border-top">
                    <div class="col-md-6 col-lg-8">
                        <p class="copyright">
                            Copyright ©<script>document.write(new Date().getFullYear());</script>2022 All rights reserved.</p>
                    </div>
                    <div class="col-md-6 col-lg-4 text-md-right">
                        <p class="copyright">This template is made with <i class="ion-ios-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
                        </p>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Footer;