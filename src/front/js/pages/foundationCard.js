import React from "react";

const FoundationCard = (props) => {
    return (
        <div className="container mb-4 card">
            <div className="row p-3">
                <div className="col-8">
                    <h1>{props.name}</h1>
                    <p><i className="p-2 fas fa-map-marker-alt"></i>{props.description}</p>
                    <p><i className="p-2 fas fa-phone"></i>{props.country}</p>
                    <p><i className="p-2 fas fa-envelope"></i>{props.email}</p>
                    <p><i className="p-2 fas fa-envelope"></i>{props.password}</p>
                </div>
                <div className="col-2">
                    <button className="pencil" onClick={props.edit} data-bs-toggle="modal" data-bs-target="#formModal"><i className="p-2 pencil fas fa-pencil-alt"></i></button>
                    <button className="trashCan" onClick={props.delete} ><i className="p-2 fas fa-trash-alt"></i></button>
                </div>
            </div>
        </div>
    );
};

export default FoundationCard;
