import PropTypes from "prop-types";
import imageLeft from "../assets/image_left.jpg";
import imageRight from "../assets/image_right.jpg";

const ImageWithText = ({ imageFirst }) => {
  return (
    <div className="image-with-text-container">
      {imageFirst ? (
        <>
          <img src={imageLeft} alt="image" className="image-with-text-image" />
          <div className="text-container">
            <h3 className="image-with-text-title">Shop anywhere</h3>
            <p className="image-with-text-subtitle">
              The easiest way to use your cryptocurrencies for everyday
              purchases.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="text-container">
            <h3 className="image-with-text-title">Zero fees</h3>
            <p className="image-with-text-subtitle">
              The easiest way to use your cryptocurrencies for everyday
              purchases.
            </p>
          </div>
          <img src={imageRight} alt="image" className="image-with-text-image" />
        </>
      )}
    </div>
  );
};

ImageWithText.propTypes = {
  imageFirst: PropTypes.bool.isRequired,
};

export default ImageWithText;
