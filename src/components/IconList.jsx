import PropTypes from "prop-types";
import IconItem from "./IconItem";
const IconList = ({ items }) => {
  return (
    <div className="icon-row" role="list">
      {items.map((item, index) => (
        <div role="listitem" key={index}>
          <IconItem {...item} />
        </div>
      ))}
    </div>
  );
};

IconList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default IconList;
