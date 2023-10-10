import "./PreviewCards.css";
import { BsCart4 } from "react-icons/bs";

const PreviewCard = ({ products }) => {
  return (
    <div className="preview-card">
      {products.map((item) => (
        <div key={item.id}>
          <img
            src="https://www.mall.cz/i/17555609/550/550"
            className="img"
            alt="product"
          />
          <p className="descr">{item.description}</p>
          <div className="info">
            <p className="price">{item.price}</p>
            <p className="amount">Кількість: {item.quantity}</p>
          </div>
          <div className="btn-send">
            <BsCart4 className="logo" />
            <p className="ready-to-send">Готовий до відправки</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PreviewCard;
