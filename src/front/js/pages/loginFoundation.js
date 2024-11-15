import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";

export const LoginFoundation = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState(null);  // State to hold error message
	const { actions, store } = useContext(Context);
	const navigate = useNavigate();

	// Check if the user is already logged in
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (store.user.email && token) {
			navigate("/foundation");
		}
	}, [store.user, navigate]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await actions.login(email, password);
		if (response) {
			navigate("/foundation");
		} else {
			setLoginError("Invalid email or password. Please try again.");
		}
	};

	// return (
	// 	<div className="container d-flex justify-content-center align-items-center" style={{ marginBottom: '2rem', marginTop: '2rem', height: '70%' }}>
	// 		<div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
	// 			<h2 className="text-center mb-4">Login Foundation</h2>
	// 			<form onSubmit={handleSubmit}>
	// 				<div className="mb-3">
	// 					<label htmlFor="email" className="form-label">Email Address</label>
	// 					<input
	// 						type="email"
	// 						id="email"
	// 						className="form-control"
	// 						value={email}
	// 						onChange={(e) => setEmail(e.target.value)}
	// 						required
	// 					/>
	// 				</div>
	// 				<div className="mb-3">
	// 					<label htmlFor="password" className="form-label">Password</label>
	// 					<input
	// 						type="password"
	// 						id="password"
	// 						className="form-control"
	// 						value={password}
	// 						onChange={(e) => setPassword(e.target.value)}
	// 						required
	// 					/>
	// 					<small className="form-text text-muted">
	// 						Never share your password with anyone.
	// 					</small>
	// 				</div>
	// 				{loginError && (
	// 					<div className="alert alert-danger text-center p-2 mt-2">
	// 						{loginError}
	// 					</div>
	// 				)}
	// 				<button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
	// 			</form>
	// 			<div className="text-center mt-3">
	// 				<p>
	// 					Don’t have an account? <Link to="/signup-foundation" className="text-decoration-none">Sign Up</Link>
	// 				</p>
	// 			</div>
	// 		</div>
	// 	</div>
	// );

	return (
		<div><section class="vh-xxl-100">
		<div class="container h-100 d-flex px-0 px-sm-4">
			<div class="row justify-content-center align-items-center m-auto">
				<div class="col-12">
					<div class="bg-mode shadow rounded-3 overflow-hidden">
						<div class="row g-0">
							{/* <!-- Vector Image --> */}
							<div class="col-lg-6 d-flex align-items-center order-2 order-lg-1">
								<div class="p-3 p-lg-5">
									<img src="https://booking.webestica.com/assets/images/element/signin.svg" alt=""/>
								</div>
								{/* <!-- Divider --> */}
								<div class="vr opacity-1 d-none d-lg-block"></div>
							</div>
			
							{/* <!-- Information --> */}
							<div class="col-lg-6 order-1">
								<div class="p-4 p-sm-7">
									{/* <!-- Logo --> */}
									{/* <a href="index.html">
										<img class="h-50px mb-4" src="assets/images/logo-icon.svg" alt="logo"/>
									</a> */}
									{/* <!-- Title --> */}
									<h1 class="mb-2 h3">Welcome Back, Foundation</h1>
									<p class="mb-0">New here?<a href="signup-foundation"> Create an account</a></p>
			
									{/* <!-- Form START --> */}
									<form class="mt-4 text-start" onSubmit={handleSubmit}>
										{/* <!-- Email --> */}
										<div class="mb-3">
											<label class="form-label">Enter email</label>
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
										<div class="mb-3 position-relative">
											<label class="form-label">Enter password</label>
											<input
												type="password"
												id="password"
												className="form-control"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
												required
											/>
											<span class="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
												<i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
											</span>
										</div>
										{/* <!-- Button --> */}
										<div><button type="submit" class="btn btn-purple w-100 mb-0">Login</button></div>
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

