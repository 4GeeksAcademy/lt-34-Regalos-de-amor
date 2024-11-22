import React, { useState, useEffect } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

export const Donations = () => {
    const [donations, setDonations] = useState([]);
    const [newDonation, setNewDonation] = useState({
        donor_id: '',
        foundation_id: '',
        amount: ''
    });

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

    const handlePaymentSuccess = async (details, data) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/execute-payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                paymentID: data.paymentID,
                payerID: data.payerID,
                donor_id: newDonation.donor_id,
                foundation_id: newDonation.foundation_id,
                amount: newDonation.amount
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
            <form>
                <input type="text" name="donor_id" value={newDonation.donor_id} onChange={handleInputChange} placeholder="Donor ID" required />
                <input type="text" name="foundation_id" value={newDonation.foundation_id} onChange={handleInputChange} placeholder="Foundation ID" required />
                <input type="number" name="amount" value={newDonation.amount} onChange={handleInputChange} placeholder="Amount" required />
                <input
                                                            type="number"
                                                            value={amount}
                                                            onChange={(e) => setAmount(e.target.value)}
                                                            placeholder="Enter amount"
                                                            className="form-control ms-2"
                                                            style={{ maxWidth: '100px' }}
                                                        />
            <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => onCreateOrder(data, actions)}
                onApprove={(data, actions) => onApproveOrder(data, actions)}
                forceReRender={[amount, currency]}
            />
            </form>
        </div>
    );
};

