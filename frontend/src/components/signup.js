import Nav from "./nav";
import "../styles.css";
import Signupimg from "../img/Signupimg.jpg";
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";



const Signup = () => {
  const Navigate = useNavigate();

  const [form,setform] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  })

  const handleSubmit=async (event)=>{
    event.preventDefault();

    try {
      const { name, email, phone, work, password, cpassword } = form;

      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, phone, work, password, cpassword })
      });

      if (!res.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await res.json();

      if (data.status === 422 || !data) {
        window.alert("Invalid Credentials");
        console.log("Invalid credentials");
      } else {
        window.alert("Registration Successful");
        console.log("Registration successful");
        Navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("An error occurred during registration.");
    }
  }

  const handleChange=(event)=>{
    const {name,value}= event.target;

    setform({...form,[name]:value});
  }

  return (
    <div className='signpage'>
      <Nav />
      <div className='signbox'>
        <div className='signform'>
         <form method='POST' onSubmit={handleSubmit} >
            <h1>Signup</h1>
           <input className='signinput' onChange={handleChange} type="text" name="name" value={form.name} placeholder='Enter Name'/>
           <input className='signinput' onChange={handleChange} type="email" name="email" value={form.email} placeholder='Enter Email'/>
           <input className='signinput' onChange={handleChange} type="text" name="phone" value={form.phone} placeholder='Enter Phone no'/>
           <input className='signinput' onChange={handleChange} type="text" name="work" value={form.work} placeholder="Company name"/>
           <input className='signinput' onChange={handleChange} type="password" name="password" value={form.password} placeholder='Enter Password'/>
           <input className='signinput' onChange={handleChange} type="password" name="cpassword" value={form.cpassword} placeholder='Enter upper Password'/>
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