import Login from "./containers/Login/Login";
import ProductsTable from "./containers/ProductsTable/ProductsTable";
import ProductsPreview from "./containers/ProductsPreview/ProductsPreview";
import ProductDescription from "./containers/ProductDescription/ProductDescription";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/products-table" element={<ProductsTable />} />
        <Route path="/products-preview" element={<ProductsPreview />} />
        <Route
          path="/products-description/:id"
          element={<ProductDescription />}
        />
      </Route>
      <Route path="*" element={<div>404. Page is not found!</div>} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
