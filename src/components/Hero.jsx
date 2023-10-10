import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/hero.scss";
import iphone from "../assets/iphone.svg";
import mobileIphone from "../assets/mobile_hero_image.svg";

import Header from "./Header";

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, duration: 1 },
    visible: { opacity: 1 },
  };

  // state and variables for color changing text
  const text = "COINCASH";
  const [colors, setColors] = useState(Array(text.length).fill("black"));
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

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

  const runEffect = () => {
    const timeouts = [];
    for (let i = 0; i < text.length; i++) {
      const timeout = setTimeout(() => {
        setColors((prevColors) => {
          // Copy the previous colors array
          const newColors = [...prevColors];
          // Set the color of the character at index i to primary
          newColors[i] = "#0066ff";
          // Return the updated colors array
          return newColors;
        });
      }, i * 200); // Adjust delay as needed
      timeouts.push(timeout);
    }
    return () => timeouts.forEach(clearTimeout);
  };

  useEffect(() => {
    if (inView) {
      // Reset colors to initial state
      setColors(Array(text.length).fill("black"));
      // Run the effect
      runEffect();
    }
  }, [inView]);

  return (
    <section className="hero" ref={ref}>
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
              <button className="hero-button">{buttonText}</button>
            </div>
          </div>
          <div className="hero-img">
            <motion.img
              src={heroImage}
              alt="coincash feature image"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
