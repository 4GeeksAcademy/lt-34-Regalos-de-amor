import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const DonorForm = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [is_active, setIsActive] = useState(true);

    useEffect(() => {
        if (params.id) {
            const donor = store.donor.find((d) => d.id === parseInt(params.id));
            if (donor) {
                setName(donor.name);
                setLast_name(donor.last_name);
                setEmail(donor.email);
                setIsActive(donor.is_active);
            }
        }
    }, [params.id, store.donor]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const donorData = { name, last_name, email, password, is_active };

        if (params.id) {
            actions.updateDonor(params.id, donorData);
        } else {
            actions.createDonor(donorData);
        }
        navigate("/donors");
    };

    return (
        <div className="container">
            <h2>{params.id ? "Editar Donante" : "Crear Donante"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        value={last_name}
                        onChange={(e) => setLast_name(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="is_active"
                        checked={is_active}
                        onChange={(e) => setIsActive(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="is_active">
                        ¿Activo?
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    );
};
