import React from "react";

import DoctorCard from "./DoctorCard";
import "./doctorlist.css";
import doctorImg01 from "../assets/images/doctor-img01.png";
import doctorImg02 from "../assets/images/doctor-img02.png";
import doctorImg03 from "../assets/images/doctor-img03.png";
import doctorImg04 from "../assets/images/doctor-img04.png";
import doctorImg05 from "../assets/images/doctor-img05.png";
import doctorImg06 from "../assets/images/doctor-img06.jpg";
import doctorImg07 from "../assets/images/doctor-img07.png";
import doctorImg08 from "../assets/images/doctor-img08.png";
import doctorImg09 from "../assets/images/doctor-img09.jpg";
import doctorImg10 from "../assets/images/doctor-img10.jpeg";
import doctorImg11 from "../assets/images/doctor-img11.png";
import doctorImg12 from "../assets/images/doctor-img12.png";
import doctorImg13 from "../assets/images/doctor-img13.jpg";
import doctorImg14 from "../assets/images/doctor-img14.png";
import doctorImg15 from "../assets/images/doctor-img15.png";
import doctorImg16 from "../assets/images/doctor-img16.png";
import doctorImg17 from "../assets/images/doctor-img17.png";
import doctorImg18 from "../assets/images/doctor-img18.png";
import doctorImg19 from "../assets/images/doctor-img19.png";
import doctorImg20 from "../assets/images/doctor-img20.jpg";
import doctorImg21 from "../assets/images/doctor-img21.png";
import doctorImg22 from "../assets/images/doctor-img22.png";


