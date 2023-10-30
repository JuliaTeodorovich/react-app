import "./Form.css";
import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonModal from "../ButtonsModal/ButtonsModal";

const validationSchema = Yup.object().shape({
  category: Yup.string().required("This field is required"),
  name: Yup.string().required("This field is required"),
  quantity: Yup.number()
    .required("This field is required")
    .min(1, "Quantity must be greater than 0"),
  price: Yup.number()
    .required("This field is required")
    .min(1, "Price must be greater than 0"),
  description: Yup.string().required("This field is required"),
});

const FormModal = ({ product, isOpen, onSubmit, onCancel }) => {
  const formikRef = useRef(null);

  const submitForm = () => {
    if (formikRef.current) {
      formikRef.current.submitForm();
    }
  };
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <Formik
          initialValues={{
            id: product.id,
            category: product.category || "",
            name: product.name || "",
            img: product.img,
            quantity: product.quantity || 0,
            price: product.price || 0,
            description: product.description || "",
            descrName1: product.descrName1,
            descr1: product.descr1,
            descrName2: product.descrName2,
            descr2: product.descr2,
            descrName3: product.descrName3,
            descr3: product.descr3,
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {({ isSubmitting, touched, errors }) => (
            <Form className="form">
              <div className="form-group">
                <label>
                  Category
                  <Field
                    type="text"
                    name="category"
                    style={
                      touched.category && errors.category
                        ? { border: "1px solid red" }
                        : {}
                    }
                  />
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="error-message"
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Name
                  <Field
                    type="text"
                    name="name"
                    style={
                      touched.name && errors.name
                        ? { border: "1px solid red" }
                        : {}
                    }
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error-message"
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Quantity
                  <Field
                    type="number"
                    name="quantity"
                    style={
                      touched.quantity && errors.quantity
                        ? { border: "1px solid red" }
                        : {}
                    }
                  />
                  <ErrorMessage
                    name="quantity"
                    component="div"
                    className="error-message"
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Price
                  <Field
                    type="number"
                    name="price"
                    style={
                      touched.price && errors.price
                        ? { border: "1px solid red" }
                        : {}
                    }
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="error-message"
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Description
                  <Field
                    type="text"
                    name="description"
                    className="description-input"
                    style={
                      touched.description && errors.description
                        ? { border: "1px solid red" }
                        : {}
                    }
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="error-message"
                  />
                </label>
              </div>
              <div className="btns-modal">
                <ButtonModal
                  color={"btn-modal cancel-edit"}
                  text="Cancel"
                  onClick={onCancel}
                  type="button"
                />
                <ButtonModal
                  type="submit"
                  disabled={isSubmitting}
                  color="btn-modal submit"
                  text="Submit"
                  onClick={submitForm}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormModal;
