import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import fourt from "../../img/fourt.jpg"
import "../../styles/foundationsList.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const FoundationBeneficiaries = () => {
    const { id } = useParams();
    const [beneficiaries, setBeneficiaries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
    const { actions } = useContext(Context);
    const [{ options }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    const [amount, setAmount] = useState("");
    const [theme, setTheme] = useState('light');


    useEffect(() => {
        const fetchBeneficiaries = async () => {
            if (!id) return;
            try {
                setLoading(true);
                const beneficiaries = await actions.fetchBeneficiariesByFoundationId(id);
                setBeneficiaries(beneficiaries);
            } catch (error) {
                setError("Failed to load beneficiaries.");
            } finally {
                setLoading(false);
            }
        };
        fetchBeneficiaries();
    }, [id]);


    const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/"); 
    }

    useEffect(() => {
        document.body.className = `${theme}-theme`;
      }, [theme]);
    
      const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        // Lógica adicional si es necesario (por ejemplo, guardar la preferencia en localStorage)
      };

    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    };

    const onCreateOrder = (data, actions) => {
        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            alert("Please enter a valid amount");
            return;
        }

        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: amount.toString(),
                        currency_code: currency
                    },
                },
            ],
        });
    };

    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    };

    return (


           <main> 
        {beneficiaries.map((beneficiary) => (
            <div key={beneficiary.id}>

            <div className="page-content container-fluid">
                <nav className="navbar top-bar navbar-light py-0 py-xl-3">
                    <div className="container-fluid p-0">
                        <div className="d-flex align-items-center w-100">
                            <div className="d-flex align-items-center d-xl-none">
                                <a className="navbar-brand" href="index.html">
                                    <img className="navbar-brand-item h-40px" src="" alt="" />
                    </a>
                </div>
                <div className="navbar-expand-xl sidebar-offcanvas-menu">
                    <button className="navbar-toggler me-auto p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar" aria-expanded="false" aria-label="Toggle navigation" data-bs-auto-close="outside">
                        <i className="bi bi-list text-primary fa-fw" data-bs-target="#offcanvasMenu"></i>
                    </button>
                </div>
                <div className="navbar-expand-lg ms-auto ms-xl-0">
                    <button className="navbar-toggler ms-auto p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTopContent" aria-controls="navbarTopContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
                <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
                    <li className="nav-item dropdown ms-3">
                        <button className="nav-notification lh-0 btn btn-light p-0 mb-0" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" data-bs-display="static">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-half fa-fw theme-icon-active" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
                                <use href="#"></use>
                            </svg>
                        </button>

                        <ul className="dropdown-menu min-w-auto dropdown-menu-end" aria-labelledby="bd-theme">
                            <li className="mb-1">
                                <button   type="button"
                                        className={`dropdown-item d-flex align-items-center ${theme === 'light' ? 'active' : ''}`}
                                        data-bs-theme-value="light"
                                        onClick={() => handleThemeChange('light')}>
                                    <svg width="16" height="16" fill="currentColor" className="bi bi-brightness-high-fill fa-fw mode-switch me-1" viewBox="0 0 16 16">
                                        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                                        <use href="#"></use>
                                    </svg>Light
                                </button>
                            </li>
                            <li className="mb-1">
                                <button type="button" 
                                className={`dropdown-item d-flex align-items-center ${theme === 'dark' ? 'active' : ''}`}
                                data-bs-theme-value="dark"
                                onClick={() => handleThemeChange('dark')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars-fill fa-fw mode-switch me-1" viewBox="0 0 16 16">
                                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
                                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
                                        <use href="#"></use>
                                    </svg>Dark
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                        className={`dropdown-item d-flex align-items-center ${theme === 'auto' ? 'active' : ''}`}
                                        data-bs-theme-value="auto"
                                        onClick={() => handleThemeChange('dark')}
                                        >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-half fa-fw mode-switch" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
                                        <use href="#"></use>
                                    </svg>Auto
                                </button>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item ms-3 dropdown">

                        <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className="avatar-img rounded-2" src={fourt} alt="avatar" style={{ width: "45px", height: "auto" }} />
                        </a>

                        <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">

                            <li className="px-3 mb-3 " >
                                <div className="d-flex align-items-center">
                                    <div className="avatar me-3">
                                        <img className="avatar-img rounded-circle shadow" src={fourt} alt="avatar" style={{ width: "45px", height: "auto" }}/>
                                    </div>
                                    <div>
                                        <a className="h6 mt-2 mt-sm-0" href="#">{beneficiary.name}</a>
                                        <p className="small m-0">{beneficiary.email}</p>
                                    </div>
                                </div>
                            </li>
                            <li> <hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"15px", height:"auto"}}><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>Settings</a></li>
                            <li><a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"15px", height:"auto"}}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>Help Center</a></li>
                            <li><a className="dropdown-item bg-danger-soft-hover" href="#" onClick={handleLogout}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"15px", height:"auto"}}><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>Sign Out</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
    </div>
    ))}



        <div className="container my-5">
            <h2 className="display-5 text-center text-primary fw-bold mb-4">Beneficiaries</h2>
            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                    <img
                        src="https://discuss.wxpython.org/uploads/default/original/2X/6/6d0ec30d8b8f77ab999f765edd8866e8a97d59a3.gif"
                        alt="Loading..."
                        style={{ width: '100px', height: '100px' }}
                    />
                </div>
            ) : error ? (
                <p className="text-danger text-center">{error}</p>
            ) : (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {beneficiaries.map((beneficiary) => (
                        <div key={beneficiary.id} className="col">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={beneficiary.image || "https://via.placeholder.com/150"}
                                    alt={beneficiary.name}
                                    className="card-img-top"
                                    style={{ objectFit: 'cover', height: '200px' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-primary fw-bold">{beneficiary.name}</h5>
                                    <p className="card-text text-muted">{beneficiary.wish_gift}</p>
                                    <p className="card-text small text-secondary mb-4">{beneficiary.history}</p>
                                    <p className="card-text small text-secondary mb-4">{beneficiary.account}</p>
                                    <button
                                        onClick={() => handleDonateClick(beneficiary)}
                                        className="btn btn-outline-primary mt-auto"
                                    >
                                        Donate
                                    </button>
                                </div>
                                {selectedBeneficiary && selectedBeneficiary.id === beneficiary.id && (
                                    <div className="card-footer">
                                        <h6 className="text-center text-secondary fw-semibold">Donate to {selectedBeneficiary.name}</h6>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <select value={currency} onChange={onCurrencyChange} className="form-select">
                                                <option value="USD">USD</option>
                                                <option value="EUR">EUR</option>
                                            </select>
                                            <input
                                                type="number"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                placeholder="Enter amount"
                                                className="form-control ms-2"
                                                style={{ maxWidth: '100px' }}
                                            />
                                        </div>
                                        <PayPalButtons
                                            style={{ layout: "vertical" }}
                                            createOrder={(data, actions) => onCreateOrder(data, actions)}
                                            onApprove={(data, actions) => onApproveOrder(data, actions)}
                                            forceReRender={[amount, currency]}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        </main>
    );
};
