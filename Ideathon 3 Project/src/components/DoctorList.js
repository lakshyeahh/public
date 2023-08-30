import React from "react";
import doctors from "./../../src/assets/data/doctors";
import DoctorCard from "./DoctorCard";
import "./doctorlist.css";

const DoctorList = () => {
    return (
        <div className="list">
           {doctors.map(doctor => (<DoctorCard  key={doctor.id} doctor={doctor}/>))}
        </div>
    );
};



export default DoctorList;