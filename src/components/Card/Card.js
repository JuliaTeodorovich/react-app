import React, { useState } from "react";
import Logo from "../Logo/Logo";
import logoImageLogin from "../../assets/Logo_login.svg";
import Button from "../ButtonLogin/ButtonLogin";
import Input from "../Input/Input";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });

  const [errorVisible, setErrorVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [name]: value,
    }));
    setErrors({});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorVisible(false);
    setSuccessVisible(false);
    const newErrors = {};
    newErrors.name = "";
    newErrors.password = "";

    if (!formFields.name.trim()) {
      newErrors.name = "is required";
    }
    if (!formFields.password.trim()) {
      newErrors.password = "is required";
    }
    setErrors(newErrors);

    try {
      const response = await fetch(
        `http://localhost:${process.env.REACT_APP_DATA}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formFields.name,
            password: formFields.password,
          }),
        }
      );
      if (!newErrors.name && !newErrors.password) {
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("token", data.token);
          navigate("/products-table");
          setSuccessVisible(true);
          setErrorVisible(false);
        } else {
          setErrorVisible(true);
          setSuccessVisible(false);
          setErrors({
            general: "Login failed. Please check your credentials.",
          });
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
          type={passwordVisible ? "text" : "password"}
          id="password"
          name="password"
          value={formFields.password}
          onChange={handleChange}
          className={`input ${errors.password ? "error" : ""}`}
          placeholder={`Password ${errors.password ? errors.password : ""}`}
          showPasswordIcon={true}
          passwordVisible={passwordVisible}
          onTogglePasswordVisibility={togglePasswordVisibility}
        />
        <Button />
        {errorVisible && (
          <div className="error-message">Incorrect username or password</div>
        )}
        {successVisible && (
          <div className="success-message">Login successful!</div>
        )}
      </form>
    </div>
  );
};

export default Card;
