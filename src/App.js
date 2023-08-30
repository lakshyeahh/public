// src/App.js
import React from "react"; 
import './App.css';
import  { useState } from 'react';


import doctors from "./assets/data/doctors";

import FooterSitemapLinks from "./components/footer";
import Navbar from "./components/nav";
import { BrowserRouter as Router, Routes, Route, Link }
    from 'react-router-dom';
import Book from './pages/book';
import Doctor from './pages/doctor';
import Home from './pages/home';
import Hospital from './pages/hospital';
import Login from './pages/login';
import Register from './pages/register';
import Contact from './pages/contact';
import Doctor2 from "./pages/doctor2";
import Doctor3 from "./pages/doctor3";
import Form from "./components/form";
import Img1 from "../src/components/back22.jpg";

import DoctorPage from "./pages/docdetails";
import Done from "./pages/done";
import Registern from "./pages/registernew";
import Homepage from "./pages/Homenew";
import Loginn from "./pages/loginnew";


const API_URL = "https://www.rapidapi.com?apikey=4b62593e98msh55c75d1f4c1b71ep1ff33bjsnb72a15688b7e";


function App() {
 
  let data = doctors;

const [ user, setLoginUser] = useState({})
  

  return (
    <div className="App">
      <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/book' element={<Book />} />
                <Route path='/doctor' element={<Doctor />} />
                <Route path='/hospital' element={<Hospital />} />
               <Route path='/login' element={<Login />} /> 
                <Route path='/register' element={<Register/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/doctor/2' element={<Doctor2/>} />
                <Route path='/doctor/3' element={<Doctor3/>} />
                <Route path= {doctors.route} element={<DoctorPage/>} />
                <Route path= '/item/book' element={<Form/>} />
                <Route path= '/item/book/?FirstName=&Last+Name=&Email=&PhoneNumber=&birthday=&appt=&Area=&City=&State=&Post+Code=/done' element={<Done />} />
          {doctors.map(item => (
            <Route key={item.id} path={`/item/${item.id}`} element={<ItemDetail id={item.id} name={item.name} photo={item.photo} specialization={item.specialization} hospital={item.hospital}/>} />
          ))}
          {doctors.map(item => (
            <Route key={item.id} path={`/item/book/${item.id}`} element={<Form id={item.id} name={item.name} specialization={item.specialization}/>} />
          ))}
        
            </Routes>
            
        </Router>
      
        < FooterSitemapLinks className="footer"/>

        
      
        </div>
  );
}

const ItemDetail = ({ id, name, photo, specialization, hospital }) => {
  const [selectedTab, setSelectedTab] = useState('about'); // State to track selected tab

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="doctor-page">
       <img className="imgd"src={Img1} alt="#" />
      <div className="doctor-info">
       
        <img src={photo} alt="Doctor" className="doctor-image" />
        <div className='namei'>
        <h2>{name}</h2>
          <p id="spec">Specialty: {specialization}</p>
        </div>
        <div className="ticket-box">
            <h2>Ticket Price: 799/-</h2>
          <div className="time-slots">
            {/* Map through available time slots */}
            <div className="time-slot">
                <h4>Available Time Slots</h4>
              <p>Time Slot: 10:00 AM - 11:00 AM</p>
              <p>Time Slot: 12:00 AM - 1:00 PM</p>
              <p>Time Slot: 2:00 PM - 3:00 PM</p>

             
              <Link to={`/item/book/${id}`} class="listiy">BOOK</Link>
            </div>
            {/* More time slots */}
          </div>
        </div>
      </div>
      <div className="tab-buttons">
        <button
          className={selectedTab === 'about' ? 'active-tab' : ''}
          onClick={() => handleTabChange('about')}
        >
          About
        </button>
        <button
          className={selectedTab === 'feedback' ? 'active-tab' : ''}
          onClick={() => handleTabChange('feedback')}
        >
          Feedback
        </button>
      </div>
    

<div className="tab-content">
  {selectedTab === 'about' && (
    <div className="about-content active-tab">
      <p>
        {name} is a highly experienced and compassionate medical professional dedicated to providing exceptional healthcare services to patients. With over  years of practice in the field of {specialization}, Dr.  has earned a reputation for excellence in diagnosis, treatment, and patient care. Graduating with honors from {Hospital}, Dr.  pursued further specialization through , where they honed their expertise in . As a firm believer in the importance of patient education, Dr.  is committed to ensuring that each patient receives thorough explanations about their medical conditions and treatment options. Beyond their medical expertise, Dr.  is known for their warm and empathetic bedside manner, fostering an environment of trust and comfort for patients seeking the best possible healthcare experience.
      </p>
      <p>
        Driven by a passion for continuous learning and advancement in the medical field, Dr.  remains up-to-date with the latest advancements and breakthroughs in {specialization}. Their dedication to research and innovation has led to contributions in various medical publications and presentations at national and international conferences. Outside of their medical practice, Dr.  is an active advocate for community health initiatives, volunteering their time and expertise to promote wellness and healthcare awareness. Patients describe their interactions with Dr.  as enlightening and reassuring, as they take the time to listen to concerns and tailor treatments to individual needs. With a patient-centered approach and a commitment to delivering comprehensive care, Dr. {name} continues to make a positive impact on the lives of countless individuals seeking optimal health and well-being.
      </p>
    </div>
  )}
  {selectedTab === 'feedback' && (
    <div className="feedback-content active-tab">
      <div className="feedback">
        <div className="feedback-header">
          <img src="https://cdn-icons-png.flaticon.com/512/1430/1430453.png" alt="Patient Avatar" className="patient-avatar" />
          <p className="patient-name">Rajesh Kumar</p>
        </div>
        <hr />
        <p className="feedback-text">
          {name} is an exceptional physician who truly cares about his patients. I had the privilege of being under his care during a recent medical issue, and I was impressed by his thoroughness and empathy. He took the time to explain my condition and treatment options in a way that was easy to understand, alleviating my concerns. His dedication to staying updated on the latest medical advancements gives me confidence in his recommendations. I highly recommend him to anyone seeking top-notch medical care.
        </p>
      </div>
      <div className="feedback">
        <div className="feedback-header">
          <img src="https://cdn-icons-png.flaticon.com/512/1430/1430453.png" alt="Patient Avatar" className="patient-avatar" />
          <p className="patient-name">Sushil Verma</p>
        </div>
        <hr />
        <p className="feedback-text">
          My experience with {name} was nothing short of outstanding. Not only is he incredibly knowledgeable in his field, but he also creates a welcoming and comfortable environment for his patients. His ability to listen attentively to my concerns and answer my questions put me at ease throughout my treatment journey. Dr. {name} commitment to personalized care is evident in the way he tailors treatments to individual needs. His genuine compassion and dedication to improving patients' lives make him a true asset to the medical community.
        </p>
      </div>
    </div>
  )}
</div>

    </div>
  );
};

export default App;
