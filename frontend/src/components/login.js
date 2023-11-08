import React , {useContext, useState} from 'react'
import Nav from "./nav";
import "../styles.css";
import Loginimg from "../img/Loginimg.jpg";
import { useNavigate } from 'react-router-dom';
import { UserContext} from "../first";


const Login = () => {

  const Navigate = useNavigate();
  const [user,setUser] = useState({
    email:"",
    password:""
  })

  const {state, dispatch} = useContext(UserContext);

  const handleChange=(event)=>{
    const {name,value} = event.target;

    setUser({...user,[name]:value});
  }

  const handleSubmit = async(event)=>{
    event.preventDefault();
    try{
      const {email,password} = user;

      const res= await fetch('http://localhost:5000/Login',{
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          email,password
        })
      });

      if (!res.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await res.json();

      if (data.status === 422 || !data) {
        window.alert("Invalid Credentials");
        console.log("Invalid credentials");
      } else {
        // dispatch({type:'USER' ,payload:true});
        window.alert("login Successful");
        console.log("login successful");
        Navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      window.alert("An error occurred during registration.");
    }
    
  }







  return (
    <div className='loginpage'>
      <Nav />

      <div className='loginbox'>
        <div className='loginimg'>
          <img src={Loginimg} alt="ph2"></img>
        </div>
        <div className='loginform'>
          <form method='POST' onSubmit={handleSubmit}>
              <h1>SignIn</h1>
            <input className='signinput' type="text" onChange={handleChange} name="email" value={user.email} placeholder='Enter Email'/>
            <input className='signinput' type="password" onChange={handleChange} name="password" value={user.password} placeholder='Enter Password'/>
            <button className='signbtn' type="submit">Login</button>

          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;