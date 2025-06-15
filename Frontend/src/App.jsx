import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header/Header";
import Login from "./Component/Login/login";
import Signup from "./Component/Login/Signup";
import Contact from "./Component/Contact";
import Footer from "./Component/Header/Footer";

export default function Page() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
