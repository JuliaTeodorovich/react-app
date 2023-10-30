import React, { useState, useEffect } from "react";
import "./ProductsPreview.css";
import { Link } from "react-router-dom";
import { API_URL } from "../../constants/const";
import Header from "../../components/Header/Header";
import PreviewCard from "../../components/PreviewCards/PreviewCards";
import { BsArrowLeft } from "react-icons/bs";

function ProductsPreview() {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="Preview">
      <Header />
      <Link to={"/products-table"}>
        <BsArrowLeft className="arrow-preview" />{" "}
      </Link>{" "}
      <PreviewCard products={products} />
    </div>
  );
}

export default ProductsPreview;
