import React, { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../store/appContext";
import { Modal } from 'bootstrap';

export const Foundation = () => {
    const { store, actions } = useContext(Context);
    

    // Estados para el formulario de beneficiario
    const [beneficiaryData, setBeneficiaryData] = useState({
        name: "",
        wish_gift: "",
        history: "",
        account: "",
        image_url: "",
        is_active: true
    });
    const [editingBeneficiaryId, setEditingBeneficiaryId] = useState(null);

    // Referencia al modal
    const modalRef = useRef();

    // Efecto para obtener datos de beneficiarios cuando el componente se monta
    useEffect(() => {
        actions.fetchBeneficiaryData();
    }, []);

    const openModal = () => {
        const modalInstance = new Modal(modalRef.current);
        modalInstance.show();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBeneficiaryData({ ...beneficiaryData, [name]: value });
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
        setBeneficiaryData({...beneficiaryData, image_url: data.secure_url});

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

        const modalInstance = Modal.getInstance(modalRef.current);
        modalInstance.hide();
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
        openModal();
    };

    const handleEdit = (beneficiary) => {
        setEditingBeneficiaryId(beneficiary.id);
        setBeneficiaryData({
            name: beneficiary.name,
            wish_gift: beneficiary.wish_gift,
            history: beneficiary.history,
            account: beneficiary.account,
            image: "",
            is_active: beneficiary.is_active
        });
        openModal();
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this beneficiary?");
        if (confirmDelete) {
            await actions.deleteBeneficiary(id);
        }
    };

    return (
        <div className="container">
            <h1 className="text-danger mb-4">Foundation</h1>
            <div className="row">
                {store.beneficiaries && store.beneficiaries.length > 0 && store.beneficiaries.map(beneficiary => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={beneficiary.id}>
                        <div className="card h-100">
                            {beneficiary.image && (
                                <img
                                    src={`data:image/png;base64,${beneficiary.image}`}
                                    alt={beneficiary.name}
                                    className="card-img-top img-fluid"
                                />
                            )}
                            <div className="card-body">
                                <h5 className="card-title">{beneficiary.name}</h5>
                                <p className="card-text"><strong>Wish Gift:</strong> {beneficiary.wish_gift}</p>
                                <p className="card-text"><strong>History:</strong> {beneficiary.history}</p>
                                <p className="card-text"><strong>Account:</strong> {beneficiary.account}</p>
                                <button className="btn btn-primary me-2" onClick={() => handleEdit(beneficiary)}>
                                    Edit
                                </button>
                                <button className="btn btn-danger" onClick={() => handleDelete(beneficiary.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn btn-success mt-3" onClick={handleAddBeneficiary}>
                Add a beneficiary
            </button>

            <div className="modal fade" id="beneficiaryModal" tabIndex="-1" aria-labelledby="beneficiaryModalLabel" aria-hidden="true" ref={modalRef}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="beneficiaryModalLabel">{editingBeneficiaryId ? "Edit Beneficiary" : "Add a Beneficiary"}</h5>
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
                                    <label className="form-label">Account</label>
                                    <input type="text" className="form-control" name="account" value={beneficiaryData.account} onChange={handleInputChange} required />
                                </div>
                                <div>
                                    <input type="file" accept='image/*' 
                                    onChange={handleImageUpload} 
                                    className='upload-button mt-3 ' />
                                    <div className="image-gallery">
                                        {beneficiaryData.image_url ? <img src={beneficiaryData.image_url} className="uploaded-image " /> : null}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Active</label>
                                    <input type="checkbox" className="form-check-input ms-2" name="is_active" checked={beneficiaryData.is_active} onChange={(e) => setBeneficiaryData({ ...beneficiaryData, is_active: e.target.checked })} />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">{editingBeneficiaryId ? "Update Beneficiary" : "Create Beneficiary"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
