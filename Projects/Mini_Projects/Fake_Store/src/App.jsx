import React from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Product from "./assets/Pages/Product";
import Contact from "./assets/Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
