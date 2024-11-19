import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { DonorCard } from "../component/donorcard";
import { FoundationForm } from "./foundationForm";
import FoundationCard from "./foundationCard";

export const Donors = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchDonorData();
    }, []);

    
    return (
        <div className="container mb-2 ">
            
            <div className="row">
                {store.donors.length > 0 ? (
                    store.donors.map((donor) => (
                        <div className="col-md-4" key={donor.id}>
                            <DonorCard donor={donor} />
                            <div className="mt-3">
                  
                </div>
                <h2 className="my-4">Lista de Fundaciones</h2>
                        <FoundationCard/>
                        </div>
                    ))
                ) : (
                    <p>No hay donantes disponibles.</p>
                )}
            </div>
            
        </div>
    );
};
