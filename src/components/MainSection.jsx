import { useEffect, useState } from "react";
import IconList from "./IconList";
import ImageWithText from "./ImageWithText";

import imageLeft from "../assets/image_left.jpg";
import imageRight from "../assets/image_right.jpg";

const MainSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  return (
    <div className="main-section">
      <div className="heading-container">
        <h2 className="section-heading">Buy anything you ever imagine</h2>
        <h3 className="section-subheading">
          The easiest way to use your cryptocurrencies for everyday purchases.
        </h3>
      </div>
      <IconList />
      <ImageWithText
        imageFirst={windowWidth <= 500 ? true : true}
        imageSrc={imageLeft}
        title="Shop anywhere"
        subtitle="The easiest way to use your
      cryptocurrencies for everyday purchases."
      />
      <ImageWithText
        imageFirst={windowWidth <= 500 ? true : false}
        imageSrc={imageRight}
        title="Zero fees"
        subtitle="Enjoy zero fees on all purchases."
      />
    </div>
  );
};

export default MainSection;
