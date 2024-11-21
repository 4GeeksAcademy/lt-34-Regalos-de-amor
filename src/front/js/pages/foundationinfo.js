import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const FoundationInfo = () => {
    const { store, actions } = useContext(Context);
    const [foundations, setFoundations] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFoundations = async () => {
            setLoading(true);
            try {
                const data = await actions.fetchAllFoundations();
                setFoundations(data || []);
            } catch (error) {
                console.error("Error fetching foundations:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFoundations();
    }, [actions]);

    const handleFoundationClick = (id) => {
        navigate('/foundation-beneficiaries/${id}');
    };

    return (
        <div className="container my-5">
            <h2 className="display-5 text-center text-primary fw-bold mb-4">Our Foundations</h2>
            <p className="lead text-muted text-center mb-5">
                Discover and support foundations making a difference in communities around the world.
            </p>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                    <img
                        src="https://discuss.wxpython.org/uploads/default/original/2X/6/6d0ec30d8b8f77ab999f765edd8866e8a97d59a3.gif"
                        alt="Loading..."
                        style={{ width: '100px', height: '100px' }}
                    />
                </div>
            ) : (
                <div className="row g-4">
                    {foundations.map((foundation) => (
                        <div key={foundation.id} className="col-12 col-md-6 col-lg-4">
                            <div
                                className="card h-100 shadow-sm border-0 hover-shadow"
                                onClick={() => handleFoundationClick(foundation.id)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="card-body">
                                    <h3 className="card-title text-primary fw-bold">{foundation.name}</h3>
                                    <p className="card-text text-secondary mt-3 mb-4">{foundation.description}</p>
                                    <p className="text-muted small mb-1">
                                        <strong>Country:</strong> {foundation.country}
                                    </p>
                                    <p className="text-muted small mb-3">
                                        <strong>Email:</strong> {foundation.email}
                                    </p>
                                    <span className="badge bg-primary text-white py-2 px-3">
                                        Click to see beneficiaries
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};