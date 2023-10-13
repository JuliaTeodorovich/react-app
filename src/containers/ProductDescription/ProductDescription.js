import "./ProductDescription.css";
import React, { useState, useEffect } from "react";
import { API_URL } from "../../constants/const";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { BsArrowLeft } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";

const ProductDescription = () => {
  const [products, setProducts] = useState([]);
  let { productId } = useParams();
  productId = Number(productId);
  useEffect(() => {
    const apiUrl = `${API_URL}/api/products`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter(
    (product) => product.id === Number(productId)
  );

  return (
    <div className="Product-description">
      <Header />{" "}
      {filteredProducts.map((item) => (
        <div key={item.id}>
          <div className="description-block">
            <div className="info-header">
              <Link to={"/products-preview"}>
                <BsArrowLeft className="arrow" />{" "}
              </Link>{" "}
              <p className="info-header-name">{item.description}</p>{" "}
            </div>
            <div className="info-descr">
              <img src={item.img} className="img-descr" alt="product" />
              <div className="info-descr-text">
                <p className="status-desrc">
                  {" "}
                  <BsPatchCheck className="check-status" />Є в наявності
                </p>
                <p className="price-desrc">{item.price}₴</p>
                <p className="amount-desrc">Кількість: {item.quantity}</p>
              </div>
            </div>
            <div>
              <div>
                <span className="info-header-name">Опис</span>
                <span className="info-name">{item.description}</span>
              </div>
              <p className="info-text bold">{item.descrName1}</p>
              <p className="info-text">{item.descr1}</p>
              <p className="info-text bold">{item.descrName2}</p>
              <p className="info-text">{item.descr2}</p>
              <p className="info-text bold">{item.descrName3}</p>
              <p className="info-text">{item.descr3}</p>
            </div>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default ProductDescription;
