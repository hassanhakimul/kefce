import React from 'react';
import Product from '../Product/Product';
import AnotherSection from '../Shared/AnotherSection';
import SecondSection from '../Shared/SecondSection'
import GetApp from '../Shared/GetApp';
import Value from '../Shared/Value';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Product/>
            <Value/>
            <AnotherSection/>
            <GetApp/>
            <SecondSection/>
        </div>
    );
};

export default Home;