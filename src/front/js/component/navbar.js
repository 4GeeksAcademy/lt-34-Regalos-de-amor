import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();

	// Logout function to remove token and redirect
	const handleLogout = () => {
		localStorage.removeItem("token"); // Remove token from localStorage
		navigate("/login/foundation"); // Redirect to login page
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
			<div className="container">
				<Link to="/" className="navbar-brand mb-0 h1">
					React Boilerplate
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link to="/foundation" className="nav-link">
								Foundation
							</Link>
						</li>
						<li className="nav-item">
							<button onClick={handleLogout} className="btn btn-outline-danger ms-2">
								Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
