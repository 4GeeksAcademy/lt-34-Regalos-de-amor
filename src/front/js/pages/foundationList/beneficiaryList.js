import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";


export const BeneficiaryList = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
   
    const handleFoundationClick = (id) => {
        navigate(`/foundation-beneficiaries/${id}`);
    };

    useEffect(() => {
        actions.fetchAllFoundations()
    }, [])

    return (
        <>
            {/* <!-- Hotel grid START --> */}
            
            <div className="row g-4 mb-5">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h4 className="mb-0">Populars Foundations</h4>
                        <a href="#" className="btn btn-primary-soft mb-0">View All</a>
                    </div>
                </div>

                {store.foundation.map((item) => (

                    <div className="col-lg-6">
                        <div className="card shadow p-3">
                            <div className="row g-4">
                                <div className="col-md-3">

                                    {/* <img src={item.image_url}
                                        alt="Loading..."
                                        style={{ width: '100px', height: '100px' }} /> */}
                                </div>

                                <div className="col-md-9">
                                    <div className="card-body position-relative d-flex flex-column p-0 h-100">
                                        <div className="list-inline-item dropdown position-absolute top-0 end-0">

                                            <ul className="dropdown-menu dropdown-menu-end min-w-auto shadow" aria-labelledby="dropdownAction1">
                                                <li><a className="dropdown-item small" href="#"><i className="bi bi-info-circle me-2"></i>Report</a></li>
                                                <li><a className="dropdown-item small" href="#"><i className="bi bi-slash-circle me-2"></i>Disable</a></li>
                                            </ul>
                                        </div>

                                        <h5 className="card-title  mb-0 me-5"><a href="#">{item.name}</a></h5>
                                        <small><i className="bi bi-geo-alt me-2"></i>{item.description}</small>

                                        <div className=" align-items-center">
                                            <p className=" mb-0 me-1">Country: {item.country}</p>
                                            <p className="mb-0 me-2">Email: {item.email}</p>
                                        </div>
                                        <div>
                                            <button className="btn btn-purple" onClick={() => handleFoundationClick(item.id)} >See Beneficiary</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </>
    );
};