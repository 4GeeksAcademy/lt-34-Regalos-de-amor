import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/foundationsList.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavbarDashboard } from "../component/navbarDashboard";
import { BeneficiaryList } from "./foundationList/beneficiaryList";
import { Graphics } from "./foundationList/graphics";
import { TopBar } from "./foundationList/topBar";
import { Cake } from "./foundationList/cake";




export const FoundationList = () => {
  const { store, actions } = useContext(Context);
  const [foundations, setFoundations] = useState([]);
  const [loading, setLoading] = useState(true);
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
  }, [actions]);

  const handleFoundationClick = (id) => {
    navigate(`/foundation-beneficiaries/${id}`);
  };


  return (

    <main className="d-flex dashboard container-fluid">
      <NavbarDashboard />
      <div className="page-content-wrapper p-xxl-4">
        <div className="page-content-wrapper p-xxl-4">
          <TopBar />

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

          <h2 className="display-5 text-center text-black fw-bold mb-4">Our Foundations</h2>
          <p className="lead text-muted text-center mb-5">
            Discover and support foundations making a difference in communities around the world.
          </p>



          <BeneficiaryList />
          {/* <!-- Widget START --> */}
          <Graphics />



        </div>

        {/* <!-- Widget END --> */}
        <div className="col-lg-6 col-xxl-4 mt-2" style={{width: "100%"}}>
          <div className="card shadow h-100">
        <Cake />
        </div>
        </div>


        
      </div>
    </main>
  );
};
