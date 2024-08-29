import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FaGlobe, FaChevronDown } from 'react-icons/fa';
import "../styles/nav.css";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  const [language, setLanguage] = useState('English');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);

    // Add logic here to change the language of the content
    // Example:
    // if (lang === 'Pidgin') {
    //   // Change content to Pidgin
    // } else {
    //   // Change content to English
    // }
  };


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
      if (window.innerWidth > 900) {
        setIsOpen(false); // Close menu if resizing above 900px
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }
  }, [isOpen]);

  const toggleMenu = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div className="home__nav" data-aos="fade-down">
        <RouterLink to="/">
          <img
            src="https://res.cloudinary.com/dw3vqhvte/image/upload/v1724857318/kekelogo_ww5qlb.svg"
            alt=""
          />
        </RouterLink>

        <ul className={`${isOpen ? "open" : ""}`}>
          <li>
            <ScrollLink
              to="how"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="nav_link"
            >
              how does it work?
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              to="why"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="nav_link"
            >
              Why Choose keke?
            </ScrollLink>
          </li>

          <li>
            <div
              className="nav_link Language_selector"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <FaGlobe className="icon-left" />
              <span className="language-text">{language}</span>
              <FaChevronDown className="icon-right" />
            </div>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => handleLanguageChange("English")}>English</li>
                <li onClick={() => handleLanguageChange("Pidgin")}>Pidgin</li>
              </ul>
            )}
          </li>

          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="nav_link nav_download"
            >
              DOWNLOAD APP
            </ScrollLink>
          </li>

          {/* <div className="dropdown">
            <span className="colors"></span>
          </div> */}
        </ul>
{/* 
        <li>
            <div
              className="nav_link Language_selector"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              <FaGlobe className="icon-left" />
              <span className="language-text">{language}</span>
              <FaChevronDown className="icon-right" />
            </div>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => handleLanguageChange("English")}>English</li>
                <li onClick={() => handleLanguageChange("Pidgin")}>Pidgin</li>
              </ul>
            )}
          </li> */}

        <button
          className={`${isOpen ? "menu open" : "menu"}`}
          onClick={toggleMenu}
        >
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line bottom"></span>
        </button>

        
      </div>
    </>
  );
};
