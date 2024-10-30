import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import Login from "../component/login";
import {FoundationCard} from "./foundationCard";

export const FoundationForm = (props) => {
    const [Name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState();
    const navigate = useNavigate();
    const submit = async (e) => { 
        e.preventDefault();

        const foundation = {
            name: Name,
            description: description,
            country: country,
            email: email,
            password: password,
            id: id
        };

        if (id) {
            await props.update(id, foundation);
        } else {
            await props.add(foundation);
        }

        setName("");
        setDescription("");
        setCountry("");
        setEmail("");
        setPassword("");
        setId(null);
    }
    
    useEffect(() => {
        if (props.foundationToEdit) {
            setName(props.foundationToEdit.name || "");
            setDescription(props.foundationToEdit.description || ""); 
            setCountry(props.foundationToEdit.country || "");
            setEmail(props.foundationToEdit.email || "");
            setPassword(props.foundationToEdit.password || ""); 
            setId(props.foundationToEdit.id || null); 
        }
    }, [props.foundationToEdit]);

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">Add a new foundation</h1>
                <form className="col-8 offset-2" onSubmit={submit}>
                    <label className="mt-2" htmlFor="email">Name</label>
                    <input
                        value={Name}
                        onChange={(event) => setName(event.target.value)}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                    />
                    <label className="mt-2" htmlFor="description">Description</label>
                    <input
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="Enter description"
                    />
                    <label className="mt-2" htmlFor="country">Country</label>
                    <input
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                        type="text"
                        className="form-control"
                        id="country"
                        placeholder="Enter country"
                    />
                    <div> <Login/>              
                    <label className="mt-2" htmlFor="email">Email</label>
                    <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                    /> </div>  
                    <label className="mt-2" htmlFor="password">Password</label>
                    <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="text"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                    />
                    <button className="mt-3 col-12 btn btn-primary" type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};


export default FoundationForm;
