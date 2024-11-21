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
                        Somos Maria, Juan y Barbara, estudiantes de 4Geeks que decidimos crear esta página como una iniciativa para ayudar a todas las personas que lo necesitan, conectando a quienes desean apoyar causas importantes con quienes realmente lo requieren.
                      </p>
                      <p className="mb-4">
                        Unidos por la empatía y el deseo de marcar la diferencia, creemos que cada contribución puede generar un impacto positivo en las vidas de las personas. Este proyecto es nuestra manera de combinar tecnología con compasión, para construir un futuro más solidario.
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
