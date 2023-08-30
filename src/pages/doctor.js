import React from 'react';
import DoctorList from '../components/DoctorList';
import "./Doctor.css";



const Doctor = () => {
  return (
   <div>
    <div className='text1'><hr></hr>Our Doctors</div>
    
    <DoctorList />
    <div className='listi'>
      <ul >
   <li> <a href='/doctor/'>1</a> </li>
   <li> <a href='/doctor/2'>2</a> </li>
   <li> <a href='/doctor/3'>3</a> </li>
    </ul>
    </div>
    </div>
  );
};

export default Doctor;
