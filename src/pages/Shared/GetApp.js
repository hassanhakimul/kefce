import React from 'react';
import './GetApp.css'
const GetApp = () => {
    return (
       
            <div className='row bg_app'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
        <h3 className='text-light mt-5'>Download the food and groceries you love</h3>
        <p className='text-light mt-5'>It's all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.</p>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 bg_img'>
                    <img src='https://images.deliveryhero.io/image/foodpanda/home-foodpanda-apps.png?width=1400&height=1113' className='img-fluid' alt="" />
                </div>
            </div>
      
    );
};

export default GetApp;