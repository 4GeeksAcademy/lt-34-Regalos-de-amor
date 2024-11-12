import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

export const FoundationBeneficiaries = () => {
    const { id } = useParams();
    const [beneficiaries, setBeneficiaries] = useState([]);
    const [error, setError] = useState(null);
    const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
    const { actions } = useContext(Context);

    const [{ options }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    const [amount, setAmount] = useState("");

    useEffect(() => {
        const fetchBeneficiaries = async () => {
            if (!id) return;
            const beneficiaries = await actions.fetchBeneficiariesByFoundationId(id);
            setBeneficiaries(beneficiaries);
        };
        fetchBeneficiaries();
    }, [id]);

    const handleDonateClick = (beneficiary) => {
        setSelectedBeneficiary(beneficiary);
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
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">Beneficiaries</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="justify-center gap-6" style={{ display: 'flex' }}>
                {beneficiaries.map((beneficiary) => (
                    <div
                        key={beneficiary.id}
                        className="cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg p-4 rounded-lg bg-white shadow-md border border-gray-200"
                        style={{ width: 'auto', margin: '1rem', maxWidth: '10remDescripBenef' }} // Keeps cards smaller and consistent in width
                    >
                        <img
                            src={beneficiary.image || "https://via.placeholder.com/150"}
                            alt={beneficiary.name}
                            className="w-full h-40 object-cover rounded-lg mb-3"
                            style={{ maxWidth: '8rem', height: 'auto' }}
                        />
                        <h3 className="text-lg font-semibold text-indigo-800 mb-1">{beneficiary.name}</h3>
                        <p className="text-gray-600 text-sm mb-1">Wish: {beneficiary.wish_gift}</p>
                        <p className="text-gray-500 text-sm mb-3">History: {beneficiary.history}</p>
                        <button
                            onClick={() => handleDonateClick(beneficiary)}
                            style={{
                                width: '100%',
                                height: '6rem',
                                margin: '0 auto',
                                backgroundImage: `url("https://i0.wp.com/blog.mightycause.com/wp-content/uploads/2019/06/paypal-donate-button-high-quality-png.png?w=500&ssl=1")`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: 'transparent',
                                border: 0,
                            }}
                        >
                        </button>
                        {selectedBeneficiary && selectedBeneficiary.id === beneficiary.id && (
                            <div className="mt-4 p-4 border-t border-gray-300">
                                <h4 className="text-indigo-700 text-center font-semibold mb-2">
                                    Donate to {selectedBeneficiary.name}
                                </h4>
                                <div className="flex items-center justify-between mb-2">
                                    <select value={currency} onChange={onCurrencyChange} className="border rounded p-1">
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                    </select>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder="Enter amount"
                                        className="border rounded p-1 w-24 ml-2"
                                    />
                                </div>
                                <PayPalButtons
                                    style={{ layout: "vertical" }}
                                    createOrder={(data, actions) => onCreateOrder(data, actions)}
                                    onApprove={(data, actions) => onApproveOrder(data, actions)}
                                    forceReRender={[amount, currency]}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
