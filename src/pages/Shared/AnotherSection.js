import React from 'react';
import './AnotherSection.css'
import ServeAccoridin from './ServeAccoridin';
import { BsCheckCircleFill } from "react-icons/bs";
import serve from '../../images/serve.jpg'
const AnotherSection = () => {
    return (
        <div>
            <div>
                <div className='row another_marge'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h1 className=' another'>Get Ready to get tasty dishes</h1>
                        <p className='mt-2 fw-light'>Create a better workplace, powered by food. Here are just some of the perks of foodpanda for business.</p>
                        <ul>
                            <li className='list'><BsCheckCircleFill/><span className='para ms-3'>Improve employee satisfaction and retention</span></li>
                            <li className='list'><BsCheckCircleFill/><span className='para ms-3'>Encourage cohesion and cooperation</span></li>
                            <li className='list'><BsCheckCircleFill/><span className='para ms-3'>Increase team productivity and morale</span></li>
                            <li className='list'><BsCheckCircleFill/><span className='para ms-3'>Access to exclusive corporate menus and discounts</span></li>
                        </ul>
                        <button className='rounded p-2 mt-3  text-light fw-2 findout_bn'>Find Out More</button>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 ' >

                        <img className='img-fluid' src={serve} alt="" />
                    </div>
                </div>
            </div>
            <div className='row another_marge'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <img className='img-fluid' src='https://media.istockphoto.com/photos/group-of-friends-eating-burger-on-mountain-top-picture-id906360074?k=20&m=906360074&s=612x612&w=0&h=0Mi5q4jdpNROJhzTgrTTF1AuzFfmi35PjVGX_BTcwwI=' alt="" />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 ' >
                    <h1 className=' another'>Benefits that go beyond tasty dishes</h1>
                    <p className='mt-2 fw-light'>Create a better workplace, powered by food. Here are just some of the perks of foodpanda for business.</p>
                    <ul>
                        <li className='list'><BsCheckCircleFill/><span className='para ms-3'>Improve employee satisfaction and retention</span></li>
                        <li className='list'><BsCheckCircleFill/><span className='para ms-3'>Encourage cohesion and cooperation</span></li>
                        <li className='list'><BsCheckCircleFill/><span className='para ms-3'>Increase team productivity and morale</span></li>
                        <li className='list'><BsCheckCircleFill/><span className='para ms-3'>Access to exclusive corporate menus and discounts</span></li>
                    </ul>
                    <button className='rounded p-2 mt-3  text-light fw-2 findout_bn'>Find Out More</button>
                </div>
            </div>
            <div className='row another_marge'>
                <div className='col-lg-6 col-md-6 col-sm-12 mt-[-13px]'>
                    <h1 className=' another'>Frequently asked questions</h1>
                    <p className='fs-6'>Got questions? Great, here’s what you need to know before we get started.</p>
                    <ServeAccoridin />
                    <button className='rounded p-2 mt-3  text-light fw-2 findout_bn'>Find Out More</button>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 ' >

                    <img className='img-fluid' src='https://media.istockphoto.com/photos/portrait-of-a-happy-delivery-man-in-a-restaurant-picture-id1256179830?k=20&m=1256179830&s=612x612&w=0&h=nlmcGxRZZrofPl723xEqKDp4e8pNS3V6bEuRDu9x67k=' alt="" />
                </div>
            </div>
        </div>
    );
};

export default AnotherSection;



{/*  */}