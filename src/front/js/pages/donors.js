import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { DonorCard } from "../component/donorcard";
// import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { FoundationForm } from "./foundationForm";
import FoundationCard from "./foundationCard";

export const Donors = () => {
    const { store, actions } = useContext(Context);

    // const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    // const [currency, setCurrency] = useState(options.currency);
    // const [amount, setAmount] = useState(""); 

    // Obtener la lista de donantes al cargar el componente
    useEffect(() => {
        actions.fetchDonorData();
    }, []);

    // const onCurrencyChange = ({ target: { value } }) => {
    //     setCurrency(value);
    //     dispatch({
    //         type: "resetOptions",
    //         value: {
    //             ...options,
    //             currency: value,
    //         },
    //     });
    // };

    // const onCreateOrder = (data, actions) => {
    //     if (!amount || isNaN(amount) || Number(amount) <= 0) {
    //         alert("Please enter a valid amount");
    //         return;
      
    //     }
      
    //     return actions.order.create({
    //         purchase_units: [
    //             {
    //                 amount: {
    //                     value: amount.toString(),
    //                     currency_code: currency
    //                 },
    //             },
    //         ],
    //     });
    // };
 
    // const onApproveOrder = (data, actions) => {
    //     return actions.order.capture().then((details) => {
    //         const name = details.payer.name.given_name;
    //         alert(`Transaction completed by ${name}`);
    //     });
    // };

    return (
        <div className="container mb-2 ">
            
            <div className="row">
                {store.donors.length > 0 ? (
                    store.donors.map((donor) => (
                        <div className="col-md-4" key={donor.id}>
                            <DonorCard donor={donor} />
                            <div className="mt-3">
                    {/* <select value={currency} onChange={onCurrencyChange}>
                        <option value="USD">💵 USD</option>
                        <option value="EUR">💶 Euro</option>
                    </select>
                    <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="form-control mt-2" 
                        type="number"
                    />
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                        forceReRender={[amount, currency]}
                        className="mt-2"
                    /> */}
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
