import "./ProductDescription.css";
import React, { useState, useEffect } from "react";
import { API_URL } from "../../constants/const";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { BsArrowLeft } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";

const ProductDescription = () => {
  const [product, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const apiUrl = `${API_URL}/api/products/${id}`;

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
  }, [id]);

  return (
    <div className="Product-description">
      <Header />
      <div key={product.id}>
        <div className="description-block">
          <div className="info-header">
            <Link to={"/products-preview"}>
              <BsArrowLeft className="arrow" />{" "}
            </Link>{" "}
            <p className="info-header-name">{product.description}</p>{" "}
          </div>
          <div className="info-descr">
            <img src={product.img} className="img-descr" alt="product" />
            <div className="info-descr-text">
              <p className="status-desrc">
                {" "}
                <BsPatchCheck className="check-status" />Є в наявності
              </p>
              <p className="price-desrc">{product.price}₴</p>
              <p className="amount-desrc">Кількість: {product.quantity}</p>
            </div>
          </div>
          <div>
            <div>
              <span className="info-header-name">Опис</span>
              <span className="info-name">{product.description}</span>
            </div>
            <p className="info-text bold">{product.descrName1}</p>
            <p className="info-text">{product.descr1}</p>
            <p className="info-text bold">{product.descrName2}</p>
            <p className="info-text">{product.descr2}</p>
            <p className="info-text bold">{product.descrName3}</p>
            <p className="info-text">{product.descr3}</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default ProductDescription;
