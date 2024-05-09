import React from 'react';
import "./about.css";

const About = () => {
  
  return (
    <div className='mainBody'>
      <div className="container5 ">
      <h1 className='intro flex flex-col' >Experienced Full Stack Web Developer with
expertise in the MERN stack. Skilled in frontend development using React and back-end
development with Node.js and Express.
Proficient with database Management with
MongoDB. Successfully completed many
projects like E-Commerce website,Chat-App
and News-App

<br />
<br />
PROJECTS :
<br />
iNotebook
It is a web application used for storing notes.
This web application does not rely on local
storage; instead, we have our own MongoDB
database and utilize our self-created API for
the backend.
<br />
<br />
News-App
Our news app, powered by React and
integrated with the News API, delivers a
comprehensive and personalized news
experience. Users can stay updated with the
latest news from around the world through
our app's intuitive interface and real-time
news updates.

</h1>
      </div>
      
    </div>
  )
}

export default About