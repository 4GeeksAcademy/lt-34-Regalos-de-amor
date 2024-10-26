import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DonorForm = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    // State variables
    const [name, setName] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [is_active, setIsActive] = useState(true); // Default value set to true

    useEffect(() => {
        if (store.donors && params.id) {
            if (store.donors.length > 0) {
                const result = store.donors.find(item => item.id === parseInt(params.id)); // Use parseInt for comparison
                if (result) {
                    setName(result.name);
                    setLast_name(result.last_name);
                    setEmail(result.email);
                    // Optionally set password; usually, you don't want to pre-fill passwords
                    // setPassword(result.password);
                    setIsActive(result.is_active);
                }
            }
        }
    }, [store.donors, params]);

    const createDonor = async () => {
        const newDonor = {
            name,
            last_name,
            email,
            password,
            is_active
        };

        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/donor`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newDonor)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            console.log('Donor created:', data);
        } catch (error) {
            console.error('Failed to create donor:', error);
        }
    };

    const updateDonor = async (id, data) => {
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/donor/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            console.log('Donor updated');
            actions.fetchDonorData(); // Refresh data after update
        } catch (error) {
            console.error('Failed to update donor:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const donorData = {
            name,
            last_name,
            email,
            password,
            is_active
        };

        if (params.id) {
            updateDonor(params.id, donorData);
        } else {
            createDonor();
        }
    };

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                <h3>Donor</h3>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        placeholder="last name"
                        value={last_name}
                        onChange={(e) => setLast_name(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        className="form-control"
                        id="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="is_active"
                        checked={is_active}
                        onChange={(e) => setIsActive(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="is_active">Is Active</label>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    );
};
