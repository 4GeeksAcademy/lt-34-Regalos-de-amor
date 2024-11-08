import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";

export const LoginFoundation = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState(null);  // State to hold error message
	const { actions, store } = useContext(Context);
	const navigate = useNavigate();

	// Check if the user is already logged in
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (store.user.email && token) {
			navigate("/foundation");
		}
	}, [store.user, navigate]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await actions.login(email, password);
		if (response) {
			navigate("/foundation");
		} else {
			setLoginError("Invalid email or password. Please try again.");
		}
	};

	return (
		<div className="container d-flex justify-content-center align-items-center" style={{ marginBottom: '2rem', marginTop: '2rem', height: '70%' }}>
			<div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
				<h2 className="text-center mb-4">Login Foundation</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">Email Address</label>
						<input
							type="email"
							id="email"
							className="form-control"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">Password</label>
						<input
							type="password"
							id="password"
							className="form-control"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<small className="form-text text-muted">
							Never share your password with anyone.
						</small>
					</div>
					{loginError && (
						<div className="alert alert-danger text-center p-2 mt-2">
							{loginError}
						</div>
					)}
					<button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
				</form>
				<div className="text-center mt-3">
					<p>
						Don’t have an account? <Link to="/signup" className="text-decoration-none">Sign Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

