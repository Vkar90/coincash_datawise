import PropTypes from "prop-types";

const ImageWithText = ({ imageFirst, imageSrc, title, subtitle }) => {
  return (
    <div className="image-with-text-container">
      {imageFirst ? (
        <>
          <img src={imageSrc} alt="image" className="image-with-text-image" />
          <div className="text-container">
            <h3 className="image-with-text-title">{title}</h3>
            <p className="image-with-text-subtitle">{subtitle}</p>
          </div>
        </>
      ) : (
        <>
          <div className="text-container">
            <h3 className="image-with-text-title">{title}</h3>
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
