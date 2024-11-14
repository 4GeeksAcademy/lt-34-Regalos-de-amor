import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const DonorCard = ({ donor }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();


    function handleLogout() {
        actions.logoutDonor()
        navigate("/login-donor")
    }

    const handleEdit = () => {
        navigate(`/donorform/${donor.id}`);
    };

    const handleDelete = () => {
        actions.deleteDonor(donor.id);
    };

    return (

        <div className="card mb-3">
            <div className="nav-item mt-2 mb-2">
                <button onClick={handleLogout} className="btn btn-outline-danger ms-2">
                    Logout
                </button>
            </div>
            <div className="card-body">
                <h5 className="card-title">{donor.name} {donor.last_name}</h5>
                <p className="card-text"><strong>Email: </strong>{donor.email}</p>
                {/* <p className="card-text">Activo: {donor.is_active ? "Sí" : "No"}</p> */}
                {donor.image_url && (
                    <img src={donor.image_url} alt={`${donor.name} ${donor.last_name}`} className="img-fluid" />
                )}
                <div className="mt-3 container d-flex">
                    <button onClick={handleEdit} className="btn btn-warning me-3">
                        Editar
                    </button>
                    <button onClick={handleDelete} className="btn btn-danger ms-3">
                        Eliminar
                    </button>
                </div>

            </div>

        </div>
    );
};