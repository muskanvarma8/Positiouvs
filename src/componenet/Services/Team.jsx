import React from "react";
import "./../Services/Team.css";
import team1 from './../IMG/Picture (1).png'
import team2 from './../IMG/Picture (2).png'
import team3 from './../IMG/Picture (3).png'
import team4 from './../IMG/Picture (4).png'
import team5 from './../IMG/Picture (5).png'
import team6 from './../IMG/Picture (6).png'
import icn from './../IMG/Social icon.png'

function Team() {

  return (
    <>
    <div className="team-container" id="about">

      <h2 className="sction">
        <span>Team</span>
      </h2>
      <p className="section-p">
       10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
      </p>

      <div className="team-box">

        <div className="cardd">
          <img src={team1} alt="team" />
         
          <div className="icnimg">  <img src={icn} alt="icon" />  </div>
       
          <h3>John Smith</h3>
          <p className="role">CEO and Founder</p>
          <p className="desc">
          10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
          </p>
        </div>

        <div className="cardd">
          <img src={team2} alt="team" />
          <div className="icnimg">  <img src={icn} alt="icon" />  </div>

          <h3>Jane Doe</h3>
          <p className="role">Director of Operations</p>
         <p className="desc">
          10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
          </p>
        </div>

        <div className="cardd">
          <img src={team3} alt="team" />
          <div className="icnimg">  <img src={icn} alt="icon" />  </div>

          <h3>Michael Brown</h3>
          <p className="role">SEO Specialist</p>
         <p className="desc">
          10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
          </p>
        </div>

        <div className="cardd">
          <img src={team4} alt="team" />
          <div className="icnimg">  <img src={icn} alt="icon" />  </div>

          <h3>John Smith</h3>
          <p className="role">CEO and Founder</p>
         <p className="desc">
          10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
          </p>
        </div>

        <div className="cardd">
          <img src={team5} alt="team" />
          <div className="icnimg">  <img src={icn} alt="icon" />  </div>

          <h3>Jane Doe</h3>
          <p className="role">Director of Operations</p>
          <p className="desc">
          10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
          </p>
        </div>

        <div className="cardd">
          <img src={team6} alt="team" />
          <div className="icnimg">  <img src={icn} alt="icon" />  </div>

          <h3>Michael Brown</h3>
          <p className="role">SEO Specialist</p>
          <p className="desc">
          10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
          </p>
        </div>

      </div>

      <button className="team-btn">See all team</button>

       </div>

     
      
       </>
    
  );
}

export default Team;