import React, { useEffect, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import logo from "../../assets/images/logo.png";
import dl from "../../assets/images/dl.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#91a8d0") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    // Toggle body class
    document.body.classList.toggle("dark-mode");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ScrollToTop smooth width="15px" height="15px" color="red" />
      <header>
        <nav
          id="nav"
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s",
          }}
        >
          <div className="container navbar">
            <div className="navbar-left">
              <div className="navbar-left__logo">
                <img src={logo} alt="" />
              </div>
              <div className="navbar-left__title">
                <h3 className={`${isDarkMode ? "red-text" : ""}`}>Product</h3>
              </div>
            </div>
            <div className="navbar-right">
              <div className={isMenuOpen ? "menu-open" : ""}>
                <div className="navbar-right__mobile">
                  <ul className="navbar-right__links">
                    <li>Product</li>
                    <li>Customers</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                  </ul>
                  <div className="navbar-right__btns">
                    <button>Sign In</button>
                    <button>Sign Up</button>
                  </div>
                </div>
                {isMenuOpen && (
                  <div className="menu-window">
                    <div
                      className={`close-icon ${isDarkMode ? "red-text" : ""}`}
                      onClick={closeMenu}
                    >
                      <AiOutlineClose />
                    </div>
                    <ul className={`links ${isDarkMode ? "red-text" : ""}`}>
                      <li>Product</li>
                      <li>Customers</li>
                      <li>Pricing</li>
                      <li>Resources</li>
                    </ul>
                    <div className="navbar-right__btns">
                      <button>Sign In</button>
                      <button>Sign Up</button>
                    </div>
                  </div>
                )}
              </div>
              <div className="menu-icon" onClick={toggleMenu}>
                <AiOutlineMenu />
              </div>
              <div className="navbar-right__ld" onClick={toggleDarkMode}>
                <img src={dl} alt="" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
