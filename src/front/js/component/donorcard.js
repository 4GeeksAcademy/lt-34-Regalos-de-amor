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
            <p className="card-text"><strong>Email: </strong>{donor.email}</p>
            <p className="card-text">Activo: {donor.is_active ? "Sí" : "No"}</p>
            {donor.image_url && (
                <img src={donor.image_url} alt={`${donor.name} ${donor.last_name}`} className="img-fluid" />
            )}
            <div className="mt-3 container d-flex">
            <button onClick={handleEdit} className="btn btn-warning me-3 ">
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
