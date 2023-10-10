import PropTypes from "prop-types";

const IconItem = ({ iconSrc, description, highlight }) => {
  return (
    <div className="icon-item">
      <img src={iconSrc} alt="icon" className="icon-image" />
      <p className="icon-description">
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
};

export default IconItem;
