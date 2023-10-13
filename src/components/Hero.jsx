import { useState, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/hero.scss";
import iphone from "../assets/iphone.svg";
import mobileIphone from "../assets/mobile_hero_image.svg";

import Header from "./Header";
import useColorEffect from "../hooks/useColorEffect";

const Hero = () => {
  // state and variables for color changing text
  const text = "COINCASH";
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  // state to hold the  window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //listen for window resizes and update the windowWidth state
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    //cleanup the event listener to avoid memory leaks
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [buttonText, heroImage] = useMemo(() => {
    return windowWidth <= 900
      ? ["Get the app", mobileIphone]
      : ["Download now for free", iphone];
  }, [windowWidth]);

  const colors = useColorEffect(text, inView);

  return (
    <section
      className="hero"
      ref={ref}
      aria-labelledby="hero-heading"
      role="region"
    >
      <div className="hero-container">
        <Header />
        <div className="hero-content-container">
          <div className="hero-cta-container">
            <div className="hero-text-container">
              <h1 className="hero-cta">
                You can buy anything {windowWidth <= 500 && <br />} with
                {"\u00A0"}
                {text.split("").map((letter, index) => (
                  <span
                    key={index}
                    className={`letter ${
                      colors.includes(index) ? "letter-blue" : ""
                    }`}
                    style={{ color: colors[index] }}
                  >
                    {letter}
                  </span>
                ))}
              </h1>
              <h2 className="hero-cta-description">
                The easiest way to use your cryptocurrencies for everyday
                purchases.
              </h2>
            </div>
            <div className="hero-button-container">
              <button className="hero-button" aria-label={buttonText}>
                {buttonText}
              </button>
            </div>
          </div>
          <div className="hero-img">
            <img src={heroImage} alt="Feature demonstration of CoinCash" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
