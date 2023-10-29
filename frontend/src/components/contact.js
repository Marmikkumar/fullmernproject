import React from 'react';
import Nav from "./nav";
import "../styles.css";

const Contact = () => {
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
        <div className='contactinput'>
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Your email' />
          <input type="text" placeholder='Your Phone' />
        </div>
        <textarea className='msg' rows='8' placeholder='type your message' />

        <button className='contactbtn' type='submit'>Send Message</button>
      </div>
    </div>
  )
}

export default Contact;