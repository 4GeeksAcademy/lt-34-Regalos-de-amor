import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const DonorProfile = () => {
    const { store, actions } = useContext(Context);
    const [donorData, setDonorData] = useState({
        name: "",
        last_name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDonorProfile = async () => {
            const donor = await actions.fetchDonorData(); // Asume que el token proporciona el ID del usuario
            console.log('donor => ', donor);
            if (donor) {
                setDonorData(donor);
            }
        };
        fetchDonorProfile();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDonorData({ ...donorData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updated = await actions.updateDonor(donorData.id, donorData);
        if (updated) {
            alert("Profile updated successfully!");
            navigate("/"); // Redirigir después de la actualización
        } else {
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="container">
            <h1 className="text-primary mb-4">Donor Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={donorData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        value={donorData.last_name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={donorData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={donorData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Update Profile</button>
            </form>
        </div>
    );
};
