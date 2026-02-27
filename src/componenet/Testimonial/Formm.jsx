import React, { useState } from "react";
import "./../Testimonial/Formm.css";
import fm from './../IMG/Illustration (8).png'


const Formm = () => {
  const [option, setOption] = useState("hi");
    const [name, setName] = useState("");
      const [email, setEmail] = useState("");

       function handleSubmit(e) {
            e.preventDefault();

           if ( name === name && email === email) {
                     
        alert("msg send successful");
       
      } else {
       
            alert(" failed");
      }
    } 
    
    

  return (
    <div className="contact">

     
      <div className="prc-hdr">
        <h3 className="highlight">Contact Us</h3>
        <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>

    
      <div className="contact-box">
        <div className="contact-left">

          <div className="say">
            <label>
              <input  type="radio"  name="type"  checked={option === "hi"}  onChange={() => setOption("hi")}/>
              Say Hi
            </label>

            <label>
              <input  type="radio"  name="type"  checked={option === "quote"}  onChange={() => setOption("quote")}  />
              Get a Quote
            </label>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name*</label>
            <input type="text"  placeholder="Name"  value={name}  onChange={(e) => setName(e.target.value)}  required />

            <label>Email*</label>
            <input  type="email"  placeholder="Email"  value={email}  onChange={(e) => setEmail(e.target.value)}  required />


            <label>Message*</label>
            <textarea placeholder="Message" required></textarea>

            <button type="submit">Send Message</button>
          </form>

        </div>

        
        <div className="right">
          <img src={fm} alt="" />
        </div>

      </div>

    </div>
  );
};

export default Formm;