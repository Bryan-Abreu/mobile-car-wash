import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalSytles";
//----------Pages---------->
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import PricingPageS from "./pages/PricingPageS";
import Navbar from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
    <BrowserRouter>
      <GlobalStyle /> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
        <Route path="/pricing" element={<PricingPageS/>} ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
