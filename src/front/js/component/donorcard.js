import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const DonorCard = ({ donor }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/donorform/${donor.id}`); // Redirige al formulario con los datos del donante
    };

    const handleDelete = () => {
        actions.deleteDonor(donor.id); // Llamar la acción de eliminar
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{donor.name} {donor.last_name}</h5>
                <p className="card-text">Email: {donor.email}</p>
                <p className="card-text">Activo: {donor.is_active ? "Sí" : "No"}</p>
                <button onClick={handleEdit} className="btn btn-warning me-2">
                    Editar
                </button>
                <button onClick={handleDelete} className="btn btn-danger">
                    Eliminar
                </button>
            </div>
        </div>
    );
};
