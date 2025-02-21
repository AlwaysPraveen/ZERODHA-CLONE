import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import Register from './Register';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
  });

  const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = { email, password };
      
      axios.post("https://zerodha-clone-6rsc.onrender.com/api/auth/login", formData, { withCredentials: true })
        .then(response => {
          console.log("Login response:", response);
    
          //  Redirect to dashboard (No need to manually extract token)
          setTimeout(() => {
            window.location.href = "https://zerodha-clone-3-x201.onrender.com";
          }, 3000);
    
          handleSuccess(response);
        })
        .catch(error => {
          console.error("Login error:", error.response?.data || error.message);
          handleError(error.response?.data.message);
        });
    
      setEmail('');
      setPassword('');
  };
    
  return (
    <div className="container p-5 ">
        <div className="row  ">
          <div className="container col-6 my-5">
            <img src="media\images\signup.png" alt="Dashboard preview" className="img-fluid " />
          </div>
          <div className="col-6 my-5">
            <div className="card p-4 shadow-lg">
              <h3 className="text-center" style={{ color: "#387ED1" }}>Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    required 
                    style={{ borderColor: "#387ED1" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3 position-relative">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className="form-control"
                      required
                      style={{ borderColor: "#387ED1" }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                <button type="submit" className="btn w-100" style={{ backgroundColor: "#387ED1", color: "white" }}>
                  Login
                </button>
              </form>
              <p className="text-center mt-3">
                Don't have an account? <Link to="/register" style={{ color: "#387ED1" }}>Register</Link>
              </p>
              <ToastContainer/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Signup