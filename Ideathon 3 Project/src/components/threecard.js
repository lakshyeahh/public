import React from 'react';
import image4 from './image21.png';
import image5 from './image22.png';
import image6 from './image23.jpg';

const Card2 = () => {
  return (
    <div
      style={{
        width: '500px',
        height: '100px',
        backgroundColor: '#e0f2ff',
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        marginBottom: '20px',
        borderRadius: '5px',
      }}
    >
      <img
        src={image4} // Replace with the URL of your small image
        alt="Small Image"
        style={{ width: '80px', height: '80px', marginRight: '10px' }}
      />
      <div>
        <h3>Card2 Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ligula ac augue
          aliquam, at cursus purus pellentesque.
        </p>
      </div>
    </div>
  );
};

const ThreeCards2 = () => {
  return (
    <div>
      <h1>Three Cards2 Example</h1>
      <Card2 />
      <Card2 />
      <Card2 />
    </div>
  );
};

export default ThreeCards2;
