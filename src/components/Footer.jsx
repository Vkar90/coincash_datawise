import logoWhite from "../assets/logo_white.svg";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <NewsletterForm />
        <div className="footer-bottom">
          <div className="logo-container">
            <img src={logoWhite} alt="coincash logo" className="footer-logo" />
          </div>
          <div className="footer-menu-container">
            <ul className="footer-menu">
              <li className="footer-menu-item">Privacy Policy</li>
              <li className="footer-menu-item">Terms and conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
