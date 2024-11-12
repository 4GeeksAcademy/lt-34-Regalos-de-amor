import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const FoundationList = () => {
    const { store, actions } = useContext(Context);
    const [foundations, setFoundations] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFoundations = async () => {
            const data = await actions.fetchAllFoundations();
            setFoundations(data || []);
        };
        fetchFoundations();
    }, [actions]);

    const handleFoundationClick = (id) => {
        navigate(`/foundation-beneficiaries/${id}`);
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-4xl font-bold text-center mb-10 text-indigo-600">Our Foundations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {foundations.map((foundation) => (
                    <div
                        key={foundation.id}
                        onClick={() => handleFoundationClick(foundation.id)}
                        className="cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl p-6 rounded-lg bg-gradient-to-br from-indigo-50 to-indigo-100 shadow-lg border border-indigo-200 group"
                        style={{ padding: '1rem', cursor: 'pointer' }}
                    >
                        <h3 className="text-2xl font-semibold text-indigo-800 mb-3 group-hover:text-indigo-600">
                            {foundation.name}
                        </h3>
                        <p className="text-gray-700 mb-4">{foundation.description}</p>
                        <p className="text-gray-600 mt-1">Country: {foundation.country}</p>
                        <p className="text-gray-600 mb-4">Email: {foundation.email}</p>
                        <p className="text-indigo-500 font-medium text-sm mt-6">Click to see beneficiaries list</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
