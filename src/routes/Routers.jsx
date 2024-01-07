import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Services from "../pages/Services";
import Singup from "../pages/Singup";
import Doctors from "../pages/Doctors";
import DoctorDetails from "../pages/DoctorDetails";

import {Routes, Route} from 'react-router-dom';

 const Routers = () => {
   return (
     <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/loging" element={<Login/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/singup" element={<Singup/>} />
        <Route path="/doctor" element={<Doctors/>} />
        <Route path="/doctoras" element={<DoctorDetails/>} />
     </Routes>
          )
 }

export default Routers