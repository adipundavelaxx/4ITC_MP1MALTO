import React from "react";
import './aboutme.css';

const AboutMe = () => {
  return (

    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src={require('../images/img-adri.jpeg')} />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>Hello,</h3>
            <h1></h1>
            <p>
            Adriana is currently studying BS Information Technology at UST with a 
            specialization in Web and Mobile Application Development. She is also a freelancer. <br/> <br/>

            A detailed-oriented committed, and competitive IT student, with quality spirit, and experience 
            in defining designing, implementing front-end development, and delivering web applications 
            using programming languages and technologies. <br/> <br/>

            An innovator of her own through her capabilities to think, analyze, communicate and expand 
            ideas to create better products. Skilled in communication, creativity, and writing, she also 
            loves working as a leader and/or a teammate. <br /> <br/>

            She's proficient in web designing, front-end development, or UI/UX design but she's always 
            open to venture on learning new things and exploring more opportunities that will boost her 
            career growth. <br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
