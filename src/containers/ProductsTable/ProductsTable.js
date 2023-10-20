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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = `${API_URL}/api/products`;
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

    fetchProducts();
  }, []);

  const deleteItem = async (id) => {
    const apiUrl = `${API_URL}/api/products/${id}`;
    await fetch(apiUrl, {
      method: "DELETE",
    });

    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts);
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
