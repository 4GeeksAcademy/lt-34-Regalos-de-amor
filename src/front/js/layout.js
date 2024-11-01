import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import {Home} from "./pages/home";

import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { BeneficiaryForm } from "./pages/beneficiaryForm";
import { Beneficiary } from "./pages/beneficiary";
import { DonorForm } from "./component/DonorForm";
import injectContext from "./store/appContext";
import { Donors } from "./pages/donors"; // Asegúrate de que la ruta sea correcta


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import List from "./pages/foundationList";
import { DonorBeneficiary } from "./pages/donorbeneficiary";
import { Payment } from "./pages/paypal";
import { PayPalScriptProvider} from "@paypal/react-paypal-js";
// import { payment } from "paypal-rest-sdk";

const initialOptions = {
    "client-id": process.env.PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
};

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
            <PayPalScriptProvider>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<List />} path="/list" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Payment />} path="/payment" />
                        <Route element={<Beneficiary/>} path="/beneficiary" />
                        <Route element={<BeneficiaryForm />} path="/beneficiary/add" />
                        <Route element={<BeneficiaryForm />} path="/beneficiary/edit/:id" />
                        <Route path="/donor/new" element={<DonorBeneficiary />} />
                        <Route element={<DonorForm />} path="/donorform" /> 
                        <Route element={<Donors />} path="/donors" /> 
                        <Route element={<DonorForm />} path="/donorform/:id" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
                </PayPalScriptProvider>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);


