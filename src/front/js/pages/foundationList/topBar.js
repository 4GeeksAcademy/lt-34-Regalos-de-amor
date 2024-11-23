import React, {useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import fourt from "../../../img/fourt.jpg";

export const TopBar = () => {

    const {store, actions} = useContext(Context);
    const [theme, setTheme] = useState('light');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
      }
      useEffect(() => {
        document.body.className = `${theme}-theme`;
      }, [setTheme]);
    
      const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    
      };
    

    return (
    <>
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
                        <a className="h6 mt-2 mt-sm-0" href="#">{store.user && store.user.first_name}</a>
                        <p className="small m-0">{store.user && store.user.email}</p>
                      </div>
                    </div>
                  </li>
                  <li> <hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "15px", height: "auto" }}>
                  <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                  </svg>Settings</a>
                  </li>
                  <li><a className="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "15px", height: "auto" }}>
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                  </svg>Help Center</a>
                  </li>
                  <li><a className="dropdown-item bg-danger-soft-hover" href="#" onClick={handleLogout}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: "15px", height: "auto" }}>
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                  </svg>Sign Out</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      </>
    );
};