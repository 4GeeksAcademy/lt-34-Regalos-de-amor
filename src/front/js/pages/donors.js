import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { DonorCard } from "../component/donorcard";
import { useNavigate } from "react-router-dom";

export const Donors = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    function handleLogout(){
        actions.logout()
        navigate('/donor/login')
    }

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
            <div className="ml-auto">
                    {store.user ? <button onClick={()=>handleLogout()}lassName="btn btn-primary">Logout</button>: null}
					
            </div>
        </div>
    );
};
