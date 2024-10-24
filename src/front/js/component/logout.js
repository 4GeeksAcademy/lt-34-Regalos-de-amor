import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
	const { store, actions } = useContext(Context);

	const navigate = useNavigate()

	function handleLogout(){
		actions.logout()
		navigate("/welcome")
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/welcome">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">
					{store.user ? <button onClick={()=>handleLogout()} className="btn btn-primary">Logout</button>: null}
					<Link to="/login">
			
					</Link>
				</div>
			</div>
		</nav>
	);
};
