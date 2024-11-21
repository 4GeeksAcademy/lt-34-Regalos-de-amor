import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const LoginDonor = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState(null);
	const { actions } = useContext(Context);
	const navigate = useNavigate();

	async function sendData(e) {
		e.preventDefault();
		setLoginError(null); // Reset error message

		const user = await actions.loginDonor(email, password);
		if (user) {
			if (user.first_name && user.last_name) {
				navigate("/foundations-list");
			} else {
				navigate("/donor-profile");
			}
		} else {
			setLoginError("Invalid email or password.");
		}
	}

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
										<div className="p-3 p-lg-5">
											<img src="https://booking.webestica.com/assets/images/element/signin.svg" alt="" />
										</div>
										{/* <!-- Divider --> */}
										<div className="vr opacity-1 d-none d-lg-block"></div>
									</div>

									{/* <!-- Information --> */}
									<div className="col-lg-6 order-1">
										<div className="p-4 p-sm-7">
											{/* <!-- Logo -->
								<a href="index.html">
									<img className="h-50px mb-4" src="assets/images/logo-icon.svg" alt="logo">
								</a> */}
											{/* <!-- Title --> */}
											<h1 className="mb-2 h3">Welcome back, Donor</h1>
											<p className="mb-0">New here?<a href="/signup-donor"> Create an Donor account</a></p>

											{/* <!-- Form START --> */}
											<form className="mt-4 text-start" onSubmit={sendData}>
												{/* <!-- Email --> */}
												<div className="mb-3">
													<label className="form-label">Enter email</label>
													<input
														type="email"
														id="email"
														className="form-control"
														value={email}
														onChange={(e) => setEmail(e.target.value)}
														required
													/>
												</div>
												{/* <!-- Password --> */}
												<div className="mb-3 position-relative">
													<label className="form-label">Enter password</label>
													<input
														type="password"
														id="password"
														className="form-control"
														value={password}
														onChange={(e) => setPassword(e.target.value)}
														required
													/>
													<span className="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
														<i className="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
													</span>
												</div>
												{loginError && (
													<div className="alert alert-danger text-center p-2 mt-2">
														{loginError}
													</div>
												)}

												{/* <!-- Button --> */}
												<div><button type="submit" className="btn btn-purple w-100 mb-0">Login</button></div>
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
