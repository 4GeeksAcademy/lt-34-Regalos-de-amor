import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"


export const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()


    async function sendData(e) {
        e.preventDefault()

        const response = await actions.loginDonor(email, password)
        if (response) {
            navigate("/donorform")
        }else{
            navigate("/donors")
        }

    }

    const Donoruser = async () => {
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/donor/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Suponiendo que data.profileCompleted es una propiedad que indica si el perfil está completo
            if (data.profileCompleted) {
                // Redirigir a la página del Donor
                window.location.href = '/donors';
            } else {
                // Redirigir a la página para completar el perfil
                window.location.href = '/donorform';
            }
        } catch (error) {
            console.error('Error al obtener el perfil del donante:', error);
        }
    };
    return (
        <div>
            <form className=".w-25" onSubmit={sendData}>
                <h3 className="text-secondary">Login Donor</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <Link to="/signup/donor" className="my-link">Signup</Link>

        </div>
    );
};

