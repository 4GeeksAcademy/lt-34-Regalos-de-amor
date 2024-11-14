import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext"
import { DonorCard } from "../component/donorcard";
import { DonorForm } from "../component/DonorForm";

export const Welcome = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container ">
			{!store.user ? <Navigate to="/login-donor" /> : <>
				<DonorForm donor={store.user} />
			</>}
		</div>
	);
};
