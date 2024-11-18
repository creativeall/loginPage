import React from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Login = () => {
  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    navigate('./forgot-password');  
  };
  return (
    <>
      <header>
        <div className="box">
        <div className="google-logo">
 
            <img src="/Vidya_GxP.png" alt="Logo" className='logoImg'/>
          </div>
          <h2>Welcome to Laboratory Information Management System</h2>
           <br/>
          <form action="#">
            <div className="inputBox">
              <input
                type="email"
                name="email"
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="password"
                required
              />
              <label htmlFor="password">Enter Password</label>
            </div>
            <a href="#" onClick={handleForgotPasswordClick}>Forgot password?</a>
            <div className='container'>
              <div className='vertical-container'>
              <Button className='btn'>Login</Button>
              </div>
            </div>
              </form>
        </div>
      </header>
    </>
  );
}

export default Login;
