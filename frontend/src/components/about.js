import React , {useState} from 'react';
import Nav from "./nav";
import Myphoto from "../img/Myphoto.jpeg";

import "../styles.css";

const About = () => {

  const [choose1,setchoose1] =useState(true);
  const [choose2,setchoose2] =useState(false);


  const handleclick1=()=>{
    setchoose1(true);
    setchoose2(false);
  }

  const handleclick2=()=>{
    setchoose2(true);
    setchoose1(false);
  }


  return (
    <div className='aboutpage'>
      <Nav />
      <div className='aboutbox'>
        <div className='aboutimg'>
          <img src={Myphoto} alt='img'></img>
          <div classname="aboutoption">
            <p>Work Link</p>
            <ul className='underline'>
              <li>Youtube</li>
              <li>Instagram</li>
              <li>Github</li>
              <li>Linkedin</li>
              <li>Gfg</li>
              <li>Codechef</li>
              <li>Leetcode</li>
            </ul>
          </div>
        </div>
        <div className='aboutcontent'>
          <div className='aboutright'>
            <div className='aboutintro'>
              <h3>Marmik Kumar</h3>
              <p>Web Developer</p>
              <p>Ranking:1/10</p>
            </div>
            <div className='aboutedit'>
              <button type='submit'>Edit Profile</button>
            </div>
          </div>
          <div className='aboutdetail'>

            <div className="aboutme">
              <div  className='abouthead'><spam onClick={handleclick1} className={choose1 ? "spam":""}>About  </spam> <spam onClick={handleclick2}className={choose2 ? "spam":""}>  Timeline</spam></div>
              <div className='profile'>
                <ul className='profiletitle'>
                  <li>userId</li>
                  <li>Name</li>
                  <li>Email</li>
                  <li>Phone</li>
                  <li>Profession</li>
                </ul>
                <ul className='profiledetail'>
                  <li>675667</li>
                  <li>Marmik Kumar</li>
                  <li>marmikkumar13@gmail.com</li>
                  <li>9877898679</li>
                  <li>IT</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About ;