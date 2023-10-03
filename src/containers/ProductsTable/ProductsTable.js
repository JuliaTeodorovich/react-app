import "./ProductsTable.css";
import { LogoTable } from "../../components/Logo/Logo";
import {
  ButtonPreview,
  ButtonAdd,
} from "../../components/ButtonsTable/ButtonsTable";
import Table from "../../components/Table/Table";

function ProductsTable() {
  return (
    <div className="Table">
      <header className="Table-header">
        <LogoTable />
        <div className="btns">
          <ButtonPreview />
          <ButtonAdd />
        </div>
        <h2 className="header">Products</h2>
        <Table />
      </header>
    </div>
  );
}

export default ProductsTable;
