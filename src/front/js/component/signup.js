import React, { useState, useContext } from "react";
import { Context, useParams } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";


export const SignupDonor = () => {
	const [email, setEmail] = useState('');
	// const [userId, setUserId] = useState(null);
	const [userEmail, setUserEmail] = useState('');
	const [password, setPassword] = useState('');
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	async function sendData(e) {
		e.preventDefault();
		if (!email || !password) {
			alert("Please, complete the information.");
			return;
		}
		try {
			const response = await actions.signup(email, password);
			console.log(response);
			if (response) {
				navigate("/donor/login");
			}
		} catch (error) {
			console.error("Error registering user:", error.message);
		}
		
	}
	
	return (
		<div className="container d-flex justify-content-center mt-5">
			<form className="w-25" onSubmit={sendData}>
				<div className="mb-3">
					<label htmlFor="inputEmail" className="form-label">email</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="inputEmail"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text"></div>
				</div>
				<div className="mb-3">
					<label htmlFor="inputPassword" className="form-label">password</label>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="inputPassword"
					/>
				</div>
				<button type="submit" className="btn btn-primary">signup</button>
			</form>
			
		</div>
	);
};