import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
    }
  }, [controls, inView]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        ref={ref}
        initial={{ y: 100, opacity: 0, duration: 0.5 }}
        animate={controls}
        className="main-section-image-container"
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
