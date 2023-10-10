import { useState } from "react";
import mainLogo from "../assets/logo_main.svg";
import burger from "../assets/menu.svg";
import "../styles/header.scss";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="main-header" role="banner" aria-label="Main Header">
      <div className="logo-container">
        <img src={mainLogo} alt="coincash logo" className="logo" />
      </div>
      <div
        className="menu-container desktop-menu"
        aria-label="Desktop Navigation Menu"
      >
        <ul className="menu" role="menu">
          <li className="menu-item" role="menuitem">
            Features
          </li>
          <li className="menu-item" role="menuitem">
            About
          </li>
          <li className="menu-item" role="menuitem">
            Contact
          </li>
        </ul>
        <div className="cta">
          <button className="header-cta" role="link" aria-label="Get the App">
            Get the app
          </button>
        </div>
      </div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mobile-menu-button"
        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isMenuOpen}
      >
        <img src={burger} alt="mobile menu icon" />
      </button>
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <MobileMenu
            isMenuOpen={isMenuOpen}
            toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
