import React, { useState } from "react";
import UsernameField from "./UsernameField ";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField ";
import ConfirmPasswordField from "./ConfirmPasswordField ";

const Signupform = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
console.log(errors)
  const handleClick = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const errors = {};
    if (formData.username === "") {
      errors.username = "Username is required";
    }
    if (formData.email === "") {
      errors.email = "Email is required";
    }
    if (formData.password === "") {
      errors.password = "Password is required";
    }
    if (formData.confirmPassword === "") {
      errors.confirmPassword = "Confirm password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleonSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully!");
      // Here you can submit your form data
    } else {
      console.log("Form validation failed!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "5rem",
      }}
    >
      <form
        onSubmit={handleonSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <UsernameField
          value={formData.username}
          onChange={(e) => {
            handleClick(e);
          }}
        />
        {errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
        <EmailField
          value={formData.email}
          onChange={(e) => {
            handleClick(e);
          }}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        <PasswordField
          value={formData.password}
          onChange={(e) => {
            handleClick(e);
          }}
        />
        {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
        <ConfirmPasswordField
          value={formData.confirmPassword}
          onChange={(e) => {
            handleClick(e);
          }}
        />
        {errors.confirmPassword && <span style={{ color: "red" }}>{errors.confirmPassword}</span>}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Signupform;
