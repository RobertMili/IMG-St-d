import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Biography from "./components/pages/Biography/Biography";
import News from "./components/pages/News/News";
import Admin from "./components/pages/Admin/Admin";
import Rules from "./components/pages/Rules/Rules";
import Garage from "./components/pages/Garage/Garage";
import El_water from "./components/pages/El-water/El-water";
import Tv_internet from "./components/pages/TV/TV_internet";
import Garbage from "./components/pages/Garbage/Garbage";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/news" element={<News isAdmin={isAdmin} />} />
            <Route path="/admin" element={<Admin setIsAdmin={setIsAdmin} />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/garage" element={<Garage />} />
            <Route path="/el_water" element={<El_water />} />
            <Route path="/tv" element={<Tv_internet />} />
            <Route path="/garbage" element={<Garbage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;