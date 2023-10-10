import logoWhite from "../assets/logo_white.svg";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  return (
    <footer aria-label="Main Footer">
      <div className="footer-container">
        <NewsletterForm />
        <div className="footer-bottom">
          <div className="logo-container">
            <img
              src={logoWhite}
              alt="coincash logo"
              className="footer-logo"
              role="img"
              aria-label="CoinCash Logo"
            />
          </div>
          <div className="footer-menu-container">
            <nav aria-label="Footer Navigation">
              <ul className="footer-menu">
                <li className="footer-menu-item">Privacy Policy</li>
                <li className="footer-menu-item">Terms and conditions</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
