import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = useCallback(() => setClick((prev) => !prev), []);
  const closeMobileMenu = useCallback(() => {
    setClick(false);
    setDropdown(false); // Close dropdown when closing mobile menu
  }, []);
  const toggleDropdown = useCallback(() => setDropdown((prev) => !prev), []);

  const showButton = useCallback(() => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, []);

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, [showButton]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Brf Stjärnbildsgatan&nbsp;
          <i className="fas fa-home" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>

          <li className="nav-item">
            <Link to="/rules" className="nav-links" onClick={closeMobileMenu}>
             Trivselregler
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/garage" className="nav-links" onClick={closeMobileMenu}>
             Garage
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/el_water" className="nav-links" onClick={closeMobileMenu}>
              El & Varmvatten
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tv" className="nav-links" onClick={closeMobileMenu}>
              Tv & Internet
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/garbage" className="nav-links" onClick={closeMobileMenu}>
              Soprum
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-links" onClick={closeMobileMenu}>
              Nyheter
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;