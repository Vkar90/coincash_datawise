import PropTypes from "prop-types";

const IconItem = ({ iconSrc, description, highlight, altText }) => {
  return (
    <div className="icon-item" role="figure" aria-labelledby="icon-description">
      <img src={iconSrc} alt={altText || "icon"} className="icon-image" />
      <p id="icon-description" className="icon-description">
        {description.beforeHighlight} <br />
        <span className="blue-color">{highlight}</span>{" "}
        {description.afterHighlight}
      </p>
    </div>
  );
};

IconItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  highlight: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

export default IconItem;
