import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
   <footer className="bg-dark pt-3">
       <div className="container">
           <div className="row g-4">
               <div className="col-lg-3">
                   <a href="index.html"></a>
                   <p className="my-3 text-white">"Be the change the world needs by helping others".</p>
                   <p className="mb-2">
                       <a href="#" className="text-white text-primary-hover">
                           <i className="bi bi-telephone me-2"></i>+1234 568 963
                       </a>
                   </p>
                   <p className="mb-0">
                       <a href="#" className="text-white text-primary-hover">
                           <i className="bi bi-envelope me-2"></i>regalosdeamor@gmail.com
                       </a>
                   </p>
               </div>
               <div className="col-lg-8 ms-auto">
                   <div className="row g-4">
                       <div className="col-6 col-md-3">
                           <h5 className="text-white mb-2 mb-md-4">Page</h5>
                           <ul className="nav flex-column text-primary-hover"></ul>
                       </div>
                       <div className="col-6 col-md-3">
                           <h5 className="text-white mb-2 mb-md-4">Contact us</h5>
                           <ul className="nav flex-column text-primary-hover">
                               <li className="nav-item">
                                   <Link className="nav-link text-white" to="/signup-foundation">
                                       Sign up Foundation
                                   </Link>
                               </li>
                               <li className="nav-item">
                                   <Link className="nav-link text-white" to="/signup-donor">
                                       Sign up Donor
                                   </Link>
                               </li>
                           </ul>
                       </div>
                       <div className="col-6 col-md-3">
                           <h5 className="text-white mb-2 mb-md-4">Contact us</h5>
                           <ul className="nav flex-column text-primary-hover"></ul>
                       </div>
                   </div>
               </div>
           </div>
           <hr className="mt-4 mb-0" />
           <div className="row">
               <div className="container">
                   <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start">
                       <div className="text-white">
                           Copyrights ©2024 Booking. Build by{" "}
                           <a href="https://www.webestica.com/" className="text-white text-primary-hover">
                               Webestica
                           </a>.
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </footer>
);