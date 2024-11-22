import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/navbarDashboard.css";


export const NavbarDashboard = () => {
    const [theme, setTheme] = useState('light');
    const [donors, setDonor] = useState([]);
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    
    const handleFoundationClick = () => {
        navigate('/foundations-list/');
    };
    
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

    useEffect(() => {
        actions.fetchDonorData();
    }, []);

    // console.log(store.user)


    return (
        <main>

            <div className="container">
                <nav className="navbar sidebar navbar-expand-xl navbar-light" >
                    <div page-content container-fluid>
                        <div className="offcanvas offcanvas-start flex-row custom-scrollbar h-100 os-host os-theme-dark os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition" data-bs-backdrop="true" tabIndex="-1" id="offcanvasSidebar">
                            <div className="os-resize-observer-host observed">
                                <div className="os-resize-observer" style={{ left: "0px", right: "auto" }}>
                                </div>
                            </div>
                            <div className="os-size-auto-observer observed" style={{ height: "calc(100% + 1px)", float: "left" }}>
                                <div className="os-resize-observer">
                                </div>
                            </div>
                            <div className="os-content-glue" style={{ width: "260px", margin: "0px", maxwidth: "100%", height: "260px" }}>
                            </div>
                            <div className="os-padding">
                                <div className="os-viewport os-viewport-native-scrollbars-invisible" tabIndex="-1" style={{ overflowy: "scroll" }}>
                                    <div className="os-content" style={{ padding: "0px", height: "100%", width: "100%", float: "left" }}>
                                        <div className="offcanvas-body sidebar-content d-flex flex-column pt-4">

                                                <ul className="navbar-nav flex-column" id="navbar-sidebar">
                                                <li className="nav-item"><a href="admin-dashboard.html" className="nav-link active">Dashboard</a></li>

                                            
                                                <li className="av-link" data-bs-toggle="collapse" href="#collapsebooking" role="button" aria-expanded="false" aria-controls="collapsebooking" onClick={handleFoundationClick}>Foundations</li>
                                            
{/* 
                                                <li className="nav-item">
                                                    <a className="nav-link" data-bs-toggle="collapse" href="#collapsebooking" role="button" aria-expanded="false" aria-controls="collapsebooking">
                                                        My Profile
                                                    </a>

                    
                                                </li> */}

                                            </ul>

                                            <div className="d-flex align-items-center justify-content-between text-primary-hover mt-auto p-3">
                                                <a className="h6 fw-light mb-0 text-body" href="#" onClick={handleLogout} data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Sign out" >
                                                    <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
                                                </a>
                                                <a className="h6 mb-0 text-body" href="admin-settings.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Settings">
                                                    <i className="bi bi-gear-fill"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
                                <div className="os-scrollbar-track os-scrollbar-track-off"><div className="os-scrollbar-handle" style={{ width: "100%", transform: "translate(0px, 0px)" }}>
                                </div>
                                </div>
                            </div>
                            <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
                                <div className="os-scrollbar-track os-scrollbar-track-off">
                                    <div className="os-scrollbar-handle" style={{ height: "44.3878%", transform: "translate(0px, 99.2691px)" }}>
                                    </div>
                                </div>
                            </div>
                            <div className="os-scrollbar-corner">
                            </div>
                        </div>
                    </div>
                </nav>

            </div>

        </main>
    );
};