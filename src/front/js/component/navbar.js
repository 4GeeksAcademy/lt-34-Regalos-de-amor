import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo-logo.png";


export const Navbar = () => {
 const navigate = useNavigate();


 // Logout function to remove token and redirect
 const handleLogout = () => {
   const confirmLogout = window.confirm("Are you sure you want to log out?");
   if (confirmLogout) {
     localStorage.removeItem("token"); // Remove token from localStorage
     navigate("/login/foundation"); // Redirect to login page
   }
 };


 return (
   <nav className="navbar navbar-expand-xl">
     <div className="container">
       <Link className="navbar-brand" to="/">
         <img
           className="light-mode-item navbar-brand-item"
           src={logo}
           alt="logo"
           style={{ width: "80px", height: "80px", borderRadius: "50%" }}
         /> Regalos de amor
       </Link>
       <Link className="navbar-brand" to="/">Team
       </Link>
       <Link className="navbar-brand" to="/login-donor">Donor
       </Link>
       <Link className="navbar-brand" to="/login-foundation">Foundation
       </Link>
     </div>
   </nav>
 );
};


