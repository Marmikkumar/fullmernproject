import React from 'react';
import Nav from "./nav";

function Home() {
  return (
    <div className='homepage'>
      <Nav />
      <div className='hometitle'>
        <h4>WELCOME</h4>
        <p>We are the mern developers</p>
      </div>
    </div>
  )
}

export default Home;