import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Login from "./components/login";
import Signup from "./components/signup";
import Errorpage from "./components/errorpage";


function First() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
       
    </BrowserRouter>
  );
}

export default First;
