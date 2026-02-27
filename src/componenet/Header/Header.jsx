import React from 'react'
import './../Header/Header.css'
import hed from './../IMG/Illustration.png'
import brnd1 from './../IMG/Company logo (1).png'
import brnd2 from './../IMG/Company logo.png'
import brnd3 from './../IMG/Company logo (3).png'
import brnd4 from './../IMG/Company logo (4).png'
import brnd5 from './../IMG/Company logo (5).png'
import brnd6 from './../IMG/Company logo (2).png'

const Header = () => {
  return (
    <>

         <section className="hd">
      <div className="hd-left">
        <h1>
          Navigating the <br />
          digital landscape <br />
          for success
        </h1>

        <p>
          Our digital marketing agency helps businesses grow and succeed
          online through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        <button className="cta-btn">Book a consultation</button>
      </div>

      <div className="hd-right">
          <img src={hed} alt="" />        
      </div>

      
    </section>
    <div className="brnd">
        <div className="brnd-box">
          <img src={brnd2} alt="" />
        </div>
        <div className="brnd-box">
          <img src={brnd1} alt="" />
        </div>
        <div className="brnd-box">
          <img src={brnd3} alt="" />
        </div>
        <div className="brnd-box">
          <img src={brnd4} alt="" />
        </div>
        <div className="brnd-box">
          <img src={brnd5} alt="" />
        </div>
        <div className="brnd-box">
          <img src={brnd6} alt="" />
        </div>
        </div>
    
    </>
  )
}

export default Header