import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import IconList from "./IconList";
import ImageWithText from "./ImageWithText";

import airplaneTicket from "../assets/Airplane Ticket.svg";
import cart from "../assets/Cart.svg";
import page from "../assets/Page.svg";
import imageLeft from "../assets/image_left.jpg";
import imageRight from "../assets/image_right.jpg";

const iconItems = [
  {
    iconSrc: airplaneTicket,
    description: { beforeHighlight: "You can", afterHighlight: "tickets" },
    highlight: "book",
  },
  {
    iconSrc: cart,
    description: { beforeHighlight: "You can", afterHighlight: "groceries" },
    highlight: "buy",
  },
  {
    iconSrc: page,
    description: { beforeHighlight: "You can", afterHighlight: "your bills" },
    highlight: "pay",
  },
];

const MainSection = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 0.5 } });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  useEffect(() => {
    if (scrollY > 200) {
      // Change the 200 to whatever scroll position you want to trigger the animation
      controls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
    } else {
      controls.start({ y: 100, opacity: 0, transition: { duration: 1 } });
    }
  }, [scrollY, controls]);

  return (
    <div className="main-section">
      <div className="heading-container">
        <h2 className="section-heading">Buy anything you ever imagine</h2>
        <h3 className="section-subheading">
          The easiest way to use your cryptocurrencies for everyday purchases.
        </h3>
      </div>
      <IconList items={iconItems} />
      <motion.div
        initial={{ y: 100, opacity: 0, duration: 0.5 }}
        animate={controls}
        className="main-section__image-container"
      >
        <ImageWithText
          imageFirst={windowWidth <= 900 ? true : true}
          imageSrc={imageLeft}
          title="Shop anywhere"
          subtitle="The easiest way to use your
      cryptocurrencies for everyday purchases."
        />
        <ImageWithText
          imageFirst={windowWidth <= 900 ? true : false}
          imageSrc={imageRight}
          title="Zero fees"
          subtitle="Enjoy zero fees on all purchases."
        />
      </motion.div>
    </div>
  );
};

export default MainSection;
