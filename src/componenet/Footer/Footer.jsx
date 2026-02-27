import React, { useState } from "react";
import "./../Footer/Footer.css";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {

   const [email, setEmail] = useState("");

   function handleSubmit(e) {
            e.preventDefault();

           if (email === email) {
            
                     
        alert("Subscribe");
       
      } else {
       
            alert(" failed");
      }
    } 

  return (
    <div className="footer">
      <div className="footer-box">

       
        <div className="footer-top">

          <div className="footer-logo">
            <span className="star">★</span> Positivus </div>

          <ul className="footer-links">
            <li>About us</li>
            <li>Services</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>

          <div className="social-icons">
            <FaLinkedinIn />
            <FaFacebookF />
            <FaTwitter />
          </div>

        </div>

        {/* Middle Row */}
        <div className="footer-middle">

          <div className="contact-info">
            {/* <h4 className="contactus">Contact us:</h4> */}
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St<br />Moonstone City, Stardust State 12345</p>
          </div>

          <div className="e-box">
             <input  type="email"  placeholder="Email"  value={email}  onChange={(e) => setEmail(e.target.value)} required />
            <button onClick={handleSubmit}>Subscribe to news</button>
          </div>

        </div>

        <hr />

        {/* Bottom */}
        <div className="d"></div>
        <div className="footer-bottom">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <span>Privacy Policy</span>
        </div>

      </div>
    </div>
  );
};

export default Footer;