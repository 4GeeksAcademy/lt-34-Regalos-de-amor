import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom";

export const LoginDonor = () => {
	const { store, actions } = useContext(Context);
	function handleLogout(){
		actions.logoutDonor()
		navigate("/welcome")
	}
	
	const navigate = useNavigate()
	return (
		<div className="container">
			{!store.user ? <Navigate to="/welcome" /> : <>
				<h1>Hello, {store.user.email}, id: {store.user.id}</h1>
				<h2>is active: {store.user.is_active ? 'Yes' : 'No'}</h2>
				<div>
					{store.user ? <button onClick={()=>handleLogout()} className="btn btn-primary">Logout</button>: null}
					<Link to="/login">
			
					</Link>
				</div>
			</>}
				
		</div>
	);
};