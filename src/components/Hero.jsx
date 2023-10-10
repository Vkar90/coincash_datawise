import { useState, useEffect } from "react";

import "../styles/hero.scss";
import iphone from "../assets/iphone.svg";
import mobileIphone from "../assets/mobile_hero_image.svg";
import Header from "./Header";

const Hero = () => {
  // state to hold the button text, hero image and window width
  const [buttonText, setButtonText] = useState("Download now for free");
  const [heroImage, setHeroImage] = useState(iphone);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //listen for window resizes and update the windowWidth state
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    //cleanup the event listener to avoid memory leaks
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //update the button text based on the window width
  useEffect(() => {
    setButtonText(windowWidth <= 900 ? "Get the app" : "Download now for free");
    setHeroImage(windowWidth <= 900 ? mobileIphone : iphone);
  }, [windowWidth]);

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
              <button className="hero-button">{buttonText}</button>
            </div>
          </div>
          <div className="hero-img">
            <img src={heroImage} alt="Describe your image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
