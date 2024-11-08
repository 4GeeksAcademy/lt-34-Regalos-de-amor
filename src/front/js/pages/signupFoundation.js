import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import { COUNTRIES } from "../constants/constants";

export const SignupFoundation = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        country: '',
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verificar que todos los campos están completos
        if (!formData.name || !formData.description || !formData.country || !formData.email || !formData.password) {
            setErrorMessage("Please complete all fields.");
            return;
        }

        try {
            const response = await actions.signup(formData);

            if (response) {
                navigate("/login/foundation");
            } else {
                setErrorMessage("This email is already registered.");
            }
        } catch (error) {
            console.error("Error registering foundation:", error.message);
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ marginBottom: '2rem', marginTop: '2rem', height: '70%' }}>
            <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="text-center mb-4">Sign Up Foundation</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="inputName"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDescription" className="form-label">Description</label>
                        <input
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            type="text"
                            className="form-control"
                            id="inputDescription"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputCountry" className="form-label">Country</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="form-control"
                            id="inputCountry"
                            required
                        >
                            <option value="" disabled>Select your country</option>
                            {COUNTRIES.map((country) => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email Address</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            required
                        />
                    </div>
                    {errorMessage && (
                        <div className="alert alert-danger mt-3" role="alert">
                            {errorMessage}
                        </div>
                    )}
                    <button type="submit" className="btn btn-primary w-100 mt-3">Sign Up</button>
                </form>
                <div className="text-center mt-3">
                    <p>
                        Already have an account? <Link to="/login/foundation" className="text-decoration-none">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
