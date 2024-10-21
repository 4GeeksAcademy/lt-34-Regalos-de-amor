import React, { useState, useEffect, useContext } from "react";
import PropTypes, { func } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Beneficiary = (props) => {

	const { store, actions } = useContext(Context)
	const params = useParams();
	const [name, setName] = useState('');
	const [wishgift, setWishGift] = useState('');
	const [history, setHistory] = useState('');
	const [account, setAccount] = useState('');

	
	
	return (
		<div className="d-flex justify-content-center ">
			<form>
			<h3>**Beneficiary**</h3>
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
		  <label htmlFor="wishGift" className="form-label">Wish</label>
		  <input
			type="text"
			className="form-control"
			id="wishGift"
			placeholder ="wishGift"
			value={wishgift}
			onChange={(e=> setWishGift(e.target.value))}
		  />
		</div>
		<div className="mb-3">
		  <label htmlFor="account" className="form-label">account</label>
		  <input
			type="text"
			className="form-control"
			id="account"
			placeholder="account"
			value={account}
			onChange={(e)=> setAccount(e.target.value)}
		  />
		</div>
		<div className="mb-3 ">
		  <label htmlFor="history" className="form-label">History</label>
		  <textarea
			className="form-control"
			id="history"
			placeholder="history"
			value={history}
			onChange={(e)=> setHistory(e.target.value)}
		  ></textarea>
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