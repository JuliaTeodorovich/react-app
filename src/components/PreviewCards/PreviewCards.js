import "./PreviewCards.css";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

const PreviewCard = ({ products }) => {
  return (
    <div className="preview-block">
      {products.map((item) => (
        <div className="preview-card" key={item.id}>
          <Link
            to={`/products-description/${item.id}`}
            style={{ textDecoration: "none" }}>
            <div>
              <img src={item.img} className="img" alt="product" />
              <p className="descr-prew">{item.description}</p>
              <div className="info">
                <p className="price">{item.price}₴</p>
                <p className="amount">Кількість: {item.quantity}</p>
              </div>
              <div className="btn-send">
                <BsCart4 className="logo-prew" />
                <p className="ready-to-send">Готовий до відправки</p>
              </div>
            </div>{" "}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PreviewCard;
