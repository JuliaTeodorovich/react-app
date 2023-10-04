import "./ProductsTable.css";
import Logo from "../../components/Logo/Logo";
import logoImageTable from "../../assets/Logo_table.svg";
import Button from "../../components/ButtonsTable/ButtonsTable";
import Table from "../../components/Table/Table";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

function ProductsTable() {
  const products = [
    {
      id: 0,
      category: "PC",
      name: "Lenovo Y50-70",
      quantity: 5,
      price: 25000,
    },
    {
      id: 1,
      category: "Clothes",
      name: "Nike M Nk Df Acd21",
      quantity: 22,
      price: 4000,
    },
    {
      id: 2,
      category: "Plumbing",
      name: "CERSANIT MITO 17",
      quantity: 1337,
      price: 5000,
    },
  ];

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
