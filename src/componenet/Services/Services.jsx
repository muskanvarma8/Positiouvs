import React from "react";
import './../Services/Services.css'

import { FaArrowRight } from "react-icons/fa";
// import { FaArrowUpRight } from "react-icons/fa6";
import case1 from './../IMG/Frame 19.png'
import cardImg1 from './../IMG/Illustration (1).png'
import cardImg2 from './../IMG/Illustration (3).png'
import cardImg3 from './../IMG/Illustration (4).png'
import cardImg4 from './../IMG/tokyo-sending-messages-from-one-place-to-another 1.png'
import cardImg5 from './../IMG/Illustration (5).png'
import cardImg6 from './../IMG/Illustration (6).png'


const Services = () => {
  return (
    <div className="services-section" id="services">
      <div className="services-header">
        <h2 className="highlight">Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to
          help businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="services">

        {/* Card 1 */}
        <div className="service-card light">
          <h3>
            <span className="highlight">Search engine</span><br />
            <span className="highlight">optimization</span>
          </h3>
          <div className="cd-img">
          <img src={cardImg1} alt="" />
          </div>
          <div className="learn">
            <div className="iconn">
             <FaArrowRight />
            </div>
            <span>Learn more</span>
          </div>
          
        </div>

        {/* Card 2 */}
        <div className="service-card green">
          <h3>
            <span className="white-bg">Pay-per-click</span><br />
            <span className="white-bg">advertising</span>
          </h3>
          <div className="cd-img">
          <img src={cardImg2} alt="" />
          </div>
          <div className="learn">
            <div className="iconn dark">
              {/* <FaArrowUpRight /> */}
               {/* <FaArrowUpRightDots /> */}
               <FaArrowRight />
            </div>
            <span>Learn more</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="service-card dark">
          <h3>
            <span className="white-bg">Social Media</span><br />
            <span className="white-bg">Marketing</span>
          </h3>
          <div className="cd-img">
          <img src={cardImg3} alt="" />
          </div>
          <div className="learn white-text">
            <div className="iconn light-bg">
             
              <FaArrowRight />
            </div>
            <span>Learn more</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="service-card light">
          <h3>
            <span className="highlight">Email</span><br />
            <span className="highlight">Marketing</span>
          </h3>
          <div className="cd-img">
          <img src={cardImg4} alt="" />
          </div>
          <div className="learn">
            <div className="iconn">
           
              <FaArrowRight />
            </div>
            <span>Learn more</span>
          </div>
        </div>


                {/* 5 */}

             <div className="service-card green">
          <h3>
            <span className="white-bg">Pay-per-click</span><br />
            <span className="white-bg">advertising</span>
          </h3>
          <div className="cd-img">
          <img src={cardImg5} alt="" />
          </div>
          <div className="learn">
            <div className="iconn dark">
              {/* <FaArrowUpRight /> */}
               {/* <FaArrowUpRightDots /> */}
               <FaArrowRight />
            </div>
            <span>Learn more</span>
          </div>
        </div>

                {/* 6 */}

         <div className="service-card dark">
          <h3>
            <span className="white-bg">Social Media</span><br />
            <span className="white-bg">Marketing</span>
          </h3>
          <div className="cd-img">
          <img src={cardImg6} alt="" />
          </div>
          <div className="learn white-text">
            <div className="iconn light-bg">
             
              <FaArrowRight />
            </div>
            <span>Learn more</span>
          </div>
        </div>

      </div>


            {/* case section */}

       <div className="case" id="usecases">

      <div className="cta-box">
        <div className="cta-left">
          <h2>Let's make things happen</h2>
          <p>
            Contact us today to learn more about how our digital
            marketing services can help your business grow and succeed online.
          </p>
          <button className="cta-btn">Get your free proposal</button>
        </div>

        <div className="cta-right">
         <img src={case1} alt="" />
        </div>

      </div>



      {/* CASE HEADER */}
      <div className="case-header">
        <h3 className="highlight">Case Studies</h3>
        <p>
          Explore Real-Life Examples of Our Proven Digital Marketing
          Success through Our Case Studies
        </p>
      </div>

      {/* CASE CARD */}
      <div className="case-card">

        <div className="case-item">
          <p>
            For a local restaurant, we implemented a targeted PPC campaign
            that resulted in a 50% increase in website traffic and a 25%
            increase in sales.
          </p>
          <span className="learn">
            Learn more <FaArrowRight />
          </span>
        </div>

        <div className="divider"></div>

        <div className="case-item">
          <p>
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <span className="learn">
            Learn more <FaArrowRight />
          </span>
        </div>

        <div className="divider"></div>

        <div className="case-item">
          <p>
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <span className="learn">
            Learn more <FaArrowRight />
          </span>
        </div>

      </div>

    </div>
    </div>
  );
};

export default Services;