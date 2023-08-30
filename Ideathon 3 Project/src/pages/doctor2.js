import React from 'react';
import DoctorList2 from '../components/DoctorList2';
import "./Doctor.css";



const Doctor2 = () => {
  return (
   <div>
    <div className='text1'><hr></hr>Find a Doctor</div>
    
    <DoctorList2/>
    <div className='listi'>
    <ul>
   <li> <a href='/doctor/'>1</a> </li>
   <li> <a href='/doctor/2'>2</a> </li>
   <li> <a href='/doctor/3'>3</a> </li>
    </ul>
    </div>
    </div>
  );
};

export default Doctor2;
