import React from 'react';
import starIcon from "../assets/images/Star.png";
import doctors from '../assets/data/doctors';

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


const DoctorCard = ({doctor}) => {
   
    const {id, name, avgRating, totalRating, photo, specialization, totalPatients, hospital } = doctor
   
    return (
        <div className='doctorcard'>
            <div className="docpic">
                <img className="docpix" src={photo}  alt='#' />
            </div>
            <hr />
            <h2 className='name'>{name}</h2>

            <div className='infod'>
                <span className='spec'>{specialization}</span>

                <div>
                    <span><img className="star"src={starIcon} alt="#"/>{avgRating}</span>
                    <span>{totalRating}</span>
                </div>
            </div>

            <div>
            <h3 className='patients'>+{totalPatients} Patients</h3>
                <div>
                   
                   
      <div className='getinfo'>
       
        
              <Link to={`/item/${id}`} className="linkd">GET INFO</Link>
         
       
        
      </div>

                </div>
            </div>
        </div>
    );
};




export default DoctorCard;