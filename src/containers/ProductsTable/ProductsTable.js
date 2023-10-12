import React, { useState, useEffect } from "react";
import "./ProductsTable.css";
import Logo from "../../components/Logo/Logo";
import logoImageTable from "../../assets/Logo_table.svg";
import Button from "../../components/ButtonsTable/ButtonsTable";
import Table from "../../components/Table/Table";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

function ProductsTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:${process.env.REACT_APP_DATA}/api/products`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="Table">
      <header className="Table-header">
        <Logo src={logoImageTable} className="logo-table" />
        <div className="btns">
          <Button
            buttonLogo={<AiOutlineUser className="logo" />}
            buttonText="Preview"
          />
          <Button
            buttonLogo={<AiOutlinePlus className="logo" />}
            buttonText="Add product"
          />
        </div>
        <h2 className="header">Products</h2>
        <Table products={products} />
      </header>
    </div>
  );
}

export default ProductsTable;
