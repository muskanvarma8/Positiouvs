import React from 'react'
import { useState } from 'react'
import './FormUI.css'
import img from '../componenet/IMG/Screenshot 2026-02-18 130723.png'

const FormUI = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
     const [message, setMessage] = useState("");
      const [color, setColor ]= useState('');
 
    

    function handleSubmit(e) {
            e.preventDefault();

           if ( name === name && password.length === 8 && email === email) {
                
      if (confirmPassword.length === 8 && password === confirmPassword) {
        setMessage(" Login successful, User is valid");
        alert("Login successful");
        setColor ('green')
      } else {
        setMessage("Passwords do not match");
            alert("Passwords do not match");
            setColor('red');

      }
    } 
    else {
      setMessage("Invalid user");
      alert("Password must be 8 characters long");
      setColor('red');
    }
    }
  return (

    <>
     <div className='bigbox'>
    
        <div className="box">
            <img src={img} alt="formUI" />
        </div>
        
      <div className="right-box">
        <div className="form-box">
          <h2 style={{ color: color }}>{message}</h2>
        
          <h1 >Create your account </h1>
          <p className="pera" >  Join Nucleus UI and start designing with ease.  </p>

          <form onSubmit={handleSubmit}>
            <input type="text"  placeholder="Name"  value={name}  onChange={(e) => setName(e.target.value)}  required />

            <input  type="email"  placeholder="Email"  value={email}  onChange={(e) => setEmail(e.target.value)}  required />

            <input  type="password"  placeholder="Password"  value={password}  onChange={(e) => setPassword(e.target.value)}  required />

            <input  type="password"  placeholder="Confirm password"  value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)}  required />

                     <div className="forgotpass">
                     <a href="#">Forgot password?</a>
                    </div>

             <div className="rmbr-row">
                <span>Remember sign in details</span>
               <label className="chkbx">  <input type="checkbox"/>  <span className="slider"></span>  </label>
            </div>

            <button className="prmy-btn" type="submit">  Login  </button>

            <div className="divider">  <span>OR</span>  </div>

            <button className="google-btn" type="button">
              <img  src="https://cdn-icons-png.flaticon.com/512/281/281764.png"  alt=""  />
              Sign up with Google
            </button>

            <p className="lgn">  Have an account? <span>Log in</span> </p>
          </form>
        </div>
      </div>
    </div>
    </>
   
  )
}

export default FormUI