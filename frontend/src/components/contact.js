import React , {useEffect, useState} from 'react';
import Nav from "./nav";
import "../styles.css";

const Contact = () => {
  const [userData,setUserData] = useState('');

  const CallAboutPage = async () =>{
    try{
      const res= await fetch('http://localhost:5000/contact',{
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if(!res.status === 200){
        const error =new Error (res.error);
        throw error;
      }
    }
    catch (err) {
      console.log(err);
    }
    
  }

  useEffect(()=>{
    CallAboutPage();
  },[]);

  return (
    <div className='contactpage'>
      <Nav />
      <div className='contacttop'>
        <div className='contactbox'>
          <div className='contacticon'>
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className='contactimp'>
            <p>Phone</p>
            <p>7977989978</p>
          </div>
        </div>
        <div className='contactbox'>
          <div className='contacticon'>
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className='contactimp'>
            <p>Email</p>
            <p>marmikkumar13@gmail.com</p>
          </div>
        </div>

        <div className='contactbox'>
          <div className='contacticon'>
            <i className="fa-solid fa-address-book"></i>
          </div>
          <div className='contactimp'>
            <p>Address</p>
            <p>BiharSharif , Bihar</p>
          </div>
        </div>
      </div>

      <div className='contactbase'>
        <h2>Get in touch</h2>
        <form method='GET' className='contactinput'>
          <input type="text" placeholder='your name' value={userData.name}></input>
          <input type="email" placeholder='your email' value={userData.email} />
          <input type="text" placeholder='Your Phone' value={userData.phone} />
        </form>
        <textarea className='msg' rows='8' placeholder='type your message' />

        <button className='contactbtn' type='submit'>Send Message</button>
      </div>
    </div>
  )
}

export default Contact;