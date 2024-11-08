import React, { useState, useEffect, useContext } from "react";
import PropTypes, { func } from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import "../../styles/beneficiaryForm.css";

export const BeneficiaryForm = (props) => {
    const navigate = useNavigate()
    const { store, actions } = useContext(Context)
    const params = useParams();
    const [name, setName] = useState('');
    const [wish_gift, setWish_gift] = useState('');
    const [history, setHistory] = useState('');
    const [account, setAccount] = useState('');
    const [image_url, setImage_url] = useState('');



    useEffect(() => {
        if (store.beneficiaries && params.id) {
            if (store.beneficiaries.length > 0) {

                const result = store.beneficiaries.find(item => item.id == params.id)
                if (result) {
                    setName(result.name)
                    setWish_gift(result.wish_gift)
                    setHistory(result.history)
                    setAccount(result.account)
                    setImage_url(result.image_url)

                }
            }
        }
    }, [store.beneficiaries, params]);

    const createBeneficiary = async () => {
        const newBeneficiary = {
            name,
            wish_gift,
            history,
            account,
            image_url
        };

        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/beneficiary`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBeneficiary)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
        } catch (error) {
            console.error('Failed to create beneficiary:', error);
        }
    };

    const updateBeneficiary = async (id, data) => {
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/beneficiary/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            actions.fetchBeneficiaryData();
        } catch (error) {
            console.error('Failed to update beneficiary:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const beneficiaryData = {
            name,
            wish_gift,
            history,
            account,
            image_url
        };
        if (params.id) {
            updateBeneficiary(params.id, beneficiaryData).then(() => {
                navigate("/beneficiary");
            });
        } else {
            createBeneficiary().then(() => {
                navigate("/beneficiary");
            });
        }
    };

    const handleImageUpload = async (event) => {
        const files = event.target.files;
        const upLoadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

        const formData = new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', upLoadPreset);

        const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        setImage_url(data.secure_url);

    };

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                <h3>Beneficiary</h3>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="wishGift" className="form-label">Wish</label>
                    <input
                        type="text"
                        className="form-control"
                        id="wishGift"
                        placeholder="wishGift"
                        value={wish_gift}
                        onChange={(e) => setWish_gift(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="account" className="form-label">Account</label>
                    <input
                        type="text"
                        className="form-control"
                        id="account"
                        placeholder="account"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="history" className="form-label">History</label>
                    <textarea
                        className="form-control"
                        id="history"
                        placeholder="history"
                        value={history}
                        onChange={(e) => setHistory(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Send</button>
                    <input type="file" accept='image/*'
                        onChange={handleImageUpload}
                        className='upload-button' />

                    <div className="image-gallery">
                        {/* {imageUrls.map((url, index) => {
                    const myImage = cld.image(url);
                    myImage.resize(fill().width(250).height(250)); */}
                        {/* return  */}
                        {image_url ? <img src={image_url} className="uploaded-image" /> : null}
                        {/* })} */}
                    </div>
                </div>

            </form>
        </div>
    );
};