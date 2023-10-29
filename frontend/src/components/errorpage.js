import React from 'react';
import Nav from './nav';
import {Link} from "react-router-dom";

function Errorpage() {
  return (
    <div className='Errorpage'>
        {/* <Nav /> */}

        <h1 className='errorhead'>404</h1>

        <div className='errorcontent'>
            <h2>We are Sorry , page not found</h2>
            <p> Your web browser can connect with the server, but the specific page you are trying to access cannot be reached.</p>
            <Link to= "/"><button className='errorbtn' type='submit'>back to homepage</button></Link>
        </div>
    </div>
  )
}

export default Errorpage;