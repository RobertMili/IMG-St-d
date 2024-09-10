import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = useCallback(() => setClick((prev) => !prev), []);
  const closeMobileMenu = useCallback(() => {
    setClick(false);
    setDropdown(false); // Close dropdown when closing mobile menu
  }, []);
  const toggleDropdown = useCallback(() => setDropdown((prev) => !prev), []);

  useEffect(() => {
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setDropdown(false);
      }
    };
    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

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
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item" onClick={toggleDropdown}>
            <span className="nav-links">
              Boendeinfo <i className="fas fa-caret-down" />
            </span>
            {dropdown && (
              <ul className="dropdown-menu">
                
                  <Link to="/rules" className="dropdown-link" onClick={closeMobileMenu}>
                    Trivselregler
                  </Link>
              
            
                  <Link to="/garage" className="dropdown-link" onClick={closeMobileMenu}>
                    Garage
                  </Link>
               
                  <Link to="/el_water" className="dropdown-link" onClick={closeMobileMenu}>
                    El & Varmvatten
                  </Link>
               
                  <Link to="/tv" className="dropdown-link" onClick={closeMobileMenu}>
                    Tv & Internet
                  </Link>
                
                  <Link to="/garbage" className="dropdown-link" onClick={closeMobileMenu}>
                    Soprum
                  </Link>
               
                  <Link to="/news" className="dropdown-link" onClick={closeMobileMenu}>
                    Nyheter
                  </Link>
                
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;