import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from 'axios';

import { useAuth } from "../context/AuthContext";


const Menu = () => {
  const { user } = useAuth();
  const [selectedMenu,setSelectedMenu] = useState(0);
  const [isProfileDropDownOpen,setIsProfileDropDownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const handleProfileClick =() => {
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  }

  const [, , removeCookie] = useCookies(["authToken"]); // Use react-cookie to remove token
  
  const handleLogout = async () => {
    try {
      await axios.post("https://zerodha-clone-6rsc.onrender.com/api/auth/logout", {}, { withCredentials: true });
  
      //  Remove the authToken cookie
      removeCookie("authToken", { path: "/", sameSite: "None" });
  
      //  Redirect to login page
      window.location.href = "https://zerodha-clone-2-dyji.onrender.com/signup";  
      
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  }
  const menuClass = "menu";
  const activeMenuClass = "menu selected"
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:'none'}} to='/' onClick={() =>handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to='/orders' onClick={() =>handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to='/holdings' onClick={() =>handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to='/positions' onClick={() =>handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to='/funds' onClick={() =>handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:'none'}} to='/apps' onClick={() =>handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="position-relative">
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">ZU</div>
            <p className="username">{user && user.fullName ? user.fullName : "Guest"}</p>
          </div>

          {isProfileDropDownOpen && (
            <div className="dropdown-menu show position-absolute end-0 mt-2 shadow-sm border rounded">
              <a className="dropdown-item" href="#">Option 1</a>
              <a className="dropdown-item" href="#">Option 2</a>
              <a className="dropdown-item text-danger" onClick={handleLogout}>Logout</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;