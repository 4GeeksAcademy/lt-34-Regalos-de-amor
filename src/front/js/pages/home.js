import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	return (
		<div
			className="parallax-container d-flex align-items-center justify-content-center"
			style={{
				backgroundImage: `url("https://cdn0.ecologiaverde.com/es/posts/0/7/8/como_crecen_las_plantas_2870_orig.jpg")`,
			}}
		>
			<div className="text-center p-5 bg-white rounded shadow-lg" style={{ maxWidth: "600px", opacity: 0.9 }}>
				<h1 className="display-5 fw-bold text-primary">Welcome to Our Donation Platform</h1>
				<p className="lead text-muted mt-3">
					Connect with charities and foundations in need. Whether you're here to support as a donor
					or to manage as a foundation, we're here to make the process simple and impactful.
				</p>

				<div className="d-flex justify-content-around mt-5">
					<Link to="/login-foundation" className="btn btn-lg btn-outline-primary px-5 py-3 fw-semibold shadow">
						Foundation
					</Link>
					<Link to="/login-donor" className="btn btn-lg btn-outline-success px-5 py-3 fw-semibold shadow">
						Donor
					</Link>
				</div>

				<div className="mt-5">
					<p className="text-muted fst-italic">
						Choose your role to proceed. Join us in making a difference, one donation at a time.
					</p>
				</div>
			</div>
		</div>
	);
};

