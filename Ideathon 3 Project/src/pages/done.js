import React from 'react';
import PropTypes from 'prop-types';
import "./done.css";

const Done = () => {
    return (
        <div id='card' class="animated fadeIn">
  <div id='upper-side'>
   
      
      
      <h3 id='status'>
      Success
    </h3>
  </div>
  <div id='lower-side'>
    <p id='message'>
      Congratulations, your account has been successfully created.
    </p>
    <a href="#" id="contBtn">Continue</a>
  </div>
</div>
    );
};



export default Done;