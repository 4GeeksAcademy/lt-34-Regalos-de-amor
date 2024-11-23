import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const OurTeam = () => {
   const { store } = useContext(Context);

   return (
      <section className="pt-3 pt-lg-5 position-relative">
          <div className="container mb-4">
              <div className="row g-4 g-lg-5">
                  {/* Left Column */}
                  <div className="col-6 position-relative mb-4 mb-md-0">
                      <h1 className="mb-4 mt-md-5 display-1 fw-bold">
                          Our Team
                      </h1>
                      <p className="mb-4">
                      We are Maria, Juan and Barbara, 4Geeks students who decided to create this page as an initiative to help all the people who need it, connecting those who want to support important causes with those who really need it.
                      </p>
                      <p className="mb-4">
                      United by empathy and the desire to make a difference, we believe that every contribution can make a positive impact on people's lives. This project is our way of combining technology with compassion, to build a more caring future.
                      </p>
                  </div>

                  {/* Right Column */}
                  <div className="col-6 position-relative mb-4 mb-md-0">
                      <div className="row">
                          <div className="col-12 col-md-4 mb-3">
                              <div className="card text-center shadow-sm">
                                  <img
                                      src="https://static.vecteezy.com/system/resources/previews/007/409/979/non_2x/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg"
                                      className="card-img-top rounded-circle mx-auto mt-3"
                                      style={{ width: "50%" }}
                                      alt="Maria"
                                  />
                                  <div className="card-body">
                                      <h5 className="card-title">Maria</h5>
                                      <p className="card-text"> Developer</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-12 col-md-4 mb-3">
                              <div className="card text-center shadow-sm">
                                  <img
                                      src="https://static.vecteezy.com/system/resources/previews/007/409/979/non_2x/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg"
                                      className="card-img-top rounded-circle mx-auto mt-3"
                                      style={{ width: "50%" }}
                                      alt="Juan"
                                  />
                                  <div className="card-body">
                                      <h5 className="card-title">Juan</h5>
                                      <p className="card-text"> Developer</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-12 col-md-4 mb-3">
                              <div className="card text-center shadow-sm">
                                  <img
                                      src="https://static.vecteezy.com/system/resources/previews/007/409/979/non_2x/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg"
                                      className="card-img-top rounded-circle mx-auto mt-3"
                                      style={{ width: "50%" }}
                                      alt="Barbara"
                                  />
                                  <div className="card-body">
                                      <h5 className="card-title">Barbara</h5>
                                      <p className="card-text">Developer</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
   );
};
