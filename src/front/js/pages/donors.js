import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { DonorCard } from "../component/donorcard";

export const Donors = () => {
    const { store, actions } = useContext(Context);

    // Obtener la lista de donantes al cargar el componente
    useEffect(() => {
        actions.fetchDonorData();
    }, []);

    return (
        <div className="container">
            <h2 className="my-4">Lista de Donantes</h2>
            <div className="row">
                {store.donor.length > 0 ? (
                    store.donor.map((donor) => (
                        <div className="col-md-4" key={donor.id}>
                            <DonorCard donor={donor} />
                        </div>
                    ))
                ) : (
                    <p>No hay donantes disponibles.</p>
                )}
            </div>
        </div>
    );
};
