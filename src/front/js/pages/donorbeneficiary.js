import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";

export const DonorBeneficiary = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [name, setName] = useState('');
	const [wish_gift, setWish_gift] = useState('');
	const [history, setHistory] = useState('');
	const [account, setAccount] = useState('');
    const [beneficiaryId, setBeneficiaryId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newDonor = {
            name,
            wish_gift,
            history,
            account,
        };

        try {
            const response = await actions.createDonor(newDonor);
            
            navigate("/beneficiary");
            console.log(response)
        } catch (error) {
            console.error('Failed to create donor:', error);
        }
    };

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                <h3>New Beneficiary</h3>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Wish Gift</label>
                    <input
                        className="form-control"
                        placeholder="Wish_gift"
                        id="wish_gift"
                        value={wish_gift}
                        onChange={(e) => setWish_gift(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">History</label>
                    <input
                        className="form-control"
                        id="history"
                        placeholder="history"
                        value={history}
                        onChange={(e) => setHistory(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Account</label>
                    <input
                        className="form-control"
                        id="account"
                        placeholder="account"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                    />
                </div>
               
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    );
};
