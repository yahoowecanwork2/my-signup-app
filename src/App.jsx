import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./compoents/welcome";
import Home from "./compoents/Home";  
import Login from "./compoents/Login"; 
import Register from "./compoents/Register"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
