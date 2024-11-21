import React, { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { Link } from "react-router-dom";
import { NavbarDashboard } from "../component/navbarDashboard";
import { TopBar } from "./foundationList/topBar";


export const Foundation = () => {
    const { store, actions } = useContext(Context);

    const [beneficiaryData, setBeneficiaryData] = useState({
        name: "",
        wish_gift: "",
        history: "",
        account: "",
        image_url: "",
        is_active: true
    });
    const [editingBeneficiaryId, setEditingBeneficiaryId] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("fetch Foundation")
        const fetchData = async () => {
            setLoading(true);
            await actions.fetchBeneficiaryData();
            setLoading(false);
        };
        fetchData();
    }, []);
    


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBeneficiaryData({ ...beneficiaryData, [name]: value });
    };

    const handleImageUpload = async (event) => {
        const files = event.target.files;
        const upLoadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", upLoadPreset);

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();
        setBeneficiaryData({ ...beneficiaryData, image_url: data.secure_url });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingBeneficiaryId) {
            await actions.updateBeneficiary(editingBeneficiaryId, beneficiaryData);
            setEditingBeneficiaryId(null);
        } else {
            await actions.createBeneficiary(beneficiaryData);
        }

        setBeneficiaryData({
            name: "",
            wish_gift: "",
            history: "",
            account: "",
            image_url: "",
            is_active: true
        });

    };

    const handleAddBeneficiary = () => {
        setEditingBeneficiaryId(null);
        setBeneficiaryData({
            name: "",
            wish_gift: "",
            history: "",
            account: "",
            image_url: "",
            is_active: true
        });

    };

    const handleEdit = (beneficiary) => {
        setEditingBeneficiaryId(beneficiary.id);
        setBeneficiaryData({
            name: beneficiary.name,
            wish_gift: beneficiary.wish_gift,
            history: beneficiary.history,
            account: beneficiary.account,
            image_url: beneficiary.image_url,
            is_active: beneficiary.is_active
        });

    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this beneficiary?");
        if (confirmDelete) {
            await actions.deleteBeneficiary(id);
        }
    };

    return (
        <div className="container my-5">
            <NavbarDashboard/>
            {/* <TopBar/> */}
            <h1 className="text-primary text-center fw-bold mb-5">Foundation Beneficiaries</h1>
            <p className="text-center text-muted mb-4">
                Welcome to the Foundation Beneficiaries management page. Here you can view, add, edit, or delete
                beneficiaries associated with your foundation. Each beneficiary entry includes their name, wish gift,
                and background story, along with the ability to link a PayPal account for donations.
            </p>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
                    <img
                        src="https://discuss.wxpython.org/uploads/default/original/2X/6/6d0ec30d8b8f77ab999f765edd8866e8a97d59a3.gif"
                        alt="Loading..."
                        style={{ width: "100px", height: "100px" }}
                    />
                </div>
            ) : (
                <>
                    <div className="row g-4">
                        {store.beneficiaries && store.beneficiaries.length > 0 ? (
                            store.beneficiaries.map((beneficiary) => (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={beneficiary.id}>
                                    <div className="card h-100 shadow-sm border-0">
                                        {beneficiary.image && (
                                            <img
                                                src={`${beneficiary.image}`}
                                                alt={beneficiary.name}
                                                className="card-img-top img-fluid"
                                                style={{ objectFit: "cover", height: "200px" }}
                                            />
                                        )}
                                        <div className="card-body">
                                            <h5 className="card-title text-primary fw-bold">{beneficiary.name}</h5>
                                            <p className="card-text"><strong>Wish Gift:</strong> {beneficiary.wish_gift}</p>
                                            <p className="card-text"><strong>History:</strong> {beneficiary.history}</p>
                                            <p className="card-text"><strong>Paypal Account:</strong> {beneficiary.account}</p>
                                            <button
                                                className="btn btn-outline-primary me-2 mt-3 w-100"
                                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                onClick={() => handleEdit(beneficiary)}
                                            >
                                                Edit Beneficiary
                                            </button>
                                            <button
                                                className="btn btn-outline-danger w-100 mt-2"
                                                onClick={() => handleDelete(beneficiary.id)}
                                            >
                                                Delete Beneficiary
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-muted">No beneficiaries found.</p>
                        )}
                    </div>
                    <button type="button" className="btn btn-success mt-5 w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add a New Beneficiary
                    </button>
                </>
            )}

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fs-5" id="exampleModalLabel">{editingBeneficiaryId ? "Edit Beneficiary" : "Add a Beneficiary"}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" value={beneficiaryData.name} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Wish Gift</label>
                                    <input type="text" className="form-control" name="wish_gift" value={beneficiaryData.wish_gift} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">History</label>
                                    <input type="text" className="form-control" name="history" value={beneficiaryData.history} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">PayPal Account</label>
                                    <input type="text" className="form-control" name="account" value={beneficiaryData.account} onChange={handleInputChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Upload Image</label>
                                    <input type="file" accept="image/*" onChange={handleImageUpload} className="form-control" />
                                    {beneficiaryData.image_url && (
                                        <div className="mt-3">
                                            <img src={beneficiaryData.image_url} className="img-fluid rounded" alt="Beneficiary" />
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" name="is_active" checked={beneficiaryData.is_active} onChange={(e) => setBeneficiaryData({ ...beneficiaryData, is_active: e.target.checked })} />
                                    <label className="form-check-label">Active</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 " data-bs-dismiss="modal">{editingBeneficiaryId ? "Update Beneficiary" : "Create Beneficiary"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
