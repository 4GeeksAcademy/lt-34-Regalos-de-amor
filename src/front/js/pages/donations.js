import React, { useState, useEffect } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

export const Donations = ({ selectedBeneficiary }) => {
    const [donations, setDonations] = useState([]);
    const [newDonation, setNewDonation] = useState({
        donor_id: '',
        foundation_id: selectedBeneficiary.id,
        amount: ''
    });
    const [currency, setCurrency] = useState('USD');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        fetchDonations();
    }, []);

    const fetchDonations = async () => {
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/donations`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        setDonations(data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewDonation({ ...newDonation, [name]: value });
    };

    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: amount,
                    currency_code: currency
                }
            }]
        });
    };

    const onApproveOrder = async (data, actions) => {
        const details = await actions.order.capture();
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/execute-payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                paymentID: data.orderID,
                payerID: details.payer.payer_id,
                donor_id: newDonation.donor_id,
                foundation_id: newDonation.foundation_id,
                amount: amount
            })
        });
        if (response.ok) {
            fetchDonations();
        }
    };

    return (
        <div>
            <h2>Donations</h2>
            <ul>
                {donations.map(donation => (
                    <li key={donation.id}>{donation.donor_id} donated ${donation.amount} to foundation {donation.foundation_id}</li>
                ))}
            </ul>
            <div className="card-footer">
                <h6 className="text-center text-secondary fw-semibold">Donate to {selectedBeneficiary.name}</h6>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="form-select">
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
        </div>
    );
};