const doctors2 = [
    {
      id: "01",
      name: "Dr. Alfaz Ahmed",
      specialization: "Medicine",
      avgRating: 4.8,
      totalRating: 272,
      photo: doctorImg01,
      totalPatients: 1500,
      hospital: "MBBS MD DM",
    },
    
    {
      id: "18",
      name: "Dr. Farid Uddin",
      specialization: "Dermatologist",
      avgRating: 4.8,
      totalRating: 272,
      photo: doctorImg03,
      totalPatients: 1500,
      hospital: "Mount Adora Hospital, Sylhet.",
    },
    {
        id: "19",
        name: "Dr. Saleh Mahmud",
        specialization: "Neurologist",
        avgRating: 4.8,
        totalRating: 272,
        photo: doctorImg02,
        totalPatients: 1500,
        hospital: "MBBS, MD (Med), DNB (Nephrology), FICP, MNAMS, FIACM, FIMSA, FGSI, Transplant Fellowship in Kidney Transplant",
      },

    {
      id: "16",
      name: "DR. R RANGA RAO",
      specialization: "Oncology",
      avgRating: 4.8,
      totalRating: 272,
      photo: doctorImg05,
      totalPatients: 1500,
      hospital: "MBBS, MD (Internal Medicine)",
    },
    {
      id: "15",
      name: "DR. V S MEHTA",
      specialization: "Surgeon",
      avgRating: 4.8,
      totalRating: 272,
      photo: doctorImg06,
      totalPatients: 1500,
      hospital: "MBBS MD",
    },
    {
        id: "17",
        name: "DR. A SEN GUPTA",
        specialization: "Pediatrics",
        avgRating: 4.7,
        totalRating: 279,
        photo: doctorImg04,
        totalPatients: 1500,
        hospital: "MBBS, DCH, Senior Research Fellowship (ICMR)",
      },
    {
      id: "14",
      name: "DR.(MAJ.) MANISH MANNAN",
      specialization: "Pediatrics",
      avgRating: 4.8,
      totalRating: 272,
      photo: doctorImg07,
      totalPatients: 1500,
      hospital: "MBBS, DCH, Senior Research Fellowship (ICMR)",
    },
  
    {
      id: "12",
      name: "DR. P N GUPTA",
      specialization: "Neurologist",
      avgRating: 4.8,
      totalRating: 272,
      photo: doctorImg09,
      totalPatients: 1500,
      hospital: "MBBS, MD (Med), DNB (Nephrology), FICP, MNAMS, FIACM, FIMSA, FGSI, Transplant.",
    },
    {
      id: "11",
      name: "DR. R. R. DUTTA",
      specialization: "Dermatologist",
      avgRating: 4.8,
      totalRating: 272,
      photo: doctorImg10,
      totalPatients: 1500,
      hospital: "MBBS, MD (Internal Medicine)",
    },
    {
      id: "10",
      name: "DR. SANKALP SURYA MOHAN",
      specialization: "Neurologist",
      avgRating: 4.8,
      totalRating: 272,
      photo: doctorImg11,
      totalPatients: 1500,
      hospital: "MBBS, MD, DM(Neurology), FIPM",
    },
    {
        id: "13",
        name: "DR. RUDRA PRASAD ACHARYA",
        specialization: "Oncology",
        avgRating: 4.8,
        totalRating: 272,
        photo: doctorImg08,
        totalPatients: 1500,
        hospital: "MS, FAIS, FIAGES, Fellowship in Surgical Oncology",
      },
    {
      id: "09",
      name: "DR. JYOTI WADHWA",
      specialization: "Oncology",
      avgRating: 4.8,
      totalRating: 272,
      photo: doctorImg12,
      totalPatients: 1500,
      hospital: "MBBS, MD, DM, MAMS, FRCP (Edinburgh), Commonwealth Scholar",
    },

    {
      id: "07",
      name: "DR. ARUNESH KUMAR",
      specialization: "Pediatrics",
      avgRating: 3.8,
      totalRating: 21,
      photo: doctorImg14,
      totalPatients: 600,
      hospital: "MBBS DNB MRCP(UK)",
    },
    {
        id: "08",
        name: "Dr Rahul Naithani",
        specialization: "Oncology",
        avgRating: 4.1,
        totalRating: 123,
        photo: doctorImg13,
        totalPatients: 3131,
        hospital: "MBBS,MD,DM,Fellowship in Bone Marrow Transplantation",
      },
    {
      id: "06",
      name: "DR. RAJESH KUMAR",
      specialization: "Dermatologist",
      avgRating: 4.2,
      totalRating: 11,
      photo: doctorImg15,
      totalPatients: 1600,
      hospital: "MBBS MD",
    },
 
    {
      id: "04",
      name: "DR. AMITABH MALIK",
      specialization: "Medicine",
      avgRating: 3.29,
      totalRating: 12,
      photo: doctorImg17,
      totalPatients: 2133,
      hospital: "MBBS, MS",
    },
    {
      id: "03",
      name: "DR. RAJNISH MONGA",
      specialization: "Gastroenterology",
      avgRating: 4.1,
      totalRating: 112,
      photo: doctorImg18,
      totalPatients: 1233,
      hospital: "MBBS MD DM",
    },
    {
      id: "02",
      name: "DR. MAHESH WADHWANI",
      specialization: "Surgeon",
      avgRating: 4.2,
      totalRating: 2,
      photo: doctorImg19,
      totalPatients: 721,
      hospital: "MBBS MS MCh",
    },
    {
        id: "05",
        name: "DR. MEENAKSHI SHARMA",
        specialization: "Surgeon",
        avgRating: 3.9,
        totalRating: 211,
        photo: doctorImg16,
        totalPatients: 1530,
        hospital: "MBBS MS DNB",
      },
 
    {
      id: "21",
      name: "DR. PIYUSH KUMAR AGRAWAL",
      specialization: "Gastroenterology",
      avgRating: 3.8,
      totalRating: 12,
      photo: doctorImg21,
      totalPatients: 1224,
      hospital: "MBBS MS MCh - Surgical Oncology",
    },
    {
      id: "20",
      name: "DR. ASHUTOSH GOYAL",
      specialization: "Medicine",
      avgRating: 4.1,
      totalRating: 12,
      photo: doctorImg22,
      totalPatients: 224,
      hospital: "MBBS MD DNB",
    },
    {
        id: "22",
        name: "Dr. Vikas Choudhary",
        specialization: "Gastroenterology",
        avgRating: 3.8,
        totalRating: 12,
        photo: doctorImg20,
        totalPatients: 924,
        hospital: "MBBS MS MCh",
      },
  ];
  

const DoctorList2 = () => {
    return (
        <div className="list">
           {doctors2.map(doctor => (<DoctorCard  key={doctor.id} doctor={doctor}/>))}
        </div>
    );
};



export default DoctorList2;