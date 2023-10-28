import React, { useState } from "react";
import {Link} from "react-router-dom";
import "../styles.css";

function Nav() {
  const [bar, setbar] = useState(false);

  function handleclick() {
    setbar(!bar);
  }
  return (
    <div className="Navbar">
      <div
        className="Arrange"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <img
          src="https://react-vite-projects-11-navbar.netlify.app/assets/logo-ddc33e51.svg"
          alt="ph"
        />

        <div
          className="menu"
          style={{ transform: bar && "rotate(90deg)" }}
          onClick={handleclick}
        >
          <div className="menubar"></div>
          <div className="menubar"></div>
          <div className="menubar"></div>
        </div>
      </div>

      <ul className={bar ? "link linktab" : " link "}>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/login"><li>Login</li></Link>
        <Link to="/signup"><li>Signup</li></Link>
      </ul>

      
    </div>
  );
}

export default Nav;
