import "./Form.css";
import React from "react";
import { Formik, Form, Field } from "formik";

const FormModal = ({ product, isOpen, onSubmit }) => {
  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <Formik
          initialValues={{
            category: product.category || "",
            name: product.name || "",
            quantity: product.quantity || 0,
            price: product.price || 0,
            description: product.description || "",
          }}
          onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form className="form">
              <label>
                Category
                <Field type="text" name="category" />
              </label>
              <label>
                Name
                <Field type="text" name="name" />{" "}
              </label>
              <label>
                Quantity
                <Field type="number" name="quantity" />{" "}
              </label>
              <label>
                Price
                <Field type="number" name="price" />{" "}
              </label>
              <label>
                Description
                <Field
                  type="text"
                  name="description"
                  className="description-input"
                />{" "}
              </label>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  ) : null;
};

export default FormModal;
