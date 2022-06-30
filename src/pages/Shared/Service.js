import React from 'react';
import './Service.css'
const Service = () => {
    return (
        <div>
              <div class="header">
    <h1 className='fetured'>Reliable, efficient delivery</h1>
  </div>
  <div class="row1-container">
    <div class="box box-down cyan">
      <h2>Trusty Delivery</h2>
      <p>We asure to fulfil your all delivery</p>
      <img className='img-fluid' src="https://freesvg.org/img/publicdomainq-deliver.png" alt=""/>
    </div>

    <div class="box red">
      <h2>Delivery Ensure</h2>
      <p>Scans our talent network to ensure the fastest delivery</p>
      <img src="https://freesvg.org/storage/img/thumb/secretlondon_Iso_Truck_3.png" alt=""/>
    </div>

    <div class="box box-down blue">
      <h2>We Care</h2>
      <p>Uses data from past projects to provide better delivery estimates</p>
      <img src="https://freesvg.org/storage/img/thumb/Handshake-05-Man-Wonam-Jewel.png" alt=""/>
    </div>
  </div>
  <div class="row2-container">
    <div class="box orange">
      <h2>Quality</h2>
      <p>Regularly evaluates our talent to ensure quality</p>
      <img src="https://freesvg.org/storage/img/thumb/eco_label_brown.png" alt=""/>
    </div>
  </div>
        </div>
    );
};

export default Service;