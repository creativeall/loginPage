import React from "react";
import "./LoginVGxp.css";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginVGxp = () => {
  return (
    <>
      <div className="container">
        <div className="form-box Login">
          <h1>login</h1>
          <form>
            <div className="input-box">
              <input type="text" required />
              <label>Username</label>
              <PersonIcon />
            </div>
            <div className="input-box">
              <input type="password" required />
              <label>Password</label>
              <VisibilityOffIcon />
            </div>
            <div className="input-box">
              <button className="btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginVGxp;
