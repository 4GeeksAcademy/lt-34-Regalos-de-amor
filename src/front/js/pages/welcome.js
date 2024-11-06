import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Form } from "../component/form";
import { Navigate } from "react-router-dom";


export const Welcome = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container d-flex justify-content-center text-center mt-5 ">
			{store.user ? <Navigate to="/donor/login" /> : store.user == false ? <Form/> : store.user == null && <h1>Loading...</h1>}
		</div>
	);
};
