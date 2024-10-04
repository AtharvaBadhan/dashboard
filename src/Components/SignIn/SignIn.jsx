import React, { useState } from "react";
import './SignIn.css';
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the specific error when the user starts typing
    if (name === "email" && errors.email) {
      setErrors({ ...errors, email: null });
    } else if (name === "password" && errors.password) {
      setErrors({ ...errors, password: null });
    } else if (name === "create-account" && errors.terms) {
      setErrors({ ...errors, terms: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
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
    if (!isTermsAccepted) {
      newErrors.terms = "You must accept the terms and conditions.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically handle authentication logic
      console.log("Form submitted:", formData);

      // Redirect to home page after successful sign-in
      navigate("/home");
      setErrors({});
    }
  };

  return (
    <div className="container">
      <div className="signin-container-left">
        <h1>Get Started</h1>
        <p>Sign In to get access to your portal.</p>
        <div className="buttons">
          <button className="button-google">Sign In Using Google+</button>
          <button className="button-google">Sign In Using Outlook</button>
        </div>
      </div>
      <div className="signin-container-right">
        <div className="heading">
          <h2>Hello, Welcome to ESDS.</h2>
          <h2>Sign In</h2>
        </div>
        <div className="form-action">
          <form onSubmit={handleSubmit}>
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
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="create-account"
                name="create-account"
                checked={isTermsAccepted}
                onChange={() => {
                  setIsTermsAccepted(!isTermsAccepted);
                  if (errors.terms) {
                    setErrors({ ...errors, terms: null });
                  }
                }}
              />
              <label htmlFor="create-account">
                Login to your account{" "}
                <span>by accepting our terms and conditions.</span>
              </label>
              {errors.terms && (
                <p className="error">{errors.terms}</p>
              )}
            </div>
            <div className="submit-button">
              <button type="submit">Sign In</button>
            </div>
            <div className="bottom-link">
              <Link to='/forgotpassword'>Forgot Password?</Link>
              <p>Don't have an account? <Link to="/signup">Sign Up here.</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
