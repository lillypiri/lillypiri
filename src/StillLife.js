import React, { Component } from 'react';
import './App.css';

import Tulip from './assets/images/still_life/Tulip.JPG';
import KissKiss from './assets/images/still_life/KissKiss.JPG';

class StillLife extends Component {

    render() {
        let images = [Tulip, KissKiss]
        console.log(images);
      return (
        <div className="Images">
            <div> Still Life paintings. Acrylic on panel. </div><br/>
            {images.map(src => {
                return <img src={src} className="Images" alt="painting by Lilly Piri"/>
            })}
        </div>
      );
    }
  }
  
  export default StillLife;