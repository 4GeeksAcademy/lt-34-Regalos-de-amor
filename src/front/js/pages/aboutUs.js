import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const AboutUs = () => {
   const { store } = useContext(Context);

   return (
      <section className="pt-3 pt-lg-5 position-relative">
          <div className="container mb-4">
              <div className="row g-4 g-lg-5">
                  {/* Left Column */}
                  <div className="col-6 position-relative mb-4 mb-md-0">
                      <h1 className="mb-4 mt-md-5 display-1 fw-bold">
                          About us
                      </h1>
                      <p className="mb-4">
                        Welcome to Regalos de Amor Foundation, a global initiative born from the collaboration of passionate representatives from various Latin American countries. Our mission is simple yet profound: to create a meaningful impact by facilitating donations for charitable causes that transform lives and uplift communities.
                        </p>
                     <p className="mb-4">
                        With a shared vision of solidarity and a commitment to innovation, we have developed a cutting-edge platform designed to connect donors with trusted charities efficiently and transparently. Our platform empowers individuals and organizations to contribute to causes that matter, ensuring their generosity reaches those in need.
                        </p>
                     <p className="mb-4">
                        As a diverse and dedicated team, we bring together unique perspectives and experiences to tackle the challenges of today’s world. United by the values of compassion and integrity, we strive to bridge the gap between kindness and action, fostering a culture of giving that transcends borders.
                        </p>
                     <p className="mb-4">
                        Join us on this journey to make a difference, one donation at a time. Together, we can turn generosity into lasting change. Let’s build a brighter future, together.
                        </p>
                  </div>


                  {/* Right Column */}
                  <div className="col-6 position-relative mb-4 mb-md-0">
                      <div style={{ maxWidth: "100%", height: "auto", position: "relative" }}>
                          <img
                              src="https://booking.webestica.com/assets/images/bg/06.jpg"
                              className="rounded w-100"
                              alt=""
                          />
                      </div>
                  </div>
              </div>
              </div>
      </section>
  );
};
