import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/logo.png"

export const Navbar = () => {
	const navigate = useNavigate();

	// Logout function to remove token and redirect
	const handleLogout = () => {
		localStorage.removeItem("token"); // Remove token from localStorage
		navigate("/login/foundation"); // Redirect to login page
	};

	return (
		<nav className="navbar navbar-expand-md">
		  <div className="container-fluid">
			<Link className="navbar-brand" to="/">
			  <img src={logo} alt="Regalos de amor" style={{ height: "100px" }} />
			</Link>
			<div className="navbar-collapse collapse" id="navbarCollapse">
			  <ul className="navbar-nav navbar-nav-scroll ms-auto">
				<li className="nav-item">
				  <Link className="nav-link" to="/beneficiary">Register Beneficiary</Link>
				</li>
				<li className="nav-item">
				  <Link className="nav-link" to="/donorprofile">Register Donor</Link>
				</li>
			  </ul>
			</div>
		  </div>
		</nav>
	  );
};
