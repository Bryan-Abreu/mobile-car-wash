import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalSytles";
//----------Pages---------->
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Pricing from "./pages/Pricing";
import Navbar from "./components/nav/Nav";

function App() {
  return (
    <div>
    <BrowserRouter>
      <GlobalStyle /> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
        <Route path="/pricing" element={<Pricing/>} ></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
