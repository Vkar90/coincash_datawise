import mainLogo from "../assets/logo_main.svg";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo-container">
        <img src={mainLogo} alt="logo" className="logo" />
      </div>
      <div className="menu-container">
        <ul className="menu">
          <li className="menu-item">Features</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Contact</li>
        </ul>
        <div className="cta">
          <button className="header-cta">Get the app</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
