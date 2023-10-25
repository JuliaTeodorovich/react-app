import React, { useState, useEffect } from "react";
import "./ProductsTable.css";
import { API_URL } from "../../constants/const";
import Header from "../../components/Header/Header";
import Button from "../../components/ButtonsTable/ButtonsTable";
import Table from "../../components/Table/Table";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import ProductModal from "../../components/ProductModal/ProductModal"; // Імпортуйте компонент ProductModal
import { Link } from "react-router-dom";

function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [isProductsLoaded, setIsProductsLoaded] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

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

  const handleDelete = async (id) => {
    const apiUrl = `${API_URL}/api/products/${id}`;
    try {
      await fetch(apiUrl, {
        method: "DELETE",
      });
      setIsProductsLoaded(false);
      handleCloseDeleteModal();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };

  const handleOpenEditModal = (product) => {
    setOpenEditModal(true);
    setEditProduct(product);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setEditProduct(null);
  };

  const handleOpenDeleteModal = (id) => {
    setOpenDeleteModal(true);
    setDeleteId(id);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setDeleteId(null);
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
          onClick={handleOpenAddModal}
        />
      </div>
      <h2 className="header">Products</h2>
      <Table
        products={products}
        onDelete={handleOpenDeleteModal}
        onEdit={handleOpenEditModal}
      />
      <ProductModal
        open={openAddModal}
        handleClose={handleCloseAddModal}
        action="add"
        onCancel={handleCloseAddModal}
        onSubmit={handleCloseAddModal}
      />
      <ProductModal
        open={openEditModal}
        handleClose={handleCloseEditModal}
        action="edit"
        onCancel={handleCloseEditModal}
        product={editProduct}
        onSubmit={handleCloseEditModal}
      />
      <ProductModal
        open={openDeleteModal}
        handleClose={handleCloseDeleteModal}
        action="delete"
        onCancel={handleCloseDeleteModal}
        onSubmit={() => handleDelete(deleteId)}
      />
    </div>
  );
}

export default ProductsTable;
