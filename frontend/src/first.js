import "./styles.css";
import {useReducer ,createContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Login from "./components/login";
import Logout from "./components/logout";
import Signup from "./components/signup";
import Errorpage from "./components/errorpage";

import {initialState , reducer} from "../src/reducer/useReducer";

export const UserContext = createContext();

function First(){
  const [state , dispatch] = useReducer(reducer , initialState );
  return (
    <BrowserRouter>
      <UserContext.Provider value={{state,dispatch}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />}/>
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default First;