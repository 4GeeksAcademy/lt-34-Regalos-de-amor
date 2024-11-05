import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { BeneficiaryForm } from "./pages/beneficiaryForm";
import { Beneficiary } from "./pages/beneficiary";
import { DonorForm } from "./component/DonorForm";
import injectContext from "./store/appContext";
import { Donors } from "./pages/donors";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Foundation } from "./pages/foundation";
import { PostHelper } from "./component/postHelper";
import { Login } from "./pages/login";
import { Welcome } from "./pages/welcome";
import { Signup } from "./component/signup";
import { Payment } from "./pages/paypal";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


const Layout = () => {
    const initialOptions = {
        "client-id": process.env.PAYPAL_CLIENT_ID,
        currency: "USD",
        intent: "capture",
    };
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <PayPalScriptProvider options={initialOptions}>
                    <ScrollToTop>
                        <Navbar />
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<Foundation />} path="/foundation" />
                            <Route element={<Demo />} path="/demo" />
                            <Route element={<Login />} path="/login" />
                            <Route element={<Signup />} path="/signup" />
                            <Route element={<PostHelper />} path="/post" />
                            <Route element={<Welcome />} path="/welcome" />
                            <Route element={<Beneficiary />} path="/beneficiary" />
                            <Route element={<BeneficiaryForm />} path="/beneficiary/add" />
                            <Route element={<BeneficiaryForm />} path="/beneficiary/edit/:id" />
                            <Route element={<DonorForm />} path="/donorform" />
                            <Route element={<Donors />} path="/donors" />
                            <Route element={<DonorForm />} path="/donorform/:id" />
                            <Route element={<Payment />} path="/payment" />
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
