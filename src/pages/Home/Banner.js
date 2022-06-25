import React from 'react';
import './Banner.css'
import { MdDirectionsBike } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
import background from '../../images/bg.png'
import burger from '../../images/bg-up.png'
import { Link, useNavigate } from "react-router-dom";
const Banner = () => {
    const navigate=useNavigate();
    return (
        <div>
              <div class="container mt-5">
            <div class="row ">
                <div class="col col-lg-7">
                    <button class="btn rounded-pill hder " type="button"><span >Bike Delivery</span><button class="ms-2 rounded-circle"><MdDirectionsBike /></button></button>
                    <h1 className='text-warp banner_font mt-4'> The Fastest<br /> Delivery in <br />
                        <span className='banner-font'>your City</span></h1>
                    <h6 className='mt-4 text-warp'> We’re hungry for the best things in life:<br />  bringing the best food and redefining the shopping experience to our customers.</h6>
                    <div className='d-flex align-items-center mt-5'>
                        <a type="button" class="btn btn-default btn-lg border border-white " href='#favourite'>Order Now<HiArrowRight /></a>
                        <button className='mx-4 rounded-circle border border-white play shadow p-2 bg-body rounded'><BsFillPlayFill /></button>
                        <Link type="button" class=" btn-lg  text-dark order" to='/orderProcess'>Order Process</Link>
                    </div>
                </div>
                <div class="col  col-lg-5" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', }}>
              <img src={burger} alt="" />
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5922C" fill-opacity="1" d="M0,32L48,26.7C96,21,192,11,288,16C384,21,480,43,576,64C672,85,768,107,864,133.3C960,160,1056,192,1152,181.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      
    );
};

export default Banner;