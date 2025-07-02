import { assets } from '../Assets/images';
import './Technology.css';
import React from 'react';

const Technology = () => {
  return (
    <div className='technology_page' id='tach'>

      <div className="technology_container" style={{ backgroundImage: `url(${assets.backgroundImage})` }}>        
        <h1>Visual Studio Code</h1>
        <p>The visual studio code is one of my primary code editor due to its convinient and ease of use 
        .It has so many libraries and extension and they are very convinient to use and make my coding even more flexible.
        </p>
      </div>


    </div>
  )
}

export default Technology