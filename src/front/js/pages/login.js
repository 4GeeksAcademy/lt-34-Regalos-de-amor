import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom";

export const LoginDonor = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	async function sendData(e){
	e.preventDefault()
	
	const response= await actions.login(email, password)
	console.log(response)
	if(response){
		navigate("/donorform")
	}

}

return (
	<div className="container d-flex flex-colum align-item-center justify-content-center text-center mt-5 ">
		<form className=".w-25" onSubmit={sendData}>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
				<input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
				<input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"/>
			</div>
			<button type="submit" className="btn btn-primary">Login</button>
		<Link to="/donor/signup" className="my-link">Signup</Link>
		</form>
	</div>

	)
}