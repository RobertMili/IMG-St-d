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

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    closeMobileMenu();
    setDropdown(true);
  };

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
            <Link to="/" className="nav-links" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li className="nav-item" onClick={toggleDropdown}>
            <span className="nav-links">
              Boendeinfo <i className="fas fa-caret-down" />
            </span>
            {dropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/rules" className="dropdown-link" onClick={handleLinkClick}>
                    Trivselregler
                  </Link>
                </li>
                <li>
                  <Link to="/garage" className="dropdown-link" onClick={handleLinkClick}>
                    Garage
                  </Link>
                </li>
                <li>
                  <Link to="/el_water" className="dropdown-link" onClick={handleLinkClick}>
                    El & Varmvatten
                  </Link>
                </li>
                <li>
                  <Link to="/tv" className="dropdown-link" onClick={handleLinkClick}>
                    Tv & Internet
                  </Link>
                </li>
                <li>
                  <Link to="/garbage" className="dropdown-link" onClick={handleLinkClick}>
                    Soprum
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="dropdown-link" onClick={handleLinkClick}>
                    Nyheter
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;