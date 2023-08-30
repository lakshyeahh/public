import React from 'react';
import ImageSlider from './slider';
import "./slider.css";

import CenteredButton from './CenteredButton';
import Card from './Card';
import image2 from './image1.png';
import image1 from './image2.png';
import image3 from './image3.png';
import Email from './Email';





const images = [
  "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	"https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?cs=srgb&dl=pexels-pixabay-247786.jpg&fm=jpg",
  "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
   
  ];

const Home = () => {
	return (
		<div>
			<ImageSlider images={images} />
			<div className="content">
      
      <div className='main'>
        <div className='text'>
        <hr />
        <h1>Lets Take Care Of Your Health..</h1>
        <p className='des'>Welcome to our advanced and user-friendly website that revolutionizes the way you manage your healthcare appointments! We understand the importance of seamless healthcare experiences, and that's why we have created a platform that empowers patients to effortlessly book appointments with their preferred healthcare providers, all from the comfort of their homes. Say goodbye to long wait times and endless phone calls. With our intuitive interface, you can easily schedule appointments, track your upcoming visits, and receive timely notifications to ensure you never miss an important medical consultation. Your health and convenience are our top priorities, and we are excited to accompany you on this journey towards better healthcare management. Let's get started and take control of your well-being today!</p>
        </div><CenteredButton />
        <div style={{ display: 'flex' }}>
        <Card className="card"
          imageSrc={image1}
          title="DOCTOR NEAR ME"
          description="Doctor / Hospital / Specialization to match specific consultation needs. Confirmed Online Appointment slots, practice locations, to select from to book appointment for clinic consultation or video consultation."
        />
        <Card className="card"
          imageSrc={image2}
          title="KNOW YOUR DOCTOR"
          description="Request appointments based on slots, date,consultation location. Know your Doctor to book confirmed doctor Appointment effortlessly with clinic details of practice location to engage with patients effortlessly."
        />
        <Card className="card"
          imageSrc={image3}
          title="BOOK CONFIRMED APPOINTMENT"
          description="Avoid endless back and forth communication; empowering with Google verified SMS & dynamic Email notifications. Confirmed Doctor Appointment, clinical procedure scheduling."
        />
      </div>
      <div className='conti'>
<div className="box" id='box1'> <div>
<h2 className="number">
30+
</h2>
 <p className="text_para">Years of Experience</p>
</div> 
</div>

<div className="box" id='box2'> <div>
<h2 className="number">
150+
</h2>
<p className="text_para">Doctors</p>
</div> 
</div>

<div className="box" id='box3'> <div>
<h2 className="number">
100%
</h2>
<p className="text_para">Patient Satisfaction</p>
</div> 
</div>
</div>


        </div>
        </div>
       
		</div>
	);
};

export default Home;
