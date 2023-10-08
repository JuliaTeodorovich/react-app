import React, { useState } from "react";
import Logo from "../Logo/Logo";
import logoImageLogin from "../../assets/Logo_login.svg";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Card.css";

const Card = ({ onLogin, users }) => {
  const [formFields, setFormFields] = useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [name]: value,
    }));
    onLogin();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};
    document.querySelector(".error-message").innerText = "";
    document.querySelector(".success-message").innerText = "";
    newErrors.name = "";
    newErrors.password = "";

    if (!formFields.name.trim()) {
      newErrors.name = "is required";
    }

    if (!formFields.password.trim()) {
      newErrors.password = "is required";
    }
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.password) {
      const authenticatedUser = users.find(
        (user) =>
          user.name === formFields.name && user.password === formFields.password
      );
      if (authenticatedUser) {
        document.querySelector(".error-message").innerText = "";
        document.querySelector(".success-message").innerText =
          "Login successful!";
        localStorage.setItem(
          "token",
          `User Name:${formFields.name}. Password:${formFields.password}.`
        );
      } else {
        document.querySelector(".error-message").innerText =
          "Incorrect username or password";
        document.querySelector(".success-message").innerText = "";
      }
    }
  };

  return (
    <div className="container-card">
      <Logo src={logoImageLogin} className="logo-login" />
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="name"
          name="name"
          value={formFields.name}
          onChange={handleChange}
          className={`input ${errors.name ? "error" : ""}`}
          placeholder={`User Name ${errors.name ? errors.name : ""}`}
        />
        <Input
          type="password"
          id="password"
          name="password"
          value={formFields.password}
          onChange={handleChange}
          className={`input ${errors.password ? "error" : ""}`}
          placeholder={`Password ${errors.password ? errors.password : ""}`}
          showPasswordIcon={true}
        />
        <Button />
        <div className="error-message"></div>
        <div className="success-message"></div>
      </form>
    </div>
  );
};

export default Card;
