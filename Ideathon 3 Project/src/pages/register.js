import React from 'react'; 
import "./register.css";


const Register = () => {
  return (
  
    <div>
   <div class='bold-line'></div>
<div class='container'>
    
  <div class='window'>
    <div class='overlayi'></div>
    <div class='content'>
      <div class='welcome'>Register</div>
      <div class='subtitle'></div>
      <div class='input-fields'>
        <input type='text' placeholder='Username' class='input-line full-width'></input>
        <input type='email' placeholder='Email' class='input-line full-width'></input>
        <input type='password' placeholder='Password' class='input-line full-width'></input>

      </div>
      <div class='spacing'><span class='highlight'></span></div>
      <div><button class='ghost-round full-width'>Create Account</button></div>
    </div>
  </div>
</div>
<img className='imea' src='https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='#' />
  </div>

  );
};

export default Register;    
  

