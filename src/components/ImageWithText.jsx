import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ImageWithText = ({ imageFirst, imageSrc, title, subtitle }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const wiggleAnimation = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.05, 1],
      transition: {
        repeat: 3,
        duration: 0.3,
      },
    },
  };

  return (
    <div className="image-with-text-container">
      {imageFirst ? (
        <>
          <img src={imageSrc} alt="image" className="image-with-text-image" />
          <div className="text-container" ref={ref}>
            <motion.h3
              className="image-with-text-title"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={wiggleAnimation}
            >
              {title}
            </motion.h3>
            <p className="image-with-text-subtitle">{subtitle}</p>
          </div>
        </>
      ) : (
        <>
          <div className="text-container" ref={ref}>
            <motion.h3
              className="image-with-text-title"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={wiggleAnimation}
            >
              {title}
            </motion.h3>
            <p className="image-with-text-subtitle">{subtitle}</p>
          </div>
          <img src={imageSrc} alt="image" className="image-with-text-image" />
        </>
      )}
    </div>
  );
};

ImageWithText.propTypes = {
  imageFirst: PropTypes.bool.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default ImageWithText;
