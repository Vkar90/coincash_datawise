// Hero.jsx
import "../styles/hero.scss";
import iphone from "../assets/iphone.svg";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <Header />
        <div className="hero-content-container">
          <div className="hero-cta-container">
            <div className="hero-text-container">
              <h1 className="hero-cta">
                You can buy anything with
                <span className="brand-name"> COINCASH</span>
              </h1>
              <h2 className="hero-cta-description">
                The easiest way to use your cryptocurrencies for everyday
                purchases.
              </h2>
            </div>
            <div className="hero-button-container">
              <button className="hero-button">Download now for free</button>
            </div>
          </div>
          <div className="hero-img">
            <img src={iphone} alt="Describe your image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
