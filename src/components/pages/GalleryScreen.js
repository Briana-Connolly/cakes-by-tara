import React from 'react';
import  './GalleryScreen.css';

import GalleryCake1 from '../../imgs/gallery-cake1.jpg';
import GalleryCake2 from '../../imgs/gallery-cake2.jpg';
import GalleryCake3 from '../../imgs/gallery-cake3.jpg';
import GalleryCakePops1 from '../../imgs/gallery-cakepops1.jpg';
import GalleryCakePops2 from '../../imgs/gallery-cakepops2.jpg';
import GalleryCupcakes1 from '../../imgs/gallery-cupcakes1.jpg';
import GalleryCupcakes2 from '../../imgs/gallery-cupcakes2.jpg';
import GalleryMacarons1 from '../../imgs/gallery-macarons1.jpg';
import GalleryMacarons2 from '../../imgs/gallery-macarons2.jpg';
import GalleryStrawberrys from '../../imgs/gallery-strawberrys.jpg';
import GalleryTable1 from '../../imgs/gallery-table1.jpg';
import GalleryTable2 from '../../imgs/gallery-table2.jpg';




function GalleryScreen() {
  return (
    <>
        <div className="gallery-container">
            <div className="gallery-title"> Gallery</div>
        <div className="gallery-imgs">
          <img src={GalleryCake1} alt="cake"></img>
          <img src={GalleryTable1} alt="dessert table"></img>
          <img src={GalleryStrawberrys} alt="strawberrys"></img>
          <img src={GalleryMacarons1} alt="macarons"></img>
          <img src={GalleryCakePops2} alt="cake pops"></img>
          <img src={GalleryCake2} alt="cake2"></img>
          <img src={GalleryCupcakes1} alt="cupcakes"></img>
          <img src={GalleryTable2} alt="dessert table"></img>
          <img src={GalleryMacarons2} alt="macarons"></img>
          <img src={GalleryCake3} alt="cake3"></img>
          <img src={GalleryCakePops1} alt="cake pops"></img>
          <img src={GalleryCupcakes2} alt="cupcakes"></img>
          </div>
        </div>
        
    </>
  );
}

export default GalleryScreen;