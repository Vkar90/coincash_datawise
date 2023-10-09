import airplaneTicket from "../assets/Airplane Ticket.svg";
import cart from "../assets/Cart.svg";
import page from "../assets/Page.svg";

const IconList = () => {
  return (
    <div className="icon-row">
      <div className="icon-item">
        <img src={airplaneTicket} alt="icon" className="icon-image" />
        <p className="icon-description">
          You can <br></br>
          <span className="blue-color">book</span> tickets
        </p>
      </div>
      <div className="icon-item">
        <img src={cart} alt="icon" className="icon-image" />
        <p className="icon-description">
          You can <br></br> <span className="blue-color">buy</span> groceries
        </p>
      </div>
      <div className="icon-item">
        <img src={page} alt="icon" className="icon-image" />
        <p className="icon-description">
          You can <br></br> <span className="blue-color">pay</span> your bills
        </p>
      </div>
    </div>
  );
};

export default IconList;
