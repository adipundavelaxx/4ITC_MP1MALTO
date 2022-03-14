import React from "react";
import './trainings.css';

const Trainings = () => {
  return (

    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
          <h3>For her trainings and seminars,</h3>
            <h1></h1>
            <p>
            • Salesforce Career Journey Academy <br/>
            Deloitte Digital <br/>
            Webinar <br/>
            October 11 – November 1, 2021 <br/><br/>

            • Asurion Technology Summit <br/>
            Asurion <br/>
            Webinar <br/>
            October 18, 2021 <br/><br/><br/>

            <h3>For her certifications,</h3>

            <p>
            • ITPEC Fundamentals of IT Passport Exam (IP Exam, Level 1) Certified <br/>
            Philippine National I.T. Standards (PhilNITS) Foundation <br/>
            Issued Nov 2021 · No Expiration Date <br/>
            Credential ID IP01-0057 <br/><br/>

            • CompTIA IT Fundamentals (ITF+) Certified <br/>
            CompTIA <br/>
            Issued May 2019 · No Expiration Date <br/>
            Candidate ID: COMP001021518113 <br/><br/>
            </p>
            </p>
          </div>
          <div className="col-6 p-25">
          <div className="about__img">
              <img src={require('../images/secondpic.png')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainings;
