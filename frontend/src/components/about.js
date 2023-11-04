import React , {useEffect, useState} from 'react';
import Nav from "./nav";
import Myphoto from "../img/Myphoto.jpeg";
import { useNavigate } from 'react-router-dom';

import "../styles.css";

const About = () => {

  const Navigate = useNavigate();
  const [userData,setUserData] = useState({name:"" ,email:"" ,phone:"" ,work :"" });

  const CallAboutPage = async () =>{
    try{
      const res = await fetch('/about',{
        method: "GET",
        headers: {
          	
          Accept : "appllication/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      });

      const data = await res.json();
      setUserData(data);

      if(res.status !== 200){
        const error =new Error (res.error);
        throw error;
      }
    }catch(err){
      console.log(err);
      Navigate("/login");
    }
    
  }

  

  const [choose1,setchoose1] =useState(true);
  const [choose2,setchoose2] =useState(false);
  const [selectedImage, setSelectedImage] = useState(Myphoto);

  const handleclick1=()=>{
    setchoose1(true);
    setchoose2(false);
  }

  const handleclick2=()=>{
    setchoose2(true);
    setchoose1(false);
  }

  
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        // You can perform additional checks here, such as verifying file type or size
  
        // To display a preview of the selected image
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    CallAboutPage();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='aboutpage'>
      <Nav />
        <form method="GET" className='aboutbox'>
          <div className='aboutimg'>
            <img src={selectedImage} alt='img' />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <div className="aboutoption">
              <p>Work Link</p>
              <ul className='underline'>
                <li>Github</li>
                <li>Linkedin</li>
                <li>Gfg</li>
                <li>Codechef</li>
                <li>Leetcode</li>
                <li>Resume</li>
              </ul>
            </div>
          </div>
          <div className='aboutcontent'>
            <div className='aboutright'>
              <div className='aboutintro'>
                <h2 className='myname'>{userData.name}</h2>
                <p>{userData.work}</p>
                <p>Ranking:1/10</p>
              </div>
              <div className='aboutedit'>
                <button type='submit'>Edit Profile</button>
              </div>
            </div>
            <div className='aboutdetail'>

              <div className="aboutme">
                <div  className='abouthead'><div onClick={handleclick1} className={choose1 ? "spam":""}>About  </div> <div onClick={handleclick2}className={choose2 ? "spam":""}>  Timeline</div></div>
                <div className={choose1 ? 'profile':"not"}>
                  <ul className='profiletitle'>
                    <li>userId</li>
                    <li>Name</li>
                    <li>Email</li>
                    <li>Phone</li>
                    <li>Profession</li>
                  </ul>
                  <ul className='profiledetail'>
                    <li>{userData._id}</li>
                    <li>{userData.name}</li>
                    <li>{userData.email}</li>
                    <li>{userData.phone}</li>
                    <li>{userData.work}</li>
                  </ul>
                </div>

                <div className={choose2 ? 'profile': "not"}>
                  <ul className='profiletitle'>
                    <li>Experience</li>
                    <li>Hourly Rate</li>
                    <li>Total Project</li>
                    <li>English Experience</li>
                    <li>Availability</li>
                  </ul>
                  <ul className='profiledetail'>
                    <li>1</li>
                    <li>20$</li>
                    <li>4</li>
                    <li>Very Good</li>
                    <li>6 month</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </form>
    </div>
  )
}

export default About ;