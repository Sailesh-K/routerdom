import React, { Component } from "react";
import Fsd from "./Fsd";
import Cyber from "./Cyber";
import Datasc from "./Datasc";
import Career from "./Career";
import NavBar from "./NavBar";
import {Routes,Route} from 'react-router-dom'


function App() {
  
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/fsd" element={<Fsd/>}/>
        <Route path="/ds" element={<Datasc/>}/>
        <Route path="/cyber" element={<Cyber/>}/>
        <Route path="/career" element={<Career/>}/>
      </Routes>
    </>
  );
}

export default App
