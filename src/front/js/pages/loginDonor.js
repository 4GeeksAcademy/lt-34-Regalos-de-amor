import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const LoginDonor = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null);
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    async function sendData(e) {
        e.preventDefault();
        setLoginError(null); // Reset error message

        const user = await actions.loginDonor(email, password);
        if (user) {
            if (user.first_name && user.last_name) {
                navigate("/foundations-list");
            } else {
                navigate("/donor-profile");
            }
        } else {
            setLoginError("Invalid email or password.");
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ marginBottom: '2rem', marginTop: '2rem', height: '70%' }}>
            <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-4">Login Donor</h2>
                <form onSubmit={sendData}>
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
                        Don’t have an account? <Link to="/signup-donor" className="text-decoration-none">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
