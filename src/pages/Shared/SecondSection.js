import React from 'react';
import './SecondSection.css'
const SecondSection = () => {
    return (
           <section class="subscription bg-white container_top">
  <div class="container ">
    <div class="row">
      <div class="col-lg-12">
        <div class="subscription-wrapper">
          <div class="d-flex subscription-content justify-content-between align-items-center flex-column flex-md-row text-center text-md-left">
            <h3 class="flex-fill">Subscribe <br/> to our KFC</h3>
            <form action="#" class="row flex-fill">
              <div class="col-lg-7 my-md-2 my-2">
                <input type="email" class="form-control px-4 border-0 w-100 text-center text-md-left" id="email" placeholder="Your Email" name="email"/>
              </div>
              <div class="col-lg-5 my-md-2 my-2">
                <button type="submit" class="submit-btn btn-primary btn-lg border-0 w-100">Subscribe Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
    );
};

export default SecondSection;