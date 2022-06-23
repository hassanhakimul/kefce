import React from 'react';
import './Value.css'
const Value = () => {
    return (
        <div>
            <h1 className='d-flex align-items-center justify-content-center mt-5 value_font'>KFC for your teams</h1>
            <h5 className='d-flex align-items-center justify-content-center mt-5 '>Drive your business forward by keeping your employees happy and fed – within budget. We've got it all <br />covered at the best prices.</h5>
            <div>
                <div class="container h-100">
                    <div class="row align-middle">
                        <div class="col-md-6 col-lg-4 column">
                            <div class="card gr-1">
                                <div class="txt">
                                    <h1>Best  <br />
                                        value</h1>
                                    <p>Slash 10% off the price of those big orders with our exclusive discount for corporate customers.</p>
                                </div>
                                <a href="#">more</a>
                                <div class="ico-card">
                                    <i class="fa fa-rebel"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 column">
                            <div class="card gr-2">
                                <div class="txt">
                                    <h1>Dedicated account <br />
                                        manager</h1>
                                    <p>Get the personal touch. Throw your dedicated AM any tech related challenges – or hit them up for hot restaurant tips.</p>
                                </div>
                                <a href="#">more</a>
                                <div class="ico-card">
                                    <i class="fa fa-codepen"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 column">
                            <div class="card gr-3">
                                <div class="txt">
                                    <h1>1 place for complete <br />control</h1>
                                    <p>From individual allowances to e-gift vouchers to catering and ordering pantry supplies, it’s all here.</p>
                                </div>
                                <a href="#">more</a>
                                <div class="ico-card">
                                    <i class="fa fa-empire"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Value;