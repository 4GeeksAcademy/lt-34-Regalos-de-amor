import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const DonorProfile = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        is_active: true
    });
    const [error, setError] = useState(null);

    // Fetch donor data by ID if editing an existing donor
    useEffect( () => {
        async function fetchData(){
            const donorData = await actions.fetchDonorData();
            if (donorData) {
                setFormData(donorData);
            }

        }
        fetchData()
    }, []);


   

    // Handle input change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation to ensure required fields are not blank
        if (!formData.first_name || !formData.last_name || !formData.email) {
            setError("Please fill in all required fields.");
            return;
        }

        // Prepare data for submission, excluding empty password if not changed
        const dataToSubmit = { ...formData };
        if (!dataToSubmit.password) delete dataToSubmit.password;

        try {
            await actions.updateDonor(dataToSubmit);
            navigate("/foundations-list");
        } catch (error) {
            console.error("Error updating donor profile:", error);
            setError("An error occurred while saving the donor information.");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            <div className="card p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
                <h2 className="text-center mb-4">Edit donor profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="first_name" className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="last_name" className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            readOnly
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Leave blank to keep current password"
                        />
                    </div>
                    <div className="form-check mb-3">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="is_active"
                            name="is_active"
                            checked={formData.is_active}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="is_active">
                            Active?
                        </label>
                    </div>
                    {error && (
                        <div className="alert alert-danger text-center p-2 mt-2">
                            {error}
                        </div>
                    )}
                    <button type="submit" className="btn btn-primary w-100 mt-3">Save</button>
                </form>
            </div>
        </div>
    );
};
