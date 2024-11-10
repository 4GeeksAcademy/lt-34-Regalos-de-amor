import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext"
import { useNavigate } from "react-router-dom";
import { Form } from "./formLoginDonor";

export const LoginDonor = () => {
	const { store, actions } = useContext(Context);
	
	const navigate = useNavigate();

	function handleLogout(){
		actions.logoutDonor()
		navigate("/donors")
	}
	

	return (
		<div className="container d-flex justify-content-center text-center mt-5 ">
		<Form/>
		
		</div>
	);
};