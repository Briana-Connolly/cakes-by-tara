import React from 'react';
import  './ServicesScreen.css';

import MenuCake from '../../imgs/menu-cake.jpg';
import MenuCakePops from '../../imgs/menu-cake-pops.jpg';
import MenuCCTreats from '../../imgs/menu-cc-treats.jpg';
import MenuCupcakes from '../../imgs/menu-cupcakes.jpg';
import MenuDessertTable from '../../imgs/menu-dessert-table.jpg';
import MenuMacarons from '../../imgs/menu-macarons.jpg';


function ServicesScreen() {
  return (
    <>
        {/* <div className="services-heading">
          <a href="">Menu</a>
          <a href="">Cake Flavors</a>
          <a href="">Custom Cake Pricing</a>
        </div> */}

        <div className="pricing-container">
          <div className="services-title">Pricing</div>
          <div className="price title"> Cakes </div>
          <br></br>
          <img className="menu-img" src={MenuCake} alt="cake"></img>
          <p>Small Buttercream Cake: Starting at $80</p>
          <p>Large Buttercream Cake: Starting at $120</p>
          <p>Small Fondant Cake: Starting at $100</p>
          <p>Large Fondant Cake: Starting at $180</p>
          <div className="price title"> Dessert Table </div>
          <br></br>
          <img className="menu-img" src={MenuDessertTable} alt="dessert table"></img>
          <p>Dessert Tables must include a cake order. Prices start at $150.</p>
          <div className="price title"> Cupcakes </div>
          <br></br>
          <img className="menu-img" src={MenuCupcakes} alt="cupcakes"></img>
          <p>Sold by the Dozen</p>
          <p>One Dozen Cupcakes: $25</p>
          <div className="price title"> Cake Pops </div>
          <br></br>
          <img className="menu-img" src={MenuCakePops} alt="cake pops"></img>
          <p>Sold by the Dozen</p>
          <p>One Dozen Cake Pops: $20</p>
          <div className="price title"> Chocolate Covered Treats </div>
          <br></br>
          <img className="menu-img" src={MenuCCTreats} alt="chocolate cakes"></img>
          <p>Sold by the Dozen</p>
          <p>One Dozen Oreos: $12</p>
          <p>One Dozen Marshmellow Sticks: $15</p>
          <p>One Dozen Strawberrys: $12</p>
          <div className="price title"> Macarons </div>
          <br></br>
          <img className="menu-img" src={MenuMacarons} alt="macarons"></img>
          <p>Sold by the Dozen</p>
          <p>One Dozen Macarons: $12</p>
        </div>
        <div className="flavors-container">
        <div className="services-title">Flavors</div>
            <div className="flavors-list">
                <div className="flavors-item">
                    <p className="flavor-title">Cake Flavors</p>
                      <p>Vanilla</p>
                      <p>Chocolate</p>
                      <p>Funfetti</p>
                      <p>Red Velvet</p>
                      <p>Lemon</p>
                      <p>Chocolate Chip</p>
                      <p>Carrot</p>
                      <p>Marble</p>
                      <p>Strawberry</p>
                </div>
                <div className="flavors-item">
                  <p className="flavor-title">Fillings</p>
                  <p>Vanilla Buttercream</p>
                  <p>Chocolate Buttercream</p>
                  <p>Salted Caramel</p>
                  <p>Chocolate Fudge</p>
                  <p>Lemon Curd</p>
                  <p>Raspberry Jam</p>
                </div>
                <div className="flavors-item">
                  <p className="flavor-title">Icings</p>
                  <p>Vanilla</p>
                  <p>Chocolate</p>
                  <p>Cookies N' Cream</p>
                  <p>Cookie Dough</p>
                  <p>Coconut</p>
                  <p>Strawberry</p>
                  <p>Lemon</p>
                  <p>Cream Cheese</p>
                  <p>Peanut Butter</p>
                </div>
            </div>
        </div>
        
    </>
  );
}

export default ServicesScreen;