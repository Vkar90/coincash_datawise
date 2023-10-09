import IconList from "./IconList";
import ImageWithText from "./ImageWithText";

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="heading-container">
        <h2 className="section-heading">Buy anything you ever imagine</h2>
        <h3 className="section-subheading">
          The easiest way to use your cryptocurrencies for everyday purchases.
        </h3>
      </div>
      <IconList />
      <ImageWithText imageFirst={true} />
      <ImageWithText imageFirst={false} />
    </div>
  );
};

export default MainSection;
