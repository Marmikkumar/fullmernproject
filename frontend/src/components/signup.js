import React from 'react';
import Nav from "./nav";
import "../styles.css";
import Signupimg from "../img/Signupimg.jpg";


const Signup = () => {
  return (
    <div className='signpage'>
      <Nav />

      <div className='signbox'>
        <div className='signform'>
         <form method='POST' >
            <h1>Signup</h1>
           <input className='signinput' type="text" name="name" placeholder='Enter Name'/>
           <input className='signinput' type="email" name="email" placeholder='Enter Email'/>
           <input className='signinput' type="text" name="phone" placeholder='Enter Phone no'/>
           <input className='signinput' type="text" name="work" placeholder="Company name"/>
           <input className='signinput' type="password" name="password" placeholder='Enter Password'/>
           <input className='signinput' type="password" name="cpassword" placeholder='Enter upper Password'/>
           <button className='signbtn' type="submit">Register</button>
         </form>
        </div>
        <div className= "signimg">
          <img src={Signupimg} alt="ph"/>
        </div>
      </div>
    </div>
  )
}

export default Signup;