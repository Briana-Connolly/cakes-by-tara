import React, { Component } from 'react';
import './Footer.css';

import Heart from '../imgs/heart-icon.png'


export default class Footer extends Component {
  render() {
      return (
        <>
            <div className="footer-container">
                Made with <img src={Heart} alt="heart icon"></img> in Buffalo, NY 
            </div>
        </>
      );
  }
}