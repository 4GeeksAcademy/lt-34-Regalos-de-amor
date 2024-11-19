import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import fourt from "../../img/fourt.jpg"
import "../../styles/foundationsList.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavbarDashboard } from "../component/navbarDashboard";
import { BeneficiaryList } from "./foundationList/beneficiaryList";
import { Graphics } from "./foundationList/graphics";



export const FoundationList = () => {
  const { store, actions } = useContext(Context);
  const [foundations, setFoundations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();



  useEffect(() => {
    const fetchFoundations = async () => {
      setLoading(true);
      try {
        const data = await actions.fetchAllFoundations();
        setFoundations(data || []);
      } catch (error) {
        console.error("Error fetching foundations:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFoundations();
  }, []);

  const handleFoundationClick = (id) => {
    navigate(`/foundation-beneficiaries/${id}`);
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

  };


  return (

    <main className="d-flex dashboard container-fluid">
      <NavbarDashboard />
      <div className="page-content-wrapper p-xxl-4">
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
                      <button type="button"
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
                          <img className="avatar-img rounded-circle shadow" src={fourt} alt="avatar" style={{ width: "45px", height: "auto" }} />
                        </div>
                        <div>
                          <a className="h6 mt-2 mt-sm-0" href="#">April</a>
                          <p className="small m-0">lunes@ok.com</p>
                        </div>
                      </div>
                    </li>
                    <li> <hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "15px", height: "auto" }}><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                    </svg>Settings</a>
                    </li>
                    <li><a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "15px", height: "auto" }}><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>Help Center</a>
                    </li>
                    <li><a className="dropdown-item bg-danger-soft-hover" href="#" onClick={handleLogout}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "15px", height: "auto" }}><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                    </svg>Sign Out</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="page-content-wrapper p-xxl-4">

          {/* // <!-- Title --> */}
          <div className="row">
            <div className="col-12 mb-4 mb-sm-5">
              <div className="d-sm-flex justify-content-between align-items-center">
                <h1 className="h3 mb-2 mb-sm-0">Dashboard</h1>
                <div className="d-grid"><a href="#" className="btn btn-primary-soft mb-0" onClick={handleFoundationClick}><i className="bi bi-plus-lg fa-fw"></i>See Beneficiaries</a></div>
              </div>
            </div>
          </div>

          {/* <!-- Counter boxes START --> */}
          <div className="row g-4 mb-5">

            <div className="col-md-6 col-xxl-3">
              <div className="card card-body bg-warning bg-opacity-10 border border-warning border-opacity-25 p-4 h-100">
                <div className="d-flex justify-content-between align-items-center">

                  <div>
                    <h4 className="mb-0">56</h4>
                    <span className="h6 fw-light mb-0">Total Foundations</span>
                  </div>

                  <div className="icon-lg rounded-circle bg-warning text-white mb-0"><i className="fa-solid fa-hotel fa-fw"></i></div>
                </div>
              </div>
            </div>

            {/* <!-- Counter item --> */}
            <div className="col-md-6 col-xxl-3">
              <div className="card card-body bg-success bg-opacity-10 border border-success border-opacity-25 p-4 h-100">
                <div className="d-flex justify-content-between align-items-center">

                  <div>
                    <h4 className="mb-0">$836,789</h4>
                    <span className="h6 fw-light mb-0">Total Incomes</span>
                  </div>

                  <div className="icon-lg rounded-circle bg-success text-white mb-0"><i className="fa-solid fa-hand-holding-dollar fa-fw"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-3">
              <div className="card card-body bg-primary bg-opacity-10 border border-primary border-opacity-25 p-4 h-100">
                <div className="d-flex justify-content-between align-items-center">

                  <div>
                    <h4 className="mb-0">245</h4>
                    <span className="h6 fw-light mb-0">Total Donors</span>
                  </div>

                  <div className="icon-lg rounded-circle bg-primary text-white mb-0"><i className="fa-solid fa-dove"></i></div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xxl-3">
              <div className="card card-body bg-info bg-opacity-10 border border-info border-opacity-25 p-4 h-100">
                <div className="d-flex justify-content-between align-items-center">

                  <div>
                    <h4 className="mb-0">147</h4>
                    <span className="h6 fw-light mb-0">Assistant</span>
                  </div>

                  <div className="icon-lg rounded-circle bg-info text-white mb-0"><i className="fa-solid fa-person"></i></div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="display-5 text-center text-primary fw-bold mb-4">Our Foundations</h2>
          <p className="lead text-muted text-center mb-5">
            Discover and support foundations making a difference in communities around the world.
          </p>



          <BeneficiaryList />
          {/* <!-- Widget START --> */}
          <Graphics />



        </div>

        <div className="col-lg-6 col-xxl-4">
          <div className="card shadow h-100">

            <div className="card-header border-bottom">
              <h5 className="card-header-title">Room Availability</h5>
            </div>

            <div className="card-body p-3">
              <div className="col-sm-6 mx-auto">
                <div className="d-flex justify-content-center" id="ChartTrafficRooms" style={{ minHeight: "296.9px" }}>
                  <div id="apexcharts2t10rb34" className="apexcharts-canvas apexcharts2t10rb34 apexcharts-theme-light" style={{ width: "300px", height: "296.9px" }}>
                    <svg id="SvgjsSvg1415" width="300" height="296.9" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.dev" className="apexcharts-svg" xmlnsdata="ApexChartsNS" transform="translate(0, 0)" style={{ background: "transparent" }}>
                      <foreignObject x="0" y="0" width="300" height="296.9">
                        <div className="apexcharts-legend" xmlns="http://www.w3.org/1999/xhtml">
                        </div>
                      </foreignObject><g id="SvgjsG1417" className="apexcharts-inner apexcharts-graphical" transform="translate(0, 1)">
                        <defs id="SvgjsDefs1416">
                          <clipPath id="gridRectMask2t10rb34">
                            <rect id="SvgjsRect1418" width="306" height="304" x="-3" y="-3" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0" fill="#fff">
                            </rect>
                          </clipPath>
                          <clipPath id="forecastMask2t10rb34"></clipPath>
                          <clipPath id="nonForecastMask2t10rb34"></clipPath>
                          <clipPath id="gridRectMarkerMask2t10rb34">
                            <rect id="SvgjsRect1419" width="304" height="302" x="-2" y="-2" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0" fill="#fff"></rect>
                          </clipPath></defs><g id="SvgjsG1420" className="apexcharts-pie">
                          <g id="SvgjsG1421" transform="translate(0, 0) scale(1)"><circle id="SvgjsCircle1422" r="93.1878048780488" cx="150" cy="149" fill="transparent">
                          </circle>
                            <g id="SvgjsG1423" className="apexcharts-slices">
                              <g id="SvgjsG1424" className="apexcharts-series apexcharts-pie-series" seriesname="SoldxOut" rel="1" datarealindex="0">
                                <path id="SvgjsPath1425" d="M 150 5.634146341463406 A 143.3658536585366 143.3658536585366 0 1 1 13.650970663831401 193.30248519355956 L 61.373130931490394 177.7966153758137 A 93.1878048780488 93.1878048780488 0 1 0 150 55.812195121951206 L 150 5.634146341463406 z " fill="rgba(214,41,62,1)" fillOpacity="1" strokeOpacity="1" strokeLinecap="butt" strokeWidth="2" strokeDasharray="0" className="apexcharts-pie-area apexcharts-donut-slice-0" index="0" j="0" dataangle="252" datastartangle="0" datastrokewidth="2" datavalue="70" datapathorig="M 150 5.634146341463406 A 143.3658536585366 143.3658536585366 0 1 1 13.650970663831401 193.30248519355956 L 61.373130931490394 177.7966153758137 A 93.1878048780488 93.1878048780488 0 1 0 150 55.812195121951206 L 150 5.634146341463406 z " stroke="#ffffff">
                                </path>
                              </g>
                              <g id="SvgjsG1426" className="apexcharts-series apexcharts-pie-series" seriesname="Available" rel="2" datarealindex="1">
                                <path id="SvgjsPath1427" d="M 13.650970663831401 193.30248519355956 A 143.3658536585366 143.3658536585366 0 0 1 149.97497793831428 5.634148525050222 L 149.98373565990428 55.81219654128263 A 93.1878048780488 93.1878048780488 0 0 0 61.373130931490394 177.7966153758137 L 13.650970663831401 193.30248519355956 z " fill="rgba(12,188,135,1)" fillOpacity="1" strokeOpacity="1" strokeLinecap="butt" strokeWidth="2" strokeDasharray="0" className="apexcharts-pie-area apexcharts-donut-slice-1" index="0" j="1" dataangle="108" datastartangle="252" datastrokewidth="2" datavalue="30" datapathorig="M 13.650970663831401 193.30248519355956 A 143.3658536585366 143.3658536585366 0 0 1 149.97497793831428 5.634148525050222 L 149.98373565990428 55.81219654128263 A 93.1878048780488 93.1878048780488 0 0 0 61.373130931490394 177.7966153758137 L 13.650970663831401 193.30248519355956 z " stroke="#ffffff">
                                </path>
                              </g>
                            </g>
                          </g>
                        </g>
                        <line id="SvgjsLine1428" x1="0" y1="0" x2="300" y2="0" stroke="#b6b6b6" strokeDasharray="0" strokeWidth="1" strokeLinecap="butt" className="apexcharts-ycrosshairs"></line>
                        <line id="SvgjsLine1429" x1="0" y1="0" x2="300" y2="0" strokeDasharray="0" strokeWidth="0" strokeLinecap="butt" className="apexcharts-ycrosshairs-hidden"></line>
                      </g>
                    </svg>
                    <div className="apexcharts-tooltip apexcharts-theme-dark">
                      <div className="apexcharts-tooltip-series-group" style={{ order: "1" }}>
                        <span className="apexcharts-tooltip-marker" style={{ backgroundColor: "rgb(214, 41, 62)" }}></span>
                        <div className="apexcharts-tooltip-text" style={{ fontFamily: "Helvetica, Arial, sans-serif; fontSize: 12px" }}>
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
                      <div className="apexcharts-tooltip-series-group" style={{ order: "2" }}>
                        <span className="apexcharts-tooltip-marker" style={{ backgroundColor: "rgb(12, 188, 135)" }}></span>
                        <div className="apexcharts-tooltip-text" style={{ fontFamily: "Helvetica, Arial, sans-serif; fontSize: 12px" }}>
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
                    <img src="assets/images/category/hotel/4by3/04.jpg" className="rounded h-60px" alt="" />
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

              <hr />

              <div className="d-flex justify-content-between align-items-center">

                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                  <div className="flex-shrink-0">
                    <img src="assets/images/category/hotel/4by3/05.jpg" className="rounded h-60px" alt="" />
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
              <hr />
              <div className="d-flex justify-content-between align-items-center">

                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                  <div className="flex-shrink-0">
                    <img src="assets/images/category/hotel/4by3/06.jpg" className="rounded h-60px" alt="" />
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

              <hr />

              <div className="d-flex justify-content-between align-items-center">

                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                  <div className="flex-shrink-0">
                    <img src="assets/images/category/hotel/4by3/08.jpg" className="rounded h-60px" alt="" />
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

              <hr />

              <div className="d-flex justify-content-between align-items-center">

                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                  <div className="flex-shrink-0">
                    <img src="assets/images/category/hotel/4by3/02.jpg" className="rounded h-60px" alt="" />
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
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
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

              <hr />

              <div className="d-flex justify-content-between align-items-center">

                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                  <div className="avatar avatar-md flex-shrink-0">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
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

              <hr />

              <div className="d-flex justify-content-between align-items-center">

                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                  <div className="avatar avatar-md flex-shrink-0">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
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

              <hr />

              <div className="d-flex justify-content-between align-items-center">

                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                  <div className="avatar avatar-md flex-shrink-0">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
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

              <hr />

              <div className="d-flex justify-content-between align-items-center">

                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                  <div className="avatar avatar-md flex-shrink-0">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
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

              <hr />

              <div className="d-flex justify-content-between align-items-center">

                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                  <div className="avatar avatar-md flex-shrink-0">
                    <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg" alt="avatar" />
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
                    <img src="assets/images/category/hotel/4by3/08.jpg" className="rounded h-60px" alt="" />
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

              <hr />

              <div className="d-flex justify-content-between align-items-center">

                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                  <div className="flex-shrink-0">
                    <img src="assets/images/category/hotel/4by3/09.jpg" className="rounded h-60px" alt="" />
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

              <hr />

              <div className="d-flex justify-content-between align-items-center">

                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                  <div className="flex-shrink-0">
                    <img src="assets/images/category/hotel/4by3/01.jpg" className="rounded h-60px" alt="" />
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

              <hr />

              <div className="d-flex justify-content-between align-items-center">

                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                  <div className="flex-shrink-0">
                    <img src="assets/images/category/hotel/4by3/05.jpg" className="rounded h-60px" alt="" />
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

              <hr />

              <div className="d-flex justify-content-between align-items-center">

                <div className="d-sm-flex align-items-center mb-1 mb-sm-0">

                  <div className="flex-shrink-0">
                    <img src="assets/images/category/hotel/4by3/02.jpg" className="rounded h-60px" alt="" />
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
        {/* <!-- Widget END --> */}
      </div>
    </main>
  );
};
