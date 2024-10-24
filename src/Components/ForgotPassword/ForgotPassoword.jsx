import React from "react";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import Close from '../../Assets/close-svgrepo-com.svg';

export default function ForgotPassword() {
    const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="container-forgot">
      <div className="inner-box">
        <h1>Forgot Password</h1>
        <div className="close-window" onClick={handleClose}>
            <img src={Close} alt="close" />
        </div>
        <p>Enter Your Mail-id to get the link to reset your account Password.</p>
        <input type="email" id="email" name="email" placeholder="Enter Your Email"/>
        <div className="reset-button">
        <button type="submit"> Reset Your Password </button>
        </div>
      </div>
    </div>
  );
}
