import React, { useState, useEffect } from "react";
import "./ProductsTable.css";
import { API_URL } from "../../constants/const";
import Header from "../../components/Header/Header";
import Button from "../../components/ButtonsTable/ButtonsTable";
import Table from "../../components/Table/Table";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [isProductsLoaded, setIsProductsLoaded] = useState(false);

  useEffect(() => {
    if (!isProductsLoaded) {
      fetchProducts();
    }
  }, [isProductsLoaded]);

  const fetchProducts = async () => {
    try {
      const apiUrl = `${API_URL}/api/products`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data);
      setIsProductsLoaded(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteItem = async (id) => {
    const apiUrl = `${API_URL}/api/products/${id}`;
    try {
      await fetch(apiUrl, {
        method: "DELETE",
      });
      setIsProductsLoaded(false);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="Table">
      <Header />
      <div className="btns">
        <Link to={"/products-preview"} style={{ textDecoration: "none" }}>
          {" "}
          <Button
            buttonLogo={<AiOutlineUser className="logo" />}
            buttonText="Preview"
          />
        </Link>
        <Button
          buttonLogo={<AiOutlinePlus className="logo" />}
          buttonText="Add product"
        />
      </div>
      <h2 className="header">Products</h2>
      <Table products={products} onDelete={deleteItem} />
    </div>
  );
}

export default ProductsTable;
