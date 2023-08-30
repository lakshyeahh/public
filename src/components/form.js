import React from 'react';
import PropTypes from 'prop-types';
import  { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import emailjs from '@emailjs/browser';

const Form = ({ id, name, specialization} ) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ai74yj', 'template_2fnezgf', form.current, 'FXNT2k7prrywiIcSk')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  const sendEmailp = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ai74yj', 'template_eytnwop', form.current, 'FXNT2k7prrywiIcSk')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
 
  const [isSubmitted, setIsSubmitted] = useState(false);

  const successMessageRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault(); 
    setTimeout(() => {
      
      setIsSubmitted(true);
      scrollToSuccessMessage();
    }, 2000); 
  
  };

  const scrollToSuccessMessage = () => {
    if (successMessageRef.current) {
      successMessageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const combinedSubmit = (event) => {
    handleSubmit(event);
    sendEmail(event);
    sendEmailp(event);
  };




    return (
        <div>
  <div class="contact_us_22">
  <div class="responsive-container-block big-container">
    <div class="blueeBG">
    </div>
    <div class="responsive-container-block container">
      <form class="form-box" ref={form} onSubmit={combinedSubmit} >
        <div class="container-block form-wrapper">
          <p class="text-blk contactus-head">
           Appointment Form
          </p>
          <p class="text-blk contactus-subhead">
           Fill in Details
          </p>
          <div className='helowo'>
          <input className="form_doc"  value={name} name="doctor" />
          <input className="form_spec"  value={specialization} name="speco" /> 
          </div>
          <div class="responsive-container-block">
            
            <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6" id="i10mt">
              <p class="text-blk input-title">
                FIRST NAME
              </p>
              <input class="input" id="ijowk" name="FirstName" placeholder="Please enter first name..." />
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p class="text-blk input-title">
                LAST NAME
              </p>
              <input class="input" id="indfi" name="Last_Name" placeholder="Please enter last name..."/>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p class="text-blk input-title">
                EMAIL
              </p>
              <input class="input" id="ipmgh" name="Email" placeholder="Please enter email..."/>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p class="text-blk input-title">
                PHONE NUMBER
              </p>
              <input class="input" id="imgis" name="PhoneNumber" placeholder="Please enter phone number..."/>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <label class="text-blk input-title" for="birthday">DATE</label>
<input type="date" id="birthday" class="input" name="birthday" ></input>
</div>
<div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
<label class="text-blk input-title"  for="appt">SELECT TIME</label>
<input class="input" type="time" id="time" name="time" />
</div>
<div className='address'><h2 id='adress'> Adress Details</h2>
<div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p class="text-blk input-title">
                AREA
              </p>
              <input class="input" id="indfi" name="Area" placeholder="Please enter area..."/>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p class="text-blk input-title">
                CITY
              </p>
              <input class="input" id="indfi" name="City" placeholder="Please enter last city..."/>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p class="text-blk input-title">
                STATE
              </p>
              <input class="input" id="indfi" name="State" placeholder="Please enter last state..."/>
            </div>
            <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
              <p class="text-blk input-title">
                POST CODE
              </p>
              <input class="input" id="indfi" name="Post Code" placeholder="Please enter post code..."/>
            </div>
            <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i">
              <p class="text-blk input-title">
                DETAILED SYMTOMS
              </p>
              <textarea class="textinput" id="i5vyy" name="symp"placeholder="Please enter query..."></textarea>
            </div>
          </div>
          </div>
         
          <button class="submit-btn">BOOK</button>
         
        </div>
        
      </form>
      {isSubmitted && <div ref={successMessageRef} class="cardf"><div ><img className='cardim' src="https://img.freepik.com/free-icon/check_318-642305.jpg?t=st=1692421017~exp=1692421617~hmac=d7c257e28bda61d18b182bd17e06eec6bf0f7bb6985b1595faaf099ebd01f520" alt="" /></div><div>Your Appointment Has Been Booked Successfully</div><br /><div>A Confirmation Mail Has Been Send To Your Account!</div>
        </div>}
    </div>
  </div>
</div>

  </div>
    );
};



export default Form;