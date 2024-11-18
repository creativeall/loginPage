import React from "react";
// import VidyaLOGO from './assets/VidyaLOGO.png';  
import "./ForgotPassword.css";
const ForgotPassword = () => {
  return (
    <>
      <header>
        <div className="box">
          <div className="google-logo">
            <img src="Vidya_GxP.png" alt="Logo" style={{ height: "10rem" }} />
          </div>
          <h2>Forgot Your Password</h2>
          <p className="para">
            Enter the email address that you use to sign in to your account and
            click 'Reset Password.'
          </p>
          <form action="#">
            <div className="inputBox">
              <input type="email" name="email" required />
              <label htmlFor="email">Email</label>
            </div>

            <div className="forgot">
              <button type="button" className="btn">
                Request Reset Link
              </button>
              <button type="button" className="btn">
                Back To Login
              </button>
            </div>
          </form>
        </div>
      </header>
    </>
  );
};

export default ForgotPassword;
