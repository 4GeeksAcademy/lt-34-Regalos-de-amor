import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Login } from "./component/login";

import {Home} from "./pages/home";

import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { BeneficiaryForm } from "./pages/beneficiaryForm";
import { Beneficiary } from "./pages/beneficiary";
import { DonorForm } from "./component/DonorForm";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import List from "./pages/foundationList";
import { DonorBeneficiary } from "./pages/donorbeneficiary";
import FoundationForm from "./pages/foundationForm";


const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<List />} path="/list" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<FoundationForm />} path="/form " />
                        <Route element={<Beneficiary/>} path="/beneficiary" />
                        <Route element={<BeneficiaryForm />} path="/beneficiary/add" />
                        <Route element={<BeneficiaryForm />} path="/beneficiary/edit/:id" />
                        <Route path="/donor/new" element={<DonorBeneficiary />} />
                        <Route element={<DonorForm />} path="/donorform" /> 
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);


