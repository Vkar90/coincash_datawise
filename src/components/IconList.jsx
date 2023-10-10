import PropTypes from "prop-types";
import IconItem from "./IconItem";
const IconList = ({ items }) => {
  return (
    <div className="icon-row">
      {items.map((item, index) => (
        <IconItem key={index} {...item} />
      ))}
    </div>
  );
};

IconList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default IconList;
