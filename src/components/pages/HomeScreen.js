import React from 'react';
import { Link } from 'react-router-dom';
import  './HomeScreen.css';

import HomeCake from '../../imgs/home-cake.jpg';
import HomeCupcake from '../../imgs/home-cupcake.jpg';


function HomeScreen() {
  return (
    <>
        <div className="container">

        <div className="info">
          <div className="title">Custom Cakes and Baked Goods for any Occasion </div>
          <p className="description">Choose between a variety of different flavors, fillings and icings to make your day extra sweet </p>
          <br></br>
          <br></br>
          <div className='services-btn'>
            <Link to='/Services' >
              Learn More
            </Link>
          </div>
        </div>
            <img className="cake" src={HomeCake} alt="pic of cake"></img>
            <img className="cupcake" src={HomeCupcake} alt="pic of cupcakes"></img>
        </div>
    </>
  );
}

export default HomeScreen;
