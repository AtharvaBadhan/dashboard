import React, { useState } from "react";
import "./SignUp.css";
import backgroundImage from "../../Assets/15517704_5630939.jpg";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [dataArray, setDataArray] = useState([]);
  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with signup logic
      console.log("Form submitted:", formData);
      setDataArray([...dataArray, formData]);
      // Reset form

      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    
      setErrors({});
    }
    const jsonData = JSON.stringify(dataArray);

    console.log(jsonData);
  };

  return (
    <div className="container">
      <div
        className="container-left"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="inner-container">
          <div className="content">
            <h1>Dashboard</h1>
            <h3>Signing Up...</h3>
            <h2>Please Sign Up to get access.</h2>
            <p>
              Employees are required to log in while joining. 1000+ have already
              signed up, it's your turn.
            </p>
            <h3>Already Have an Account?</h3>
            <Link to="/">Sign In</Link>
          </div>
        </div>
      </div>
      <div className="container-right">
        <div className="heading">
          <h2>Hello, Welcome to ESDS.</h2>
          <h2>Create Account</h2>
        </div>
        <div className="form-action">
          <form onSubmit={handleSubmit}>
            <div className="f-name">
              <label htmlFor="f-name">Name:</label>
              <input
                type="text"
                id="f-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="f-name">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="f-name">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="f-name">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="create-account"
                name="create-account"
              />
              <label htmlFor="create-account">
                Creating your account{" "}
                <span>by accepting our terms and conditions.</span>
              </label>
            </div>
            <div className="submit-button">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
