import Slider  from './Slider/Slider';
import React from 'react';
import TopTitleBar from '../TopTitleBar/TopTitleBar';
import ProductTitle from './ProductTitle/ProductTitle';
import ListedProducts from './ListedProducts/ListedProducts';

const Home = () => {
    return(
<div>
    <TopTitleBar greet="Hey Awesome!" pagetitle ="Welcome Back..."/>

    <Slider/>
    <ProductTitle/>
    <ListedProducts/>
</div>
    );
}

export default Home;