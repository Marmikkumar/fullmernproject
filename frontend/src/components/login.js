import React from 'react'
import Nav from "./nav";
import "../styles.css";
import Loginimg from "../img/Loginimg.jpg";


const Login = () => {
  return (
    <div className='loginpage'>
      <Nav />

      <div className='loginbox'>
        <div className='loginimg'>
          <img src={Loginimg} alt="ph2"></img>
        </div>
        <div className='loginform'>
          <form method='POST' >
              <h1>SignIn</h1>
            <input className='signinput' type="text" name="email" placeholder='Enter Email'/>
            <input className='signinput' type="password" name="password" placeholder='Enter Password'/>
            <button className='signbtn' type="submit">Login</button>

          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;