import React from 'react';
import  './AboutScreen.css';

import WomanBaking from '../../imgs/woman-baking.jpg';
import WomanCake from '../../imgs/woman-cake.jpg';

function AboutScreen() {
  return (
    <>
        <div className="about-container">
            <div className="about-imgs">
                <img src={WomanCake} alt="woman with a cake" className="woman-cake"></img>
                <img src={WomanBaking} alt="woman baking" className="woman-baking"></img>
            </div>
            <div className="about-text">
                <div className="about-title">About Me</div>
                <div className="about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Urna nunc id cursus metus aliquam. 
                Blandit volutpat maecenas volutpat blandit aliquam etiam. Lectus proin nibh nisl condimentum. Sit amet mattis vulputate enim nulla. 
                Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Egestas sed tempus urna et pharetra pharetra massa. Ultrices tincidunt arcu 
                non sodales neque sodales ut. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. 
                Sed felis eget velit aliquet sagittis id. Sed blandit libero volutpat sed cras ornare arcu.</div>
            </div>
        </div>
    </>
  );
}

export default AboutScreen;