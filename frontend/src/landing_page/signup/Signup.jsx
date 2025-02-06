import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import Register from './register';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    console.log(formData);
    
    // try {
    //   const response = await fetch("http://your-backend-url/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   const data = await response.json();
    //   console.log("Login Success:", data);
    // } catch (error) {
    //   console.error("Login Error:", error);
    // }
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        formData,
        { withCredentials: true } // Enable cookies
      );
  
      console.log("Login response:", response);
  
      // Since token is in cookies, manually retrieve it
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("authToken="))
        ?.split("=")[1];
  
      if (token) {
        localStorage.setItem("authToken", token);
        console.log("Token stored:", token);
        // window.location.href = "/dashboard";
      } else {
        console.error("Token not found in cookies");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
    }
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
            </div>
          </div>
        </div>
    </div>
  )
}

export default Signup