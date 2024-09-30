import React from "react";
import './SignIn.css';
import { Link } from "react-router-dom";
import backgroundImg from "../../Assets/15000134_5557528.jpg";

export default function SignIn(){
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
          <form >


            <div className="f-name">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
               
              />
            
            </div>

            <div className="f-name">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
               
              />
              
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