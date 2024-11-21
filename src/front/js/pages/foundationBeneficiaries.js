import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { TopBar } from "./foundationList/topBar";
import { NavbarDashboard } from "../component/navbarDashboard";

export const FoundationBeneficiaries = () => {
    const { id } = useParams();
    const [beneficiaries, setBeneficiaries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
    const { actions } = useContext(Context);
    const [{ options }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    const [amount, setAmount] = useState("");

    useEffect(() => {
        const fetchBeneficiaries = async () => {
            if (!id) return;
            try {
                setLoading(true);
                const beneficiaries = await actions.fetchBeneficiariesByFoundationId(id);
                setBeneficiaries(beneficiaries);
            } catch (error) {
                setError("Failed to load beneficiaries.");
            } finally {
                setLoading(false);
            }
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

        <main className="d-flex dashboard container-fluid">
        <NavbarDashboard />
        <div className="page-content-wrapper p-xxl-4">
        
          <div className="page-content-wrapper p-xxl-4">
          <TopBar/>
        <div className="container my-5">
            <h2 className="display-5 text-center text-primary fw-bold mb-4">Beneficiaries</h2>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                    <img
                        src="https://discuss.wxpython.org/uploads/default/original/2X/6/6d0ec30d8b8f77ab999f765edd8866e8a97d59a3.gif"
                        alt="Loading..."
                        style={{ width: '100px', height: '100px' }}
                    />
                </div>
            ) : error ? (
                <p className="text-danger text-center">{error}</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {beneficiaries.map((beneficiary) => (
                        <div key={beneficiary.id} className="col">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={beneficiary.image || "https://via.placeholder.com/150"}
                                    alt={beneficiary.name}
                                    className="card-img-top"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-primary fw-bold">{beneficiary.name}</h5>
                                    <p className="card-text text-muted">{beneficiary.wish_gift}</p>
                                    <p className="card-text small text-secondary mb-4">{beneficiary.history}</p>
                                    <button
                                        onClick={() => handleDonateClick(beneficiary)}
                                        className="btn btn-outline-primary mt-auto"
                                    >
                                        Donate
                                    </button>
                                </div>
                                {selectedBeneficiary && selectedBeneficiary.id === beneficiary.id && (
                                    <div className="card-footer">
                                        <h6 className="text-center text-secondary fw-semibold">Donate to {selectedBeneficiary.name}</h6>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <select value={currency} onChange={onCurrencyChange} className="form-select">
                                                <option value="USD">USD</option>
                                                <option value="EUR">EUR</option>
                                            </select>
                                            <input
                                                type="number"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                placeholder="Enter amount"
                                                className="form-control ms-2"
                                                style={{ maxWidth: '100px' }}
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
                        </div>
                    ))}
                </div>
            )}
            </div>
        </div>
        </div>
        </main>
    );
};