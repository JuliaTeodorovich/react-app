import React, { useState, useEffect } from "react";
import "./ProductsPreview.css";
import Logo from "../../components/Logo/Logo";
import logoImageTable from "../../assets/Logo_table.svg";
import PreviewCard from "../../components/PreviewCards/PreviewCards";

function ProductsPreview() {
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

  const filteredProducts = products.filter((product) => product.id === 0);

  return (
    <div className="Preview">
      <header className="Preview-header">
        <Logo src={logoImageTable} className="logo-table" />
        <div className="Preview-block">
          <PreviewCard products={filteredProducts} />
          <PreviewCard products={filteredProducts} />
          <PreviewCard products={filteredProducts} />
          <PreviewCard products={filteredProducts} />
          <PreviewCard products={filteredProducts} />
          <PreviewCard products={filteredProducts} />
        </div>
      </header>
    </div>
  );
}

export default ProductsPreview;
