import React, { useState } from 'react';
import "./slider.css" ;



const ImageSlider = ({images}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider">
 <div class="carousel">
        <div class="slider">
          <div class="slidecont">
            <h1 class="movietitle">EXPERTISE YOU CAN TRUST</h1>
            <p class="movdes">
              
            </p>
          </div>
          <img className='slideback' src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        </div>
      </div>
      <div className="nav-buttons">
        <button className='button' id='leftb' onClick={prevImage}></button>
        <button className='button' id='rightb' onClick={nextImage}>➜</button>
      </div>
    </div>
  );
};

export default ImageSlider;

