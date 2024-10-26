import React, { useState, useEffect, useContext } from "react";
import PropTypes, { func } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Donors = (props) => {

	const { store, actions } = useContext(Context)
	const params = useParams();
	const [name, setName] = useState('');
	const [last_name, setLast_name] = useState('');
	const [email, setEmail] = useState('');
	useEffect(() => {
		state.actions.getDonors(); // <---- calling this function from the flux.js actions
	}, []);
	
	
	return (
		<div className="d-flex justify-content-center ">
			<form>
			<h3>**Donor**</h3>
		<div className="mb-3">
		  <label htmlFor="name" className="form-label">Name</label>
		  <input
			type="text"
			className="form-control"
			id="name"
			placeholder ="name"
			value={name}
			onChange={(e)=> setName(e.target.value)}
		  />
		</div>
		<div className="mb-3">
		  <label htmlFor="last_name" className="form-label">Last Name</label>
		  <input
			type="text"
			className="form-control"
			id="last_name"
			placeholder ="last_name"
			value={last_name}
			onChange={(e=> setLast_name(e.target.value))}
		  />
		</div>
		<div className="mb-3">
		  <label htmlFor="email" className="form-label">email</label>
		  <input
			type="text"
			className="form-control"
			id="email"
			placeholder="email"
			value={email}
			onChange={(e)=> setEmail(e.target.value)}
		  />
		</div>
		

        
		{/* <div className="mb-3">
		  <label htmlFor="picture" className="form-label">URL image</label>
		  <input
			type="url"
			className="form-control"
			id="picture"
			name="picture"
			value={formData.picture}
			onChange={handleChange}
			required
		  />
		</div> */}
		<button type="submit" className="btn btn-primary">Send</button>
	  </form>
	  </div>
	);
  };