import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";
import { COUNTRIES } from "../constants/constants";
import { Format } from "@cloudinary/url-gen/qualifiers";

export const SignupFoundation = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        country: '',
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
        if (!formData.name || !formData.description || !formData.country || !formData.email || !formData.password) {
            setErrorMessage("Please complete all fields.");
            return;
        }

        try {
            const response = await actions.signup(formData);

            if (response) {
                navigate("/login-foundation");
            } else {
                setErrorMessage("This email is already registered.");
            }
        } catch (error) {
            console.error("Error registering foundation:", error.message);
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

   

    return (
        <div>
            <section className="vh-xxl-100">
	<div className="container h-100 d-flex px-0 px-sm-4">
		<div className="row justify-content-center align-items-center m-auto">
			<div className="col-12">
				<div className="bg-mode shadow rounded-3 overflow-hidden">
					<div className="row g-0">
						{/* <!-- Vector Image --> */}
						<div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
							<div className="p-3 p-lg-7">
								<img src="https://booking.webestica.com/assets/images/element/signin.svg" alt="imagen"/>
							</div>
							{/* <!-- Divider --> */}
							<div className="vr opacity-1 d-none d-lg-block"></div>
						</div>
		
						{/* <!-- Information --> */}
						<div className="col-lg-6 order-1">
							<div className="p-4 p-sm-7">
								{/* <!-- Logo --> */}
								{/* <a href="index.html">
									<img class="h-50px mb-4" src" alt="logo"/>
								</a> */}
								{/* <!-- Title --> */}
								<h1 className="mb-2 h3">Create a New Foundation Account</h1>
								<p className="mb-0">Already member?<a href="/login-foundation"> Login</a></p>
		
								{/* <!-- Form START --> */}
								<form className="mt-4 text-start" onSubmit={handleSubmit}>
									{/* <!-- Email --> */}
									<div className="mb-3">
										<label className="form-label">Enter Name</label>
										<input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        required
                                        />
									</div>
                                    <div className="mb-3">
										<label className="form-label">Enter description</label>
										<input
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            type="text"
                                            className="form-control"
                                            id="inputDescription"
                                            required
                                        />
									</div>
                                    <div className= "mb-3">
                                    <label htmlFor="inputCountry" className="form-label">Country</label>
                                     <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="form-control"
                                        id="inputCountry"
                                        required
                                    >
                                        <option value="" disabled>Select your country</option>
                                        {COUNTRIES.map((country) => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
                                    </div>
                                    <div className="mb-3">
										<label className="form-label">Enter email</label>
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
									<div className="mb-3 position-relative">
										<label className="form-label">Enter password</label>
										<input
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            type="password"
                                            className="form-control"
                                            id="inputPassword"
                                            required
                                        />
										<span className="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
											<i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
										</span>
									</div>
                            
									{/* <!-- Button --> */}
									<div><button type="submit" className="btn btn-purple w-100 mb-0">Sign Up</button></div>			
								</form>
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
