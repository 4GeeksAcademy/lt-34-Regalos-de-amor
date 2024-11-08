import React, { useState, useEffect, useContext } from "react";
import PropTypes, { func } from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import FoundationCard from "./foundationCard";

export const FoundationForm = (props) => {
    const navigate = useNavigate()
    const { store, actions } = useContext(Context)
    const params = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (store.foundations && params.id) {
            if (store.foundations.length > 0) {

                const result = store.foundations.find(item => item.id == params.id)
                if (result) {
                    setName(result.name)
                    setDescription(result.description)
                    setCountry(result.country)
                    setEmail(result.email)
                    setPassword(result.password)

                }
            }
        }
    }, [store.foundations, params]);

    const Foundation = async () => {
        const Foundation = {
            name,
            description,
            country,
            email,
            password
        };

        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/foundations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Foundation)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
        } catch (error) {
            console.error('Failed to create foundation:', error);
        }
    };

    const updateFoundation = async (id, data) => {
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/foundations/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            actions.fetchFoundationData();
        } catch (error) {
            console.error('Failed to update foundation:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const foundationData = {
            name,
            description,
            country,
            email,
            password
        };
        if (params.id) {
            updateFoundation(params.id, foundationData).then(() => {
                navigate("/foundation");
            });
        } else {
            Foundation().then(() => {
                navigate("/foundation");
            });
        }
    };
    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                <h3>Foundation</h3>
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
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        className="form-control"
                        id="description"
                        placeholder="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input
                        type="text"
                        className="form-control"
                        id="country"
                        placeholder="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
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
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    );
};
