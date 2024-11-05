import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

export const DonorCard = ({ donor }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    const [amount, setAmount] = useState(""); 

    const handleEdit = () => {
        navigate(`/donorform/${donor.id}`); 
    };

    const handleDelete = () => {
        actions.deleteDonor(donor.id); 
    };

    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    };

    const onCreateOrder = (amount,data, actions) => {
        if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
            alert("Please enter a valid amount");
            return;
      
        }
        console.log(amount)
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: amount.toString(),
                        
                    },
                },
            ],
        });
    };
    console.log(amount)
    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
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
                    <button onClick={handleEdit} className="btn btn-warning me-3">
                        Editar
                    </button>
                    <button onClick={handleDelete} className="btn btn-danger ms-3">
                        Eliminar
                    </button>
                </div>
                <div className="mt-3">
                    <select value={currency} onChange={onCurrencyChange}>
                        <option value="USD">💵 USD</option>
                        <option value="EUR">💶 Euro</option>
                    </select>
                    <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="form-control mt-2" 
                    />
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(amount,data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}

                        className="mt-2"
                    />
                </div>
            </div>
        </div>
    );
};