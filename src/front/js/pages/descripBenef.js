import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";


export const DescripBenef = () => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    const [amount, setAmount] = useState(""); 
    const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);

    const { actions, store } = useContext(Context);


    const handleDonateClick = (beneficiary) => {
        setSelectedBeneficiary(beneficiary);
    }

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

    const onCreateOrder = (data, actions) => {
        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            alert("Please enter a valid amount");
            return;
      
        }
      
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: amount.toString(),
                        currency_code: currency
                    },
                },
            ],
        });
    };
 
    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    };


    return (
        <div className="card-body">
            {store.beneficiaries && store.beneficiaries.length > 0 && (
                <div className="beneficiaries-list">
                    {store.beneficiaries.map((beneficiary) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={beneficiary.id}>
                            <div className="card h-100">
                                {beneficiary.image && (
                                    <img
                                        src={`${beneficiary.image}`}
                                        alt={beneficiary.name}
                                        className="card-img-top img-fluid"
                                    />
                                )}
                                <button onClick={() => handleDonateClick(beneficiary)}>Donar</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {selectedBeneficiary && (
                <div className="selected-beneficiary">
                    <h2>{selectedBeneficiary.name}</h2>
                    {selectedBeneficiary.image && (
                        <img
                            src={`${selectedBeneficiary.image}`}
                            alt={selectedBeneficiary.name}
                            className="img-fluid"
                        />
                    )}
                    <p>{selectedBeneficiary.description}</p>
                </div>
            )}

             <div className="mt-3">
                    <select value={currency} onChange={onCurrencyChange}>
                        <option value="USD">💵 USD</option>
                        <option value="EUR">💶 Euro</option>
                    </select>
                    <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="mt-3 mx-2" 
                        type="number"
                    />
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                        forceReRender={[amount, currency]}
                        className="mt-3"
                    />
                </div>
        </div>
    );
};
