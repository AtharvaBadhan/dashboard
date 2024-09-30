import React, {useState} from "react";
import './SignIn.css';
import { Link } from "react-router-dom";


export default function SignIn(){
  
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with signup logic
      console.log("Form submitted:", formData);
     
      setErrors({});
    }
  };


    return(
        <div className="container">
            <div className="signin-container-left">
                <h1>Get Started</h1>
                <p>Sign In to get access to your portal.</p>
                <div className="buttons">
                <button className="button-google"> Sign In Using Google+ </button>
                <button className="button-google"> Sign In Using Outlook </button>
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
              />
              <label htmlFor="create-account">
                Login To your account{" "}
                <span>by accepting our terms and conditions.</span>
              </label>
            </div>
            <div className="submit-button">
              <button type="submit">Sign In</button>
            </div>
            <div className="bottom-link">
            <Link to='/forgotpassowrd'> Forgot Password </Link>
          <p> Don't have an account <Link to="/signup"> Sign Up here. </Link> </p>
            </div>
          </form>
        </div>
            </div>
        </div>
    );
}