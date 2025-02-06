import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';


const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [userType] = useState("customer");

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { fullName, email, password , userType};
    // console.log(formData);
    
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
    axios
    .post('http://localhost:8080/api/auth/signup',formData, {
      headers: {
        'Content-Type': 'application/json', // Ensure data is sent as JSON
      },
    })
    .then((response) => {
      // Handle success
      console.log('Signup successful:', response.data);
      setResponseMessage('Signup successful!');
      localStorage.setItem('user',JSON.stringify(response.data));
    })
    .catch((error) => {
      // Handle errors
      console.error('Error during signup:', error.response?.data || error.message);
      setResponseMessage(
        error.response?.data?.message || 'Something went wrong. Please try again.'
      );
    })
  };

  return (
    <div className="container p-5 ">
        <div className="row  ">
          <div className="container col-6 my-5">
            <img src="media\images\signup.png" alt="Dashboard preview" className="img-fluid " />
          </div>
          <div className="col-6 my-5">
            <div className="card p-4 shadow-lg">
              <h3 className="text-center" style={{ color: "#387ED1" }}>Register Now</h3>
              <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    required 
                    style={{ borderColor: "#387ED1" }}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
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
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register;