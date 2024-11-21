import Reac, {useState, useEffect, useContext} from "react";
import fourt from "../../img/fourt.jpg"
import {Context} from "../store/appContext";
import cat from "../../img/friends.jpg"
import "../../styles/navbarDashboard.css";

export const ProofDashboard = () => {

    const [theme, setTheme] = useState('light');
    const [donors, setDonor] = useState([]);
    const {store, actions} = useContext(Context);

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


    return (
       
        <main>
        <nav className="navbar sidebar navbar-expand-xl navbar-light" >
        <div className="d-flex align-items-center " >
            <a className="navbar-brand" href="index.html">
                <img className="light-mode-item navbar-brand-item" src={cat} alt="logo" style={{height: "40px", width:"auto"}}/>
            </a>
        </div>
        <div className="offcanvas offcanvas-start flex-row custom-scrollbar h-100 os-host os-theme-dark os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition" data-bs-backdrop="true" tabIndex="-1" id="offcanvasSidebar"><div className="os-resize-observer-host observed"><div className="os-resize-observer" style={{left: "0px", right: "auto"}}></div></div><div className="os-size-auto-observer observed" style={{height: "calc(100% + 1px)", float: "left"}}><div className="os-resize-observer"></div></div><div className="os-content-glue" style={{width: "260px", margin: "0px", maxwidth: "100%", height: "260px"}}></div><div className="os-padding"><div className="os-viewport os-viewport-native-scrollbars-invisible" tabIndex="-1" style={{ overflowy: "scroll"}}><div className="os-content" style={{padding: "0px", height: "100%", width: "100%", float: "left"}}>
            <div className="offcanvas-body sidebar-content d-flex flex-column pt-4">
                <ul className="navbar-nav flex-column" id="navbar-sidebar">
                    <li className="nav-item"><a href="admin-dashboard.html" className="nav-link active">Dashboard</a></li>

                    <li className="nav-item ms-2 my-2">Pages</li>

                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#collapsebooking" role="button" aria-expanded="false" aria-controls="collapsebooking">
                        Bookings
                        </a>
                        
                        <ul className="nav collapse flex-column" id="collapsebooking" data-bs-parent="#navbar-sidebar">
                            <li className="nav-item"> <a className="nav-link" href="admin-booking-list.html">Booking List</a></li>
                            <li className="nav-item"> <a className="nav-link" href="admin-booking-detail.html">Booking Detail</a></li>
                        </ul>
                    </li>
    
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#collapseguest" role="button" aria-expanded="false" aria-controls="collapseguest">
                        Guests
                        </a>
                        
                        <ul className="nav collapse flex-column" id="collapseguest" data-bs-parent="#navbar-sidebar">
                            <li className="nav-item"> <a className="nav-link" href="admin-guest-list.html">Guest List</a></li>
                            <li className="nav-item"> <a className="nav-link" href="admin-guest-detail.html">Guest Detail</a></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#collapseagent" role="button" aria-expanded="false" aria-controls="collapseagent">
                        Agents
                        </a>
                        
                        <ul className="nav collapse flex-column" id="collapseagent" data-bs-parent="#navbar-sidebar">
                            <li className="nav-item"> <a className="nav-link" href="admin-agent-list.html">Agent List</a></li>
                            <li className="nav-item"> <a className="nav-link" href="admin-agent-detail.html">Agent Detail</a></li>
                        </ul>
                    </li>
                    
                    <li className="nav-item"> <a className="nav-link" href="admin-reviews.html">Reviews</a></li>
    
                    <li className="nav-item"> <a className="nav-link" href="admin-earnings.html">Earnings</a></li>
    
                    <li className="nav-item"> <a className="nav-link" href="admin-settings.html">Admin Settings</a></li>
    
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#collapseauthentication" role="button" aria-expanded="false" aria-controls="collapseauthentication">
                            Authentication
                        </a>
                        
                        <ul className="nav collapse flex-column" id="collapseauthentication" data-bs-parent="#navbar-sidebar">
                            <li className="nav-item"> <a className="nav-link" href="sign-up.html">Sign Up</a></li>
                            <li className="nav-item"> <a className="nav-link" href="sign-in.html">Sign In</a></li>
                            <li className="nav-item"> <a className="nav-link" href="forgot-password.html">Forgot Password</a></li>
                            <li className="nav-item"> <a className="nav-link" href="error.html">Error 404</a></li>
                        </ul>
                    </li>
    
                    <li className="nav-item ms-2 my-2">Documentation</li>
    
                    <li className="nav-item"> <a className="nav-link" href="docs/index.html">Documentation</a></li>
    
                    <li className="nav-item"> <a className="nav-link" href="docs/changelog.html">Changelog</a></li>
                </ul>
                
                <div className="d-flex align-items-center justify-content-between text-primary-hover mt-auto p-3">
                    <a className="h6 fw-light mb-0 text-body" href="sign-in.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Sign out">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
                    </a>
                    <a className="h6 mb-0 text-body" href="admin-settings.html" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Settings">
                        <i className="bi bi-gear-fill"></i>
                    </a>
                </div>
            </div>
        </div></div></div><div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"><div className="os-scrollbar-track os-scrollbar-track-off"><div className="os-scrollbar-handle" style={{ width: "100%" , transform: "translate(0px, 0px)" }}></div></div></div><div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden"><div className="os-scrollbar-track os-scrollbar-track-off"><div className="os-scrollbar-handle" style={{ height: "44.3878%", transform: "translate(0px, 99.2691px)" }}></div></div></div><div className="os-scrollbar-corner"></div></div>
        </nav> 

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
                                            <a className="h6 mt-2 mt-sm-0" href="#">April</a>
                                            <p className="small m-0">lunes@ok.com</p>
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



{/* // <!-- Title --> */}
        {/* <div className="row">
            <div className="col-12 mb-4 mb-sm-5">
                <div className="d-sm-flex justify-content-between align-items-center">
                    <h1 className="h3 mb-2 mb-sm-0">Dashboard</h1>
                    <div className="d-grid"><a href="#" className="btn btn-primary-soft mb-0"><i className="bi bi-plus-lg fa-fw"></i> New Booking</a></div>				
                </div>
            </div>
        </div> */}

{/* <!-- Counter boxes START --> */}
                {/* <div className="row g-4 mb-5">
                   
                    <div className="col-md-6 col-xxl-3">
                        <div className="card card-body bg-warning bg-opacity-10 border border-warning border-opacity-25 p-4 h-100">
                            <div className="d-flex justify-content-between align-items-center">
                               
                                <div>
                                    <h4 className="mb-0">56</h4>
                                    <span className="h6 fw-light mb-0">Total Hotels</span>
                                </div>
                               
                                <div className="icon-lg rounded-circle bg-warning text-white mb-0"><i className="fa-solid fa-hotel fa-fw"></i></div>
                            </div>
                        </div>
                    </div>
    
                
                    <div className="col-md-6 col-xxl-3">
                        <div className="card card-body bg-success bg-opacity-10 border border-success border-opacity-25 p-4 h-100">
                            <div className="d-flex justify-content-between align-items-center">
                             
                                <div>
                                    <h4 className="mb-0">$836,789</h4>
                                    <span className="h6 fw-light mb-0">Total Incomes</span>
                                </div>
                           
                                <div className="icon-lg rounded-circle bg-success text-white mb-0"><i className="fa-solid fa-hand-holding-dollar fa-fw"></i></div>
                            </div>
                        </div>
                    </div>
    
             
                    <div className="col-md-6 col-xxl-3">
                        <div className="card card-body bg-primary bg-opacity-10 border border-primary border-opacity-25 p-4 h-100">
                            <div className="d-flex justify-content-between align-items-center">
                              
                                <div>
                                    <h4 className="mb-0">245</h4>
                                    <span className="h6 fw-light mb-0">Total Rooms</span>
                                </div>
                          
                                <div className="icon-lg rounded-circle bg-primary text-white mb-0"><i className="fa-solid fa-bed fa-fw"></i></div>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-6 col-xxl-3">
                        <div className="card card-body bg-info bg-opacity-10 border border-info border-opacity-25 p-4 h-100">
                            <div className="d-flex justify-content-between align-items-center">
                               
                                <div>
                                    <h4 className="mb-0">147</h4>
                                    <span className="h6 fw-light mb-0">Booked Room</span>
                                </div>
                              
                                <div className="icon-lg rounded-circle bg-info text-white mb-0"><i className="fa-solid fa-building-circle-check fa-fw"></i></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <!-- Counter boxes END --> */}

                {/* <!-- Hotel grid START --> */}
                {/* <div className="row g-4 mb-5">
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <h4 className="mb-0">Popular Hotels</h4>
                        <a href="#" className="btn btn-primary-soft mb-0">View All</a>
                    </div>	
                </div>

                <div className="col-lg-6">
                    <div className="card shadow p-3">
                        <div className="row g-4">
                            <div className="col-md-3">
                                <img src="assets/images/category/hotel/4by3/10.jpg" className="rounded-2" alt="Card image"/>
                            </div>

                            <div className="col-md-9">
                                <div className="card-body position-relative d-flex flex-column p-0 h-100">
                                    <div className="list-inline-item dropdown position-absolute top-0 end-0">
                            
                                        <a href="#" className="btn btn-sm btn-round btn-light" role="button" id="dropdownAction1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots-vertical"></i>
                                        </a>
                                    
                                        <ul className="dropdown-menu dropdown-menu-end min-w-auto shadow" aria-labelledby="dropdownAction1">
                                            <li><a className="dropdown-item small" href="#"><i className="bi bi-info-circle me-2"></i>Report</a></li>
                                            <li><a className="dropdown-item small" href="#"><i className="bi bi-slash-circle me-2"></i>Disable</a></li>
                                        </ul>
                                    </div>

                                    <h5 className="card-title mb-0 me-5"><a href="hotel-detail.html">Pride moon Village Resort &amp; Spa</a></h5>
                                    <small><i className="bi bi-geo-alt me-2"></i>31J W Spark Street, California - 24578</small>

                                    <div className="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
                                
                                        <div className="d-flex align-items-center">
                                            <h5 className="fw-bold mb-0 me-1">$1586</h5>
                                            <span className="mb-0 me-2">/day</span>
                                        </div>
                                    
                                        <div className="hstack gap-2 mt-3 mt-sm-0">
                                            <a href="#" className="btn btn-sm btn-primary-soft px-2 mb-0"><i className="bi bi-pencil-square fa-fw"></i></a>    
                                            <a href="#" className="btn btn-sm btn-danger-soft px-2 mb-0"><i className="bi bi-slash-circle fa-fw"></i></a>    
                                        </div>                 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-6">
                    <div className="card shadow p-3">
                        <div className="row g-4">
                        
                            <div className="col-md-3">
                                <img src="assets/images/category/hotel/4by3/08.jpg" className="rounded-2" alt="Card image"/>
                            </div>

                            <div className="col-md-9">
                                <div className="card-body position-relative d-flex flex-column p-0 h-100">

                                    <div className="list-inline-item dropdown position-absolute top-0 end-0">
                                    
                                        <a href="#" className="btn btn-sm btn-round btn-light" role="button" id="dropdownAction2" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots-vertical"></i>
                                        </a>
                                    
                                        <ul className="dropdown-menu dropdown-menu-end min-w-auto shadow" aria-labelledby="dropdownAction2">
                                            <li><a className="dropdown-item small" href="#"><i className="bi bi-info-circle me-2"></i>Report</a></li>
                                            <li><a className="dropdown-item small" href="#"><i className="bi bi-slash-circle me-2"></i>Disable</a></li>
                                        </ul>
                                    </div>
                                    <h5 className="card-title mb-0 me-5"><a href="hotel-detail.html">Courtyard by Marriott New York</a></h5>
                                    <small><i className="bi bi-geo-alt me-2"></i>258 W jimmy Street, New york - 24578</small>

                                    <div className="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
                                    
                                        <div className="d-flex align-items-center">
                                            <h5 className="fw-bold mb-0 me-1">$1025</h5>
                                            <span className="mb-0 me-2">/day</span>
                                        </div>
                                    
                                        <div className="hstack gap-2 mt-3 mt-sm-0">
                                            <a href="#" className="btn btn-sm btn-primary-soft px-2 mb-0"><i className="bi bi-pencil-square fa-fw"></i></a>    
                                            <a href="#" className="btn btn-sm btn-danger-soft px-2 mb-0"><i className="bi bi-slash-circle fa-fw"></i></a>    
                                        </div>                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card shadow p-3">
                        <div className="row g-4">
                    
                            <div className="col-md-3">
                                <img src="assets/images/category/hotel/4by3/09.jpg" className="rounded-2" alt="Card image"/>
                            </div>

                            <div className="col-md-9">
                                <div className="card-body position-relative d-flex flex-column p-0 h-100">

                            
                                    <div className="list-inline-item dropdown position-absolute top-0 end-0">
                                    
                                        <a href="#" className="btn btn-sm btn-round btn-light" role="button" id="dropdownAction3" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots-vertical"></i>
                                        </a>
                                    
                                        <ul className="dropdown-menu dropdown-menu-end min-w-auto shadow" aria-labelledby="dropdownAction3">
                                            <li><a className="dropdown-item small" href="#"><i className="bi bi-info-circle me-2"></i>Report</a></li>
                                            <li><a className="dropdown-item small" href="#"><i className="bi bi-slash-circle me-2"></i>Disable</a></li>
                                        </ul>
                                    </div>
                                    <h5 className="card-title mb-0 me-5"><a href="hotel-detail.html">Park Plaza Lodge Hotel</a></h5>
                                    <small><i className="bi bi-geo-alt me-2"></i>31J W Spark Street, California - 24578</small>

                            
                                    <div className="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
                                
                                        <div className="d-flex align-items-center">
                                            <h5 className="fw-bold mb-0 me-1">$958</h5>
                                            <span className="mb-0 me-2">/day</span>
                                        </div>
                                
                                        <div className="hstack gap-2 mt-3 mt-sm-0">
                                            <a href="#" className="btn btn-sm btn-primary-soft px-2 mb-0"><i className="bi bi-pencil-square fa-fw"></i></a>    
                                            <a href="#" className="btn btn-sm btn-danger-soft px-2 mb-0"><i className="bi bi-slash-circle fa-fw"></i></a>    
                                        </div>                 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-6">
                    <div className="card shadow p-3">
                        <div className="row g-4">
                    
                            <div className="col-md-3">
                                <img src="assets/images/category/hotel/4by3/07.jpg" className="rounded-2" alt="Card image"/>
                            </div>

                        
                            <div className="col-md-9">
                                <div className="card-body position-relative d-flex flex-column p-0 h-100">

                                    <div className="list-inline-item dropdown position-absolute top-0 end-0">
                                
                                        <a href="#" className="btn btn-sm btn-round btn-light" role="button" id="dropdownAction4" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-three-dots-vertical"></i>
                                        </a>
                                
                                        <ul className="dropdown-menu dropdown-menu-end min-w-auto shadow" aria-labelledby="dropdownAction4">
                                            <li><a className="dropdown-item small" href="#"><i className="bi bi-info-circle me-2"></i>Report</a></li>
                                            <li><a className="dropdown-item small" href="#"><i className="bi bi-slash-circle me-2"></i>Disable</a></li>
                                        </ul>
                                    </div>

                            
                                    <h5 className="card-title mb-0 me-5"><a href="hotel-detail.html">Royal Beach Resort</a></h5>
                                    <small><i className="bi bi-geo-alt me-2"></i>589 J Wall Street, London - 24578</small>

                                
                                    <div className="d-sm-flex justify-content-sm-between align-items-center mt-3 mt-md-auto">
                                    
                                        <div className="d-flex align-items-center">
                                            <h5 className="fw-bold mb-0 me-1">$1005</h5>
                                            <span className="mb-0 me-2">/day</span>
                                        </div>
                                    
                                        <div className="hstack gap-2 mt-3 mt-sm-0">
                                            <a href="#" className="btn btn-sm btn-primary-soft px-2 mb-0"><i className="bi bi-pencil-square fa-fw"></i></a>    
                                            <a href="#" className="btn btn-sm btn-danger-soft px-2 mb-0"><i className="bi bi-slash-circle fa-fw"></i></a>    
                                        </div>                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div> */}
                {/* <!-- Hotel grid END --> */}

                {/* <!-- Widget START --> */}
                {/* <div className="row g-4">
                    <div className="col-xxl-8">
                        <div className="card shadow h-100">
                            <div className="card-header border-bottom">
                                <h5 className="card-header-title">Guest Activity</h5>
                            </div>
                            <div className="card-body">
                                <div className="d-flex gap-4 mb-3">
                                    <h6><span className="fw-light"><i className="bi bi-square-fill text-primary"></i> Check-in:</span> 475 Guests</h6>
                                    <h6><span className="fw-light"><i className="bi bi-square-fill text-info"></i> Check-out:</span> 157 Guests</h6>
                                </div>
                                
                                <div id="ChartGuesttraffic" className="mt-2" style={{ minHeight: "365px" }}>
  <div id="apexcharts9lxde2yj" className="apexcharts-canvas apexcharts9lxde2yj apexcharts-theme-light" style={{ width: "1001px", height: "350px" }}>
    <svg id="SvgjsSvg1295" width="1001" height="350" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.dev" className="apexcharts-svg apexcharts-zoomable" transform="translate(0, 0)" style={{ background: "transparent" }}>
      <foreignObject x="0" y="0" width="1001" height="350">
        <div className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" xmlns="http://www.w3.org/1999/xhtml" style={{ inset: "auto 0px 1px", position: "absolute", maxHeight: "175px" }}>
          <div className="apexcharts-legend-series" rel="1" seriesname="Check-in" data-collapsed="false" style={{ margin: "2px 5px" }}>
            <span className="apexcharts-legend-marker" rel="1" data-collapsed="false" style={{ background: "rgb(142, 133, 230) !important", color: "rgb(142, 133, 230)", height: "12px", width: "12px", left: "0px", top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "12px" }}></span>
            <span className="apexcharts-legend-text" rel="1" i="0" data-default-text="Check-in" data-collapsed="false" style={{ color: "rgb(55, 61, 63)", fontSize: "12px", fontWeight: "400", fontFamily: "Helvetica, Arial, sans-serif" }}>Check-in</span>
                                            </div>
                                            <div className="apexcharts-legend-series" rel="2" seriesname="Check-out" data-collapsed="false" style={{ margin: "2px 5px" }}>
            <span className="apexcharts-legend-marker" rel="2" data-collapsed="false" style={{ background: "rgb(23, 162, 184) !important", color: "rgb(23, 162, 184)", height: "12px", width: "12px", left: "0px", top: "0px", borderWidth: "0px", borderColor: "rgb(255, 255, 255)", borderRadius: "12px" }}></span>
            <span className="apexcharts-legend-text" rel="2" i="1" data-default-text="Check-out" data-collapsed="false" style={{ color: "rgb(55, 61, 63)", fontSize: "12px", fontWeight: "400", fontFamily: "Helvetica, Arial, sans-serif" }}>Check-out</span>
                </div>
                </div>
        <style type="text/css">
          .apexcharts-legend {{
            display: "flex",
            overflow: "auto",
            padding: "0 10px"
          }}
          .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {{
            flexWrap: "wrap"
          }}
          .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {{
            flexDirection: "column",
            bottom: "0"
          }}
          .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {{
            justifyContent: "flex-start"
          }}
          .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {{
            justifyContent: "center"
          }}
          .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {{
            justifyContent: "flex-end"
          }}
          .apexcharts-legend-series {{
            cursor: "pointer",
            lineHeight: "normal"
          }}
          .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{{
            display: "flex",
            alignItems: "center"
          }}
          .apexcharts-legend-text {{
            position: "relative",
            fontSize: "14px"
          }}
          .apexcharts-legend-text *, .apexcharts-legend-marker * {{
            pointerEvents: "none"
          }}
          .apexcharts-legend-marker {{
            position: "relative",
            display:" inline-block",
            cursor:" pointer",
            marginRight: "3px",
            borderStyle: "solid"
          }}
          .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{{
            display: "inline-block"
          }}
          .apexcharts-legend-series.apexcharts-no-click {{
            cursor: "auto"
          }}
          .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {{
            display: "none !important"
          }}
          .apexcharts-inactive-legend {{
            opacity: "0.45"
          }}
          </style>
          </foreignObject>
          <rect id="SvgjsRect1300" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe">
          </rect><g id="SvgjsG1373" className="apexcharts-yaxis" rel="0" transform="translate(14.546875, 0)">
          <g id="SvgjsG1374" className="apexcharts-yaxis-texts-g">
          <text id="SvgjsText1376" font-family="Helvetica, Arial, sans-serif" x="20" y="32" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;">
          <tspan id="SvgjsTspan1377">110</tspan><title>110</title></text><text id="SvgjsText1379" font-family="Helvetica, Arial, sans-serif" x="20" y="58.4348" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1380">100</tspan>
          <title>100</title>
          </text><text id="SvgjsText1382" font-family="Helvetica, Arial, sans-serif" x="20" y="84.8696" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1383">90</tspan><title>90</title>
          </text><text id="SvgjsText1385" font-family="Helvetica, Arial, sans-serif" x="20" y="111.30440000000002" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1386">80</tspan><title>80</title></text><text id="SvgjsText1388" font-family="Helvetica, Arial, sans-serif" x="20" y="137.7392" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1389">70</tspan>
          <title>70</title></text><text id="SvgjsText1391" font-family="Helvetica, Arial, sans-serif" x="20" y="164.174" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1392">60</tspan><title>60</title></text><text id="SvgjsText1394" font-family="Helvetica, Arial, sans-serif" x="20" y="190.6088" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1395">50</tspan><title>50</title></text><text id="SvgjsText1397" font-family="Helvetica, Arial, sans-serif" x="20" y="217.0436" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1398">40</tspan><title>40</title></text><text id="SvgjsText1400" font-family="Helvetica, Arial, sans-serif" x="20" y="243.4784" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1401">30</tspan>
          <title>30</title>
          </text><text id="SvgjsText1403" font-family="Helvetica, Arial, sans-serif" x="20" y="269.9132" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1404">20</tspan>
          <title>20</title>
          </text><text id="SvgjsText1406" font-family="Helvetica, Arial, sans-serif" x="20" y="296.348" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;">
          <tspan id="SvgjsTspan1407">10</tspan>
          <title>10</title>
          </text>
          </g>
          </g>
          <g id="SvgjsG1297" className="apexcharts-inner apexcharts-graphical" transform="translate(44.546875, 30)"><defs id="SvgjsDefs1296"><clipPath id="gridRectMask9lxde2yj"><rect id="SvgjsRect1302" width="941.89453125" height="272.348" x="-4" y="-4" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMask9lxde2yj"></clipPath><clipPath id="nonForecastMask9lxde2yj"></clipPath><clipPath id="gridRectMarkerMask9lxde2yj"><rect id="SvgjsRect1303" width="937.89453125" height="268.348" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><linearGradient id="SvgjsLinearGradient1308" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop1309" stop-opacity="0.65" stop-color="rgba(142,133,230,0.65)" offset="0"></stop><stop id="SvgjsStop1310" stop-opacity="0.5" stop-color="rgba(199,194,243,0.5)" offset="1">
          </stop>
          <stop id="SvgjsStop1311" stop-opacity="0.5" stop-color="rgba(199,194,243,0.5)" offset="1">
          </stop></linearGradient><linearGradient id="SvgjsLinearGradient1317" x1="0" y1="0" x2="0" y2="1">
          <stop id="SvgjsStop1318" stop-opacity="0.65" stop-color="rgba(23,162,184,0.65)" offset="0">
          </stop>
          <stop id="SvgjsStop1319" stop-opacity="0.5" stop-color="rgba(139,209,220,0.5)" offset="1">
          </stop>
          <stop id="SvgjsStop1320" stop-opacity="0.5" stop-color="rgba(139,209,220,0.5)" offset="1">
          </stop>
          </linearGradient>
          </defs>
          <line id="SvgjsLine1301" x1="0" y1="0" x2="0" y2="264.348" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt" className="apexcharts-xcrosshairs" x="0" y="0" width="1" height="264.348" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1">
          </line>
          <line id="SvgjsLine1327" x1="0" y1="265.348" x2="0" y2="271.348" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick">
          </line>
          <line id="SvgjsLine1328" x1="155.64908854166666" y1="265.348" x2="155.64908854166666" y2="271.348" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick">
          </line>
          <line id="SvgjsLine1329" x1="311.2981770833333" y1="265.348" x2="311.2981770833333" y2="271.348" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick">
          </line>
          <line id="SvgjsLine1330" x1="466.947265625" y1="265.348" x2="466.947265625" y2="271.348" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick">
          </line>
          <line id="SvgjsLine1331" x1="622.5963541666666" y1="265.348" x2="622.5963541666666" y2="271.348" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick">
          </line>
          <line id="SvgjsLine1332" x1="778.2454427083333" y1="265.348" x2="778.2454427083333" y2="271.348" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick">
          </line>
          <line id="SvgjsLine1333" x1="933.8945312499999" y1="265.348" x2="933.8945312499999" y2="271.348" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-xaxis-tick">
          </line>
          <g id="SvgjsG1323" className="apexcharts-grid">
          <g id="SvgjsG1324" className="apexcharts-gridlines-horizontal">
          <line id="SvgjsLine1335" x1="0" y1="26.434800000000003" x2="933.89453125" y2="26.434800000000003" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline">
          </line>
          <line id="SvgjsLine1336" x1="0" y1="52.869600000000005" x2="933.89453125" y2="52.869600000000005" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline">
          </line>
          <line id="SvgjsLine1337" x1="0" y1="79.30440000000002" x2="933.89453125" y2="79.30440000000002" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline">
          </line>
          <line id="SvgjsLine1338" x1="0" y1="105.73920000000001" x2="933.89453125" y2="105.73920000000001" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline">
          </line>
          <line id="SvgjsLine1339" x1="0" y1="132.174" x2="933.89453125" y2="132.174" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline">
          </line>
          <line id="SvgjsLine1340" x1="0" y1="158.6088" x2="933.89453125" y2="158.6088" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline">
          </line>
          <line id="SvgjsLine1341" x1="0" y1="185.0436" x2="933.89453125" y2="185.0436" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline">
          </line>
          <line id="SvgjsLine1342" x1="0" y1="211.4784" x2="933.89453125" y2="211.4784" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline">
          </line>
          <line id="SvgjsLine1343" x1="0" y1="237.9132" x2="933.89453125" y2="237.9132" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline">
          </line>
          </g>
          <g id="SvgjsG1325" className="apexcharts-gridlines-vertical">
          </g>
          <line id="SvgjsLine1346" x1="0" y1="264.348" x2="933.89453125" y2="264.348" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt">
          </line>
          <line id="SvgjsLine1345" x1="0" y1="1" x2="0" y2="264.348" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt">
          </line>
          </g>
          <g id="SvgjsG1326" className="apexcharts-grid-borders">
          <line id="SvgjsLine1334" x1="0" y1="0" x2="933.89453125" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline">
          </line>
          <line id="SvgjsLine1344" x1="0" y1="264.348" x2="933.89453125" y2="264.348" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" className="apexcharts-gridline">
          </line>
          <line id="SvgjsLine1372" x1="0" y1="265.348" x2="933.89453125" y2="265.348" stroke="#e0e0e0" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt">
          </line>
          </g>
          <g id="SvgjsG1304" className="apexcharts-area-series apexcharts-plot-series">
          <g id="SvgjsG1305" className="apexcharts-series" zIndex="0" seriesName="Check-in" dataLongestSeries="true" rel="1" dataRealIndex="0">

    <path id="SvgjsPath1312" d="M 0 208.83492C 54.47718098958334 208.83492 101.17190755208335 185.0436 155.64908854166669 185.0436C 210.12626953125002 185.0436 256.82099609375 216.76536 311.29817708333337 216.76536C 365.7753580729167 216.76536 412.4700846354167 155.96532 466.947265625 155.96532C 521.4244466145833 155.96532 568.1191731770834 179.75664 622.5963541666667 179.75664C 677.07353515625 179.75664 723.7682617187501 2.643480000000011 778.2454427083334 2.643480000000011C 832.7226236979167 2.643480000000011 879.4173502604167 26.434799999999996 933.89453125 26.434799999999996C 933.89453125 26.434799999999996 933.89453125 26.434799999999996 933.89453125 264.348 L 0 264.348z" fill="url(#SvgjsLinearGradient1308)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" className="apexcharts-area" index="0" clip-path="url(#gridRectMask9lxde2yj)" pathTo="M 0 208.83492C 54.47718098958334 208.83492 101.17190755208335 185.0436 155.64908854166669 185.0436C 210.12626953125002 185.0436 256.82099609375 216.76536 311.29817708333337 216.76536C 365.7753580729167 216.76536 412.4700846354167 155.96532 466.947265625 155.96532C 521.4244466145833 155.96532 568.1191731770834 179.75664 622.5963541666667 179.75664C 677.07353515625 179.75664 723.7682617187501 2.643480000000011 778.2454427083334 2.643480000000011C 832.7226236979167 2.643480000000011 879.4173502604167 26.434799999999996 933.89453125 26.434799999999996C 933.89453125 26.434799999999996 933.89453125 26.434799999999996 933.89453125 264.348 L 0 264.348z" pathFrom="M -1 290.7828 L -1 290.7828 L 155.64908854166669 290.7828 L 311.29817708333337 290.7828 L 466.947265625 290.7828 L 622.5963541666667 290.7828 L 778.2454427083334 290.7828 L 933.89453125 290.7828">
    </path>
    <path id="SvgjsPath1313" d="M 0 208.83492C 54.47718098958334 208.83492 101.17190755208335 185.0436 155.64908854166669 185.0436C 210.12626953125002 185.0436 256.82099609375 216.76536 311.29817708333337 216.76536C 365.7753580729167 216.76536 412.4700846354167 155.96532 466.947265625 155.96532C 521.4244466145833 155.96532 568.1191731770834 179.75664 622.5963541666667 179.75664C 677.07353515625 179.75664 723.7682617187501 2.643480000000011 778.2454427083334 2.643480000000011C 832.7226236979167 2.643480000000011 879.4173502604167 26.434799999999996 933.89453125 26.434799999999996M 933.89453125 26.434799999999996" fill="none" fill-opacity="1" stroke="#8e85e6" stroke-opacity="1" stroke-linecap="butt" stroke-width="4" stroke-dasharray="0" className="apexcharts-area" index="0" clip-path="url(#gridRectMask9lxde2yj)" pathTo="M 0 208.83492C 54.47718098958334 208.83492 101.17190755208335 185.0436 155.64908854166669 185.0436C 210.12626953125002 185.0436 256.82099609375 216.76536 311.29817708333337 216.76536C 365.7753580729167 216.76536 412.4700846354167 155.96532 466.947265625 155.96532C 521.4244466145833 155.96532 568.1191731770834 179.75664 622.5963541666667 179.75664C 677.07353515625 179.75664 723.7682617187501 2.643480000000011 778.2454427083334 2.643480000000011C 832.7226236979167 2.643480000000011 879.4173502604167 26.434799999999996 933.89453125 26.434799999999996M 933.89453125 26.434799999999996" pathFrom="M -1 290.7828 L -1 290.7828 L 155.64908854166669 290.7828 L 311.29817708333337 290.7828 L 466.947265625 290.7828 L 622.5963541666667 290.7828 L 778.2454427083334 290.7828 L 933.89453125 290.7828" fill-rule="evenodd">
    </path>
    <g id="SvgjsG1306" className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown" dataRealIndex="0">
    <g className="apexcharts-series-markers">
    <circle id="SvgjsCircle1411" r="0" cx="0" cy="0" className="apexcharts-marker wm3z2lwx2 no-pointer-events" stroke="#ffffff" fill="#8e85e6" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0">
    </circle>
    </g>
    </g>
    </g>
    <g id="SvgjsG1314" className="apexcharts-series" zIndex="1" seriesName="Check-out" dataLongestSeries="true" rel="2" dataRealIndex="1">
    <path id="SvgjsPath1321" d="M 0 261.70452C 54.47718098958334 261.70452 101.17190755208335 206.19144 155.64908854166669 206.19144C 210.12626953125002 206.19144 256.82099609375 171.8262 311.29817708333337 171.8262C 365.7753580729167 171.8262 412.4700846354167 206.19144 466.947265625 206.19144C 521.4244466145833 206.19144 568.1191731770834 200.90448 622.5963541666667 200.90448C 677.07353515625 200.90448 723.7682617187501 153.32184 778.2454427083334 153.32184C 832.7226236979167 153.32184 879.4173502604167 182.40012000000002 933.89453125 182.40012000000002C 933.89453125 182.40012000000002 933.89453125 182.40012000000002 933.89453125 264.348 L 0 264.348z" fill="url(#SvgjsLinearGradient1317)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" className="apexcharts-area" index="1" clip-path="url(#gridRectMask9lxde2yj)" pathTo="M 0 261.70452C 54.47718098958334 261.70452 101.17190755208335 206.19144 155.64908854166669 206.19144C 210.12626953125002 206.19144 256.82099609375 171.8262 311.29817708333337 171.8262C 365.7753580729167 171.8262 412.4700846354167 206.19144 466.947265625 206.19144C 521.4244466145833 206.19144 568.1191731770834 200.90448 622.5963541666667 200.90448C 677.07353515625 200.90448 723.7682617187501 153.32184 778.2454427083334 153.32184C 832.7226236979167 153.32184 879.4173502604167 182.40012000000002 933.89453125 182.40012000000002C 933.89453125 182.40012000000002 933.89453125 182.40012000000002 933.89453125 264.348 L 0 264.348z" pathFrom="M -1 290.7828 L -1 290.7828 L 155.64908854166669 290.7828 L 311.29817708333337 290.7828 L 466.947265625 290.7828 L 622.5963541666667 290.7828 L 778.2454427083334 290.7828 L 933.89453125 290.7828">
    </path>
    <path id="SvgjsPath1322" d="M 0 261.70452C 54.47718098958334 261.70452 101.17190755208335 206.19144 155.64908854166669 206.19144C 210.12626953125002 206.19144 256.82099609375 171.8262 311.29817708333337 171.8262C 365.7753580729167 171.8262 412.4700846354167 206.19144 466.947265625 206.19144C 521.4244466145833 206.19144 568.1191731770834 200.90448 622.5963541666667 200.90448C 677.07353515625 200.90448 723.7682617187501 153.32184 778.2454427083334 153.32184C 832.7226236979167 153.32184 879.4173502604167 182.40012000000002 933.89453125 182.40012000000002M 933.89453125 182.40012000000002" fill="none" fill-opacity="1" stroke="#17a2b8" stroke-opacity="1" stroke-linecap="butt" stroke-width="4" stroke-dasharray="0" className="apexcharts-area" index="1" clip-path="url(#gridRectMask9lxde2yj)" pathTo="M 0 261.70452C 54.47718098958334 261.70452 101.17190755208335 206.19144 155.64908854166669 206.19144C 210.12626953125002 206.19144 256.82099609375 171.8262 311.29817708333337 171.8262C 365.7753580729167 171.8262 412.4700846354167 206.19144 466.947265625 206.19144C 521.4244466145833 206.19144 568.1191731770834 200.90448 622.5963541666667 200.90448C 677.07353515625 200.90448 723.7682617187501 153.32184 778.2454427083334 153.32184C 832.7226236979167 153.32184 879.4173502604167 182.40012000000002 933.89453125 182.40012000000002M 933.89453125 182.40012000000002" pathFrom="M -1 290.7828 L -1 290.7828 L 155.64908854166669 290.7828 L 311.29817708333337 290.7828 L 466.947265625 290.7828 L 622.5963541666667 290.7828 L 778.2454427083334 290.7828 L 933.89453125 290.7828" fill-rule="evenodd">
        </path>
        <g id="SvgjsG1315" className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown" dataRealIndex="1">
            <g className="apexcharts-series-markers">
                <circle id="SvgjsCircle1412" r="0" cx="0" cy="0" className="apexcharts-marker widbttb6w no-pointer-events" stroke="#ffffff" fill="#17a2b8" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0">
                    </circle>
                    </g>
                    </g>
                    </g>
                    <g id="SvgjsG1307" className="apexcharts-datalabels" dataRealIndex="0"></g>
                        <g id="SvgjsG1316" className="apexcharts-datalabels" dataRealIndex="1"></g>
                        </g>
                        <line id="SvgjsLine1347" x1="0" y1="0" x2="933.89453125" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs">
          </line>
          <line id="SvgjsLine1348" x1="0" y1="0" x2="933.89453125" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden">
          </line>
          <g id="SvgjsG1349" className="apexcharts-xaxis" transform="translate(0, 0)">
          <g id="SvgjsG1350" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1352" font-family="Helvetica, Arial, sans-serif" x="0" y="293.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1353">SUN</tspan>
          <title>SUN</title>
          </text>
          <text id="SvgjsText1355" font-family="Helvetica, Arial, sans-serif" x="155.64908854166669" y="293.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;">
          <tspan id="SvgjsTspan1356">MON</tspan>
          <title>MON</title>
          </text>
          <text id="SvgjsText1358" font-family="Helvetica, Arial, sans-serif" x="311.2981770833333" y="293.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1359">TUE</tspan>
          <title>TUE</title>
          </text>
          <text id="SvgjsText1361" font-family="Helvetica, Arial, sans-serif" x="466.94726562499994" y="293.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1362">WED</tspan>
          <title>WED</title>
          </text>
          <text id="SvgjsText1364" font-family="Helvetica, Arial, sans-serif" x="622.5963541666665" y="293.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1365">THU</tspan>
          <title>THU</title>
          </text>
          <text id="SvgjsText1367" font-family="Helvetica, Arial, sans-serif" x="778.2454427083331" y="293.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1368">FRI</tspan>
          <title>FRI</title>
          </text>
          <text id="SvgjsText1370" font-family="Helvetica, Arial, sans-serif" x="933.8945312499998" y="293.348" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" className="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1371">SAT</tspan>
          <title>SAT</title>
          </text>
          </g></g>
          <g id="SvgjsG1408" className="apexcharts-yaxis-annotations"></g>
          <g id="SvgjsG1409" className="apexcharts-xaxis-annotations"></g>
          <g id="SvgjsG1410" className="apexcharts-point-annotations"></g>
          <rect id="SvgjsRect1413" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" className="apexcharts-zoom-rect">
          </rect>
          <rect id="SvgjsRect1414" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" className="apexcharts-selection-rect">
          </rect>
          </g>
          </svg>
          <div className="apexcharts-tooltip apexcharts-theme-light">
            <div className="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                </div>
                <div className="apexcharts-tooltip-series-group" style="order: 1;">
                    <span className="apexcharts-tooltip-marker" style="background-color: rgb(142, 133, 230);"></span>
                    <div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                        <div className="apexcharts-tooltip-y-group">
                            <span className="apexcharts-tooltip-text-y-label"></span>
                            <span className="apexcharts-tooltip-text-y-value"></span>
                            </div>
                            <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label"></span>
                                <span className="apexcharts-tooltip-text-goals-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                    <span className="apexcharts-tooltip-text-z-label"></span>
                                    <span className="apexcharts-tooltip-text-z-value"></span>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="apexcharts-tooltip-series-group" style="order: 2;">
                                        <span className="apexcharts-tooltip-marker" style="background-color: rgb(23, 162, 184);"></span>
                                        <div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                            <div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label">
                                                </span>
                                                <span className="apexcharts-tooltip-text-y-value"></span>
                                                </div>
                                                <div className="apexcharts-tooltip-goals-group">
                                                    <span className="apexcharts-tooltip-text-goals-label">
                                                        </span>
                                                        <span className="apexcharts-tooltip-text-goals-value"></span>
                                                        </div>
                                                        <div className="apexcharts-tooltip-z-group">
                                                            <span className="apexcharts-tooltip-text-z-label"></span>
                                                            <span className="apexcharts-tooltip-text-z-value"></span>
                                                            </div>
                                                            </div>
                                                            </div>
                                                            </div>
                                                            <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                                                                <div className="apexcharts-xaxistooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                                                    </div>
                                                                    </div>
                                                                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                                                        <div className="apexcharts-yaxistooltip-text">
                                                                            </div>
                                                                            </div>
                                                                            <div className="apexcharts-toolbar" style="top: 0px; right: 3px;">
                                                                                <div className="apexcharts-zoomin-icon" title="Zoom In">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
    </svg>
    </div><div className="apexcharts-zoomout-icon" title="Zoom Out"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
    </svg>
    </div><div className="apexcharts-zoom-icon apexcharts-selected" title="Selection Zoom"><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        <path d="M0 0h24v24H0V0z" fill="none"></path>
        <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path>
    </svg>
    </div>
    <div className="apexcharts-pan-icon" title="Panning">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
        <defs>
            <path d="M0 0h24v24H0z" id="a"></path>
        </defs>
        <clipPath id="b">
            <use overflow="visible" xlinkHref="#a"></use>
        </clipPath>
        <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path>
    </svg></div><div className="apexcharts-reset-icon" title="Reset Zoom"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
        <path d="M0 0h24v24H0z" fill="none"></path>
    </svg></div><div className="apexcharts-menu-icon" title="Menu"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></div><div className="apexcharts-menu"><div className="apexcharts-menu-item exportSVG" title="Download SVG">Download SVG</div><div className="apexcharts-menu-item exportPNG" title="Download PNG">Download PNG</div><div className="apexcharts-menu-item exportCSV" title="Download CSV">Download CSV</div></div></div></div></div>
                            </div>
                        </div>
                      
                    </div>
                   
                    <div className="col-lg-6 col-xxl-4">
                        <div className="card shadow h-100">
                         
                            <div className="card-header border-bottom">
                                <h5 className="card-header-title">Room Availability</h5>
                            </div>
    
                            <div className="card-body p-3">
                                <div className="col-sm-6 mx-auto">
                                    <div className="d-flex justify-content-center" id="ChartTrafficRooms" style="min-height: 296.9px;">
                                        <div id="apexcharts2t10rb34" className="apexcharts-canvas apexcharts2t10rb34 apexcharts-theme-light" style={{width: "300px", height: "296.9px"}}>
                                        <svg id="SvgjsSvg1415" width="300" height="296.9" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.dev" className="apexcharts-svg" xmlnsData="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;">
                                        <foreignObject x="0" y="0" width="300" height="296.9">
                                            <div className="apexcharts-legend" xmlns="http://www.w3.org/1999/xhtml">
                                            </div>
                                            </foreignObject><g id="SvgjsG1417" className="apexcharts-inner apexcharts-graphical" transform="translate(0, 1)">
                                                <defs id="SvgjsDefs1416">
                                                    <clipPath id="gridRectMask2t10rb34">
                                                        <rect id="SvgjsRect1418" width="306" height="304" x="-3" y="-3" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff">
                                    </rect>
                                    </clipPath>
                                    <clipPath id="forecastMask2t10rb34"></clipPath>
                                    <clipPath id="nonForecastMask2t10rb34"></clipPath>
                                    <clipPath id="gridRectMarkerMask2t10rb34">
                                    <rect id="SvgjsRect1419" width="304" height="302" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect>
                                    </clipPath></defs><g id="SvgjsG1420" className="apexcharts-pie">
                                    <g id="SvgjsG1421" transform="translate(0, 0) scale(1)"><circle id="SvgjsCircle1422" r="93.1878048780488" cx="150" cy="149" fill="transparent">
                                    </circle>
                                    <g id="SvgjsG1423" className="apexcharts-slices">
                                    <g id="SvgjsG1424" className="apexcharts-series apexcharts-pie-series" seriesName="SoldxOut" rel="1" dataRealIndex="0">
                                    <path id="SvgjsPath1425" d="M 150 5.634146341463406 A 143.3658536585366 143.3658536585366 0 1 1 13.650970663831401 193.30248519355956 L 61.373130931490394 177.7966153758137 A 93.1878048780488 93.1878048780488 0 1 0 150 55.812195121951206 L 150 5.634146341463406 z " fill="rgba(214,41,62,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" className="apexcharts-pie-area apexcharts-donut-slice-0" index="0" j="0" dataAngle="252" dataStartAngle="0" dataStrokeWidth="2" dataValue="70" dataPathOrig="M 150 5.634146341463406 A 143.3658536585366 143.3658536585366 0 1 1 13.650970663831401 193.30248519355956 L 61.373130931490394 177.7966153758137 A 93.1878048780488 93.1878048780488 0 1 0 150 55.812195121951206 L 150 5.634146341463406 z " stroke="#ffffff">
                                    </path>
                                    </g>
                                    <g id="SvgjsG1426" className="apexcharts-series apexcharts-pie-series" seriesName="Available" rel="2" dataRealIndex="1">
                                    <path id="SvgjsPath1427" d="M 13.650970663831401 193.30248519355956 A 143.3658536585366 143.3658536585366 0 0 1 149.97497793831428 5.634148525050222 L 149.98373565990428 55.81219654128263 A 93.1878048780488 93.1878048780488 0 0 0 61.373130931490394 177.7966153758137 L 13.650970663831401 193.30248519355956 z " fill="rgba(12,188,135,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="2" stroke-dasharray="0" className="apexcharts-pie-area apexcharts-donut-slice-1" index="0" j="1" dataAngle="108" dataStartAngle="252" dataStrokeWidth="2" dataValue="30" dataPathOrig="M 13.650970663831401 193.30248519355956 A 143.3658536585366 143.3658536585366 0 0 1 149.97497793831428 5.634148525050222 L 149.98373565990428 55.81219654128263 A 93.1878048780488 93.1878048780488 0 0 0 61.373130931490394 177.7966153758137 L 13.650970663831401 193.30248519355956 z " stroke="#ffffff">
                                    </path>
                                    </g>
                                    </g>
                                    </g>
                                    </g>
                                    <line id="SvgjsLine1428" x1="0" y1="0" x2="300" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" className="apexcharts-ycrosshairs"></line>
                                    <line id="SvgjsLine1429" x1="0" y1="0" x2="300" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" className="apexcharts-ycrosshairs-hidden"></line>
                                    </g>
                                    </svg>
                                    <div className="apexcharts-tooltip apexcharts-theme-dark">
                                        <div className="apexcharts-tooltip-series-group" style="order: 1;">
                                            <span className="apexcharts-tooltip-marker" style="background-color: rgb(214, 41, 62);"></span>
                                            <div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                                <div className="apexcharts-tooltip-y-group">
                    <span className="apexcharts-tooltip-text-y-label"></span>
                    <span className="apexcharts-tooltip-text-y-value"></span>
                    </div>
                    <div className="apexcharts-tooltip-goals-group">
                        <span className="apexcharts-tooltip-text-goals-label"></span>
                        <span className="apexcharts-tooltip-text-goals-value"></span>
                        </div>
                        <div className="apexcharts-tooltip-z-group">
                    <span className="apexcharts-tooltip-text-z-label"></span>
                    <span className="apexcharts-tooltip-text-z-value"></span>
                        </div>
                            </div>
                                </div>
                    <div className="apexcharts-tooltip-series-group" style="order: 2;">
                        <span className="apexcharts-tooltip-marker" style="background-color: rgb(12, 188, 135);"></span>
                        <div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                            <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label"></span>
                                <span className="apexcharts-tooltip-text-y-value"></span>
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                    <span className="apexcharts-tooltip-text-goals-label">
                                        </span>
                                        <span className="apexcharts-tooltip-text-goals-value"></span>
                                        </div>
                                        <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-z-label">
                                    </span>
                                    <span className="apexcharts-tooltip-text-z-value"></span>
                                    </div>
                                        </div>
                                            </div>
                                                </div>
                                                    </div>
                                                        </div>
                                </div>
    
                            
                                <ul className="list-group list-group-borderless mb-0">
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span className="h6 fw-light mb-0"><i className="text-success fas fa-circle me-2"></i> Available</span>
                                        <span className="h6 fw-light mb-0">73 Rooms</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between">
                                        <span className="h6 fw-light mb-0"><i className="text-danger fas fa-circle me-2"></i> Sold Out</span>
                                        <span className="h6 fw-light mb-0">245 Rooms</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
               
                    <div className="col-lg-6 col-xxl-4">
                        <div className="card shadow h-100">
                            
                            <div className="card-header border-bottom d-flex justify-content-between align-items-center">
                                <h5 className="card-header-title">Room Notifications</h5>
                                <a href="#" className="btn btn-link p-0 mb-0">View all</a>
                            </div>
    
                            <div className="card-body">
                                
                                <div className="d-flex justify-content-between align-items-center">
                                   
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                        
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/category/hotel/4by3/04.jpg" className="rounded h-60px" alt=""/>
                                        </div>
                                    
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Deluxe Pool View with Breakfast</h6>
                                            <ul className="nav nav-divider small">
                                                <li className="nav-item">18 Nov to 22 Nov</li>
                                                <li className="nav-item"><span className="text-success">Booked</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                  
                                    <a href="#" className="btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">View</a>
                                </div>
                              
                                <hr/>
    
                                <div className="d-flex justify-content-between align-items-center">
                                    
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                     
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/category/hotel/4by3/05.jpg" className="rounded h-60px" alt=""/>
                                        </div>
                                        
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Deluxe Pool View</h6>
                                            <ul className="nav nav-divider small">
                                                <li className="nav-item">16 Nov</li>
                                                <li className="nav-item"><span className="text-danger">Booking cancel</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <a href="#" className="btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">View</a>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between align-items-center">
                                   
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                       
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/category/hotel/4by3/06.jpg" className="rounded h-60px" alt=""/>
                                        </div>
                                     
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Luxury Room with Balcony</h6>
                                            <ul className="nav nav-divider small">
                                                <li className="nav-item">15 Nov to 20 Nov</li>
                                                <li className="nav-item"><span className="text-success">Booked</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <a href="#" className="btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">View</a>
                                </div>
                              
                                <hr/>
    
                                <div className="d-flex justify-content-between align-items-center">
                                    
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                      
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/category/hotel/4by3/08.jpg" className="rounded h-60px" alt=""/>
                                        </div>
                                       
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Premium Room With Balcony</h6>
                                            <ul className="nav nav-divider small">
                                                <li className="nav-item">14 Nov to 16 Nov</li>
                                                <li className="nav-item"><span className="text-success">Booked</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                  
                                    <a href="#" className="btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">View</a>
                                </div>
                              
                                <hr/>
    
                                <div className="d-flex justify-content-between align-items-center">
                                    
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                      
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/category/hotel/4by3/02.jpg" className="rounded h-60px" alt=""/>
                                        </div>
                                       
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Rock Family Suite</h6>
                                            <ul className="nav nav-divider small">
                                                <li className="nav-item">13 Nov</li>
                                                <li className="nav-item"><span className="text-danger">Booking cancel</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                   
                                    <a href="#" className="btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">View</a>
                                </div>
                                
                            </div>
                           
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-xxl-4">
                        <div className="card shadow h-100">
                            
                            <div className="card-header border-bottom d-flex justify-content-between align-items-center p-3">
                                <h5 className="card-header-title">Upcoming Arrivals</h5>
                                <a href="#" className="btn btn-link p-0 mb-0">View all</a>
                            </div>
    
                            <div className="card-body p-3">
    
                                <div className="d-flex justify-content-between align-items-center">
                                
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                       
                                        <div className="avatar avatar-md flex-shrink-0">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar"/>
                                        </div>
                                       
                                        <div className="ms-sm-2 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Lori Stevens</h6>
                                            <ul className="nav nav-divider small">
                                                <li className="nav-item">Room 25A</li>
                                                <li className="nav-item">24Nov - 28Nov</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <a href="#" className="btn btn-sm btn-light mb-0 ms-3 px-2"><i className="fa-solid fa-chevron-right fa-fw"></i></a>
                                </div>
    
                                <hr/>
    
                                <div className="d-flex justify-content-between align-items-center">
                                   
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                     
                                        <div className="avatar avatar-md flex-shrink-0">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar"/>
                                        </div>
                                        
                                        <div className="ms-sm-2 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Dennis Barrett</h6>
                                            <ul className="nav nav-divider small">
                                                <li className="nav-item">Room 12B</li>
                                                <li className="nav-item">21Nov - 23Nov</li>
                                            </ul>
                                        </div>
                                    </div>
                                   
                                    <a href="#" className="btn btn-sm btn-light mb-0 ms-3 px-2"><i className="fa-solid fa-chevron-right fa-fw"></i></a>
                                </div>
    
                                <hr/>
    
                                <div className="d-flex justify-content-between align-items-center">
                                   
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                     
                                        <div className="avatar avatar-md flex-shrink-0">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar"/>
                                        </div>
                                      
                                        <div className="ms-sm-2 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Jacqueline Miller</h6>
                                            <ul className="nav nav-divider small">
                                                <li className="nav-item">Room 11A</li>
                                                <li className="nav-item">19Nov - 21Nov</li>
                                            </ul>
                                        </div>
                                    </div>
                                  
                                    <a href="#" className="btn btn-sm btn-light mb-0 ms-3 px-2"><i className="fa-solid fa-chevron-right fa-fw"></i></a>
                                </div>
    
                                <hr/>
    
                                <div className="d-flex justify-content-between align-items-center">
                                    
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                      
                                        <div className="avatar avatar-md flex-shrink-0">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar"/>
                                        </div>
                                   
                                        <div className="ms-sm-2 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Billy Vasquez</h6>
                                            <ul className="nav nav-divider small">
                                                <li className="nav-item">Room 05A</li>
                                                <li className="nav-item">14Nov - 18Nov</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <a href="#" className="btn btn-sm btn-light mb-0 ms-3 px-2"><i className="fa-solid fa-chevron-right fa-fw"></i></a>
                                </div>
    
                                <hr/>
    
                                <div className="d-flex justify-content-between align-items-center">
                                 
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                        
                                        <div className="avatar avatar-md flex-shrink-0">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar"/>
                                        </div>
                                   
                                        <div className="ms-sm-2 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Amanda Reed</h6>
                                            <ul className="nav nav-divider small">
                                                <li className="nav-item">Room 9</li>
                                                <li className="nav-item">11Nov - 12Nov</li>
                                            </ul>
                                        </div>
                                    </div>
                                 
                                    <a href="#" className="btn btn-sm btn-light mb-0 ms-3 px-2"><i className="fa-solid fa-chevron-right fa-fw"></i></a>
                                </div>
    
                                <hr/>
                            
                                <div className="d-flex justify-content-between align-items-center">
                              
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                             
                                        <div className="avatar avatar-md flex-shrink-0">
                                            <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg" alt="avatar"/>
                                        </div>
                                        
                                        <div className="ms-sm-2 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Dennis Barrett</h6>
                                            <ul className="nav nav-divider small">
                                                <li className="nav-item">Room 10</li>
                                                <li className="nav-item">11Nov - 12Nov</li>
                                            </ul>
                                        </div>
                                    </div>
                                   
                                    <a href="#" className="btn btn-sm btn-light mb-0 ms-3 px-2"><i className="fa-solid fa-chevron-right fa-fw"></i></a>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                 
                    <div className="col-lg-6 col-xxl-4">
                        <div className="card shadow h-100">
                          
                            <div className="card-header border-bottom d-flex justify-content-between align-items-center p-3">
                                <h5 className="card-header-title">Reviews</h5>
                                <a href="#" className="btn btn-link p-0 mb-0">View all</a>
                            </div>
    
                            <div className="card-body p-3">
    
                                <div className="d-flex justify-content-between align-items-center">
                                    
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                        
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/category/hotel/4by3/08.jpg" className="rounded h-60px" alt=""/>
                                        </div>
                                   
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Deluxe Pool View with Breakfast</h6>
                                            <ul className="list-inline smaller mb-0">
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="far fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0">(35 reviews)</li>
                                            </ul>
                                        </div>
                                    </div>
                                  
                                    <a href="#" className="btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">View</a>
                                </div>
                
                                <hr/>
    
                                <div className="d-flex justify-content-between align-items-center">
                                    
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                      
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/category/hotel/4by3/09.jpg" className="rounded h-60px" alt=""/>
                                        </div>
                                    
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Deluxe Pool View</h6>
                                            <ul className="list-inline smaller mb-0">
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="far fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0">(25 reviews)</li>
                                            </ul>
                                        </div>
                                    </div>
                              
                                    <a href="#" className="btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">View</a>
                                </div>
                               
                                <hr/>
    
                                <div className="d-flex justify-content-between align-items-center">
                                   
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                 
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/category/hotel/4by3/01.jpg" className="rounded h-60px" alt=""/>
                                        </div>
                                       
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Luxury Room with Balcony</h6>
                                            <ul className="list-inline smaller mb-0">
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="far fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0">(18 reviews)</li>
                                            </ul>
                                        </div>
                                    </div>
                                
                                    <a href="#" className="btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">View</a>
                                </div>
      
                                <hr/>
    
                                <div className="d-flex justify-content-between align-items-center">
                                 
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                      
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/category/hotel/4by3/05.jpg" className="rounded h-60px" alt=""/>
                                        </div>
                                     
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Premium Room With Balcony</h6>
                                            <ul className="list-inline smaller mb-0">
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="far fa-star-half-stroke text-warning"></i></li>
                                                <li className="list-inline-item me-0">(08 reviews)</li>
                                            </ul>
                                        </div>
                                    </div>
                            
                                    <a href="#" className="btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">View</a>
                                </div>
     
                                <hr/>

                                <div className="d-flex justify-content-between align-items-center">
                         
                                    <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                                 
                                        <div className="flex-shrink-0">
                                            <img src="assets/images/category/hotel/4by3/02.jpg" className="rounded h-60px" alt=""/>
                                        </div>
                                     
                                        <div className="ms-sm-3 mt-2 mt-sm-0">
                                            <h6 className="mb-1">Rock Family Suite</h6>
                                            <ul className="list-inline smaller mb-0">
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="fas fa-star text-warning"></i></li>
                                                <li className="list-inline-item me-0"><i className="far fa-star-half-stroke text-warning"></i></li>
                                                <li className="list-inline-item me-0">(11 reviews)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="#" className="btn btn-sm btn-light flex-shrink-0 mb-0 ms-3">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	 */}
                {/* <!-- Widget END --> */}
    </main>
    );
};