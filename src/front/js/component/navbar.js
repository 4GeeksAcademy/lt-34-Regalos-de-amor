import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();
	const token = localStorage.getItem("token"); // Check if token exists

	// Logout function to remove token and redirect
	const handleLogout = () => {
		localStorage.removeItem("token"); // Remove token from localStorage
		navigate("/"); // Redirect to home page
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
			<div className="container">
				<Link to="/" className="navbar-brand fw-bold fs-4">
					Donation Platform
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
						{token && (
							<li className="nav-item">
								<button
									onClick={handleLogout}
									className="btn btn-outline-light ms-3 fw-semibold shadow-sm"
								>
									Logout
								</button>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
