import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

export const DonorForm = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [is_active, setIsActive] = useState(true);
    const [image_url, setImage_url] = useState('');

    useEffect(() => {
        if (params.id) {
            const donor = store.donors.find((d) => d.id === parseInt(params.id));
            if (donor) {
                setName(donor.name);
                setLast_name(donor.last_name);
                setEmail(donor.email);
                setImage_url(donor.image_url)
                setIsActive(donor.is_active);
            }
        }
    }, [params.id, store.donors]);


    const getDonorById = async () => {
        const donor = await actions.fetchDonorById(params.id);
        if (donor) {
            setName(donor.name);
            setLast_name(donor.last_name);
            setEmail(donor.email);
            setImage_url(donor.image_url)
            setIsActive(donor.is_active);
        }
    }

    useEffect(() => {
        getDonorById();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const donorData = { name, last_name, email, password, is_active, image_url };
        if (params.id) {
            await actions.updateDonor(params.id, donorData);
        } else {
            await actions.createDonor(donorData);
        }
        navigate("/donors");
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
        <div className="container">
            <h2>{params.id ? "Editar Donante" : "Crear Donante"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        value={last_name}
                        onChange={(e) => setLast_name(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="is_active"
                        checked={is_active}
                        onChange={(e) => setIsActive(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="is_active">
                        ¿Activo?
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
                <div>
                    <input type="file" accept='image/*'
                        onChange={handleImageUpload}
                        className='upload-button mt-3 ' />
                    <div className="image-gallery">
                        {image_url ? <img src={image_url} className="uploaded-image " /> : null}
                    </div>
                </div>
            </form>
        </div>
    );
};
