import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import { COUNTRIES } from "../constants/constants";

export const SignupDonor = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verificar que todos los campos están completos
        if (!formData.email || !formData.password) {
            setErrorMessage("Please complete all fields.");
            return;
        }

        try {
            const response = await actions.signupDonor(formData);

            if (response) {
                navigate("/login-donor");
            } else {
                setErrorMessage("This email is already registered.");
            }
        } catch (error) {
            console.error("Error registering donor:", error.message);
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

    return (
        <div>
            <section class="vh-xxl-100">
                <div class="container h-100 d-flex px-0 px-sm-4 ">
                    <div class="row justify-content-center align-items-center m-auto">
                        <div class="col-12">
                            <div class="bg-mode shadow rounded-3 overflow-hidden">
                                <div class="row g-0">
                                    {/* <!-- Vector Image --> */}
                                    <div class="col-lg-6 d-md-flex align-items-center order-2 order-lg-1">
                                        <div class="p-3 p-lg-7">
                                            <img src="https://booking.webestica.com/assets/images/element/signin.svg" alt=""/>
                                        </div>
                                        {/* <!-- Divider --> */}
                                        <div class="vr opacity-1 d-none d-lg-block"></div>
                                    </div>

                                    {/* <!-- Information --> */}
                                    <div class="col-lg-6 order-1">
                                        <div class="p-4 p-sm-6">
                                            {/* <!-- Logo --> */}
                                            {/* <a href="index.html">
                                                <img class="h-50px mb-4" src="assets/images/logo-icon.svg" alt="logo"/>
                                            </a> */}
                                            {/* <!-- Title --> */}
                                            <h1 class="mb-2 h3">Create a New Donor Account</h1>
                                            <p class="mb-0">Already a member?<a href="/login-donor"> Log in</a></p>

                                            {/* <!-- Form START --> */}
                                            <form class="mt-4 text-start" onSubmit={handleSubmit}>
                                                {/* <!-- Email --> */}
                                                <div class="mb-3">
                                                    <label class="form-label">Enter email</label>
                                                    <input
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        type="email"
                                                        className="form-control"
                                                        id="inputEmail"
                                                        required
                                                    />
                                                </div>
                                                {/* <!-- Password --> */}
                                                <div class="mb-3 position-relative">
                                                    <label class="form-label">Enter password</label>
                                                    <input
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        type="password"
                                                        className="form-control"
                                                        id="inputPassword"
                                                        required
                                                    />
                                                        <span class="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
                                                            <i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                                                        </span>
                                                </div>                                            
                                                {/* <!-- Button --> */}
                                                <div><button type="submit" class="btn btn-purple w-100 mb-0">Sign up</button></div>

                                            </form>
                                            {/* <!-- Form END --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};
