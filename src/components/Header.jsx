import { useState } from "react";
import mainLogo from "../assets/logo_main.svg";
import burger from "../assets/menu.svg";
import "../styles/header.scss";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={mainLogo} alt="logo" className="logo" />
      </div>
      <div className="menu-container desktop-menu">
        <ul className="menu">
          <li className="menu-item">Features</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Contact</li>
        </ul>
        <div className="cta">
          <button className="header-cta">Get the app</button>
        </div>
      </div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mobile-menu-button"
      >
        <img src={burger} alt="mobile menu" />
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
