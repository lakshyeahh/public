import React, { useState } from 'react';
import './DoctorPage.css'; // Import your CSS file for styling
import doctorImg12 from "../assets/images/doctor-img07.png";

const DoctorPage = ({ id, name, photo, specialization }) => {
  const [selectedTab, setSelectedTab] = useState('about'); // State to track selected tab

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="doctor-page">
      <div className="doctor-inf">
        <img src="https://c0.wallpaperflare.com/preview/386/354/385/analysis-hospital-doctor-medical.jpg" />
      </div>
      <div className="doctor-info">
        <div className='datad'>
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

              <button class="lis">Book</button>
            </div>
            {/* More time slots */}
          </div>
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
        {name} is a highly experienced and compassionate medical professional dedicated to providing exceptional healthcare services to patients. With over [Number] years of practice in the field of [Medical Specialty], Dr. [Last Name] has earned a reputation for excellence in diagnosis, treatment, and patient care. Graduating with honors from [Medical School], Dr. [Last Name] pursued further specialization through [Specialty Training Program], where they honed their expertise in [Specific Expertise]. As a firm believer in the importance of patient education, Dr. [Last Name] is committed to ensuring that each patient receives thorough explanations about their medical conditions and treatment options. Beyond their medical expertise, Dr. [Last Name] is known for their warm and empathetic bedside manner, fostering an environment of trust and comfort for patients seeking the best possible healthcare experience.
      </p>
      <p>
        Driven by a passion for continuous learning and advancement in the medical field, Dr. [Last Name] remains up-to-date with the latest advancements and breakthroughs in [Medical Specialty]. Their dedication to research and innovation has led to contributions in various medical publications and presentations at national and international conferences. Outside of their medical practice, Dr. [Last Name] is an active advocate for community health initiatives, volunteering their time and expertise to promote wellness and healthcare awareness. Patients describe their interactions with Dr. [Last Name] as enlightening and reassuring, as they take the time to listen to concerns and tailor treatments to individual needs. With a patient-centered approach and a commitment to delivering comprehensive care, Dr. [Last Name] continues to make a positive impact on the lives of countless individuals seeking optimal health and well-being.
      </p>
    </div>
  )}
  {selectedTab === 'feedback' && (
    <div className="feedback-content active-tab">
      <div className="feedback">
        <div className="feedback-header">
          
          <p className="patient-name">John Doe</p>
        </div>
        <p className="feedback-text">
          Dr. [Doctor's Last Name] is an exceptional physician who truly cares about his patients. I had the privilege of being under his care during a recent medical issue, and I was impressed by his thoroughness and empathy. He took the time to explain my condition and treatment options in a way that was easy to understand, alleviating my concerns. His dedication to staying updated on the latest medical advancements gives me confidence in his recommendations. I highly recommend Dr. [Last Name] to anyone seeking top-notch medical care.
        </p>
      </div>
      <div className="feedback">
        <div className="feedback-header">
          
          <p className="patient-name">Jane Smith</p>
        </div>
        <p className="feedback-text">
          My experience with Dr. [Last Name] was nothing short of outstanding. Not only is he incredibly knowledgeable in his field, but he also creates a welcoming and comfortable environment for his patients. His ability to listen attentively to my concerns and answer my questions put me at ease throughout my treatment journey. Dr. [Last Name]'s commitment to personalized care is evident in the way he tailors treatments to individual needs. His genuine compassion and dedication to improving patients' lives make him a true asset to the medical community.
        </p>
      </div>
      
    </div>
  )}
  
</div>
 
    </div>
    
  );
};

export default DoctorPage;
