
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
			],
			user: {
				name: [],
				wishGift: [],
				history: [],
				account: [],
				isActive: null,
				beneficiaries: [],
				last_name: [],
				email: [],
				// picture: []
				message: [],
				password: [],
				image_url: [],
			},
			donors: [],
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
					const data = await resp.json();
					setStore({ message: data.message });
					return data;
				} catch (error) {
					console.error("Error loading message from backend", error);
				}
			},

			logout: () => {
				localStorage.removeItem("token");
				setStore({ foundation: false });
			},

			login: async (email, password) => {
				try {
					const requestOptions = {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							'email': email,
							'password': password
						})
					};
					const response = await fetch(process.env.BACKEND_URL + "/api/login", requestOptions);

					if (!response.ok) {
						console.error("Login failed:", response.statusText);
						return false;
					}

					const data = await response.json();
					localStorage.setItem("token", data.access_token);
					setStore({ foundation: data.user });  // Update as necessary for your app
					return true;
				} catch (error) {
					console.error("Error during login:", error);
					return false;
				}
			},

			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			},

			fetchBeneficiaryData: async () => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/beneficiary`, {
						headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
					});
					if (!response.ok) {
						throw new Error(`Error: ${response.status}`);
					}
					const data = await response.json();
					setStore({ beneficiaries: data });
				} catch (error) {
					console.error('Failed to fetch beneficiary data:', error);
				}
			},
			getDonors: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/donor", {
						method: 'GET',
						headers: { "Authorization": "Bearer " + localStorage.getItem("token") },
					});
					const data = await resp.json();
					setStore({ donors: data.donors });
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.error("Error loading message from backend", error);
				}
			},
			fetchDonorData: async () => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/donor`);
					const data = await response.json();
					setStore({ donors: data });
				} catch (error) {
					console.error("Error fetching donors:", error);
				}
			},

			fetchDonorData: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/donor", {
						method: 'GET',
						headers: { "Authorization": "Bearer " + localStorage.getItem("token") },
					});
					const data = await response.json();
					return data;
				} catch (error) {
					console.error("Error fetching donors:", error);
				}
			},

			createDonor: async (newDonor) => {

				try {
					await fetch(`${process.env.BACKEND_URL}/api/donor`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(newDonor),

					});
					getActions().fetchDonorData();
				} catch (error) {
					console.error("Error creating donor:", error);
				}
			},
			updateDonor: async (updatedDonor) => {
				try {
					const token = localStorage.getItem("token");
					await fetch(`${process.env.BACKEND_URL}/api/donor/`, {
						method: "PUT",
						headers: { "Content-Type": "application/json", "Authorization": "Bearer " + token },
						body: JSON.stringify(updatedDonor),
					});
					getActions().fetchDonorData();
				} catch (error) {
					console.error("Error updating donor:", error);
				}
			},
			deleteDonor: async (id) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/donor/${id}`, {
						method: 'DELETE',
						headers: { 'Content-Type': 'application/json' },
					});
					if (!response.ok) throw new Error(`Error: ${response.status}`);
					getActions().fetchDonorData(); // Actualiza la lista
				} catch (error) {
					console.error('Error eliminando donante:', error);
				}
			},

			createBeneficiary: async (beneficiaryData) => {
				try {
					const token = localStorage.getItem('token');
					const response = await fetch(`${process.env.BACKEND_URL}/api/beneficiary`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						},
						body: JSON.stringify(beneficiaryData)
					});

					if (!response.ok) {
						throw new Error(`Error: ${response.status}`);
					}

					const data = await response.json();
					getActions().fetchBeneficiaryData();
				} catch (error) {
					console.error('Failed to create beneficiary:', error);
				}
			},
			updateBeneficiary: async (beneficiaryId, beneficiaryData) => {
				try {
					const token = localStorage.getItem('token');
					const response = await fetch(`${process.env.BACKEND_URL}/api/beneficiary/${beneficiaryId}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${token}`
						},
						body: JSON.stringify(beneficiaryData)
					});

					if (!response.ok) {
						throw new Error(`Error: ${response.status}`);
					}

					const data = await response.json();
					getActions().fetchBeneficiaryData(); // Actualizar la lista de beneficiarios después de la actualización
				} catch (error) {
					console.error('Failed to update beneficiary:', error);
				}
			},
			deleteBeneficiary: async (id) => {
				try {
					const token = localStorage.getItem('token');
					const response = await fetch(`${process.env.BACKEND_URL}/api/beneficiary/${id}`, {
						method: 'DELETE',
						headers: {
							'Authorization': `Bearer ${token}`
						}
					});

					const data = await response.json();

					if (!response.ok) {
						throw new Error(data.error || `Error: ${response.status}`);
					}
					getActions().fetchBeneficiaryData();
				} catch (error) {
					console.error('Failed to delete beneficiary:', error.message);
				}
			},
			logout: () => {
				localStorage.removeItem("token");
				setStore({ user: false });
			},

			signup: async (formData) => {
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formData)
				};
				const response = await fetch(process.env.BACKEND_URL + "/api/signup", requestOptions);
				const data = await response.json();

				if (response.ok) {
					return { success: true };
				} else {
					console.error("Signup error:", data);
					return { success: false, message: data.msg };
				}
			},

			signupDonor: async (formData) => {
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formData)
				};
				const response = await fetch(process.env.BACKEND_URL + "/api/signup/donor", requestOptions)
				const data = await response.json()

				if (response.ok) {
					return true
				} else {
					console.error("Signup error:", data);
					return { success: false, message: data.msg };
				}
			},

			loginDonor: async (email, password) => {
				try {
					const requestOptions = {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							'email': email,
							'password': password
						})
					};
					const response = await fetch(process.env.BACKEND_URL + "/api/login/donor", requestOptions);

					if (!response.ok) {
						console.error("Login failed:", response.statusText);
						return false;
					}

					const data = await response.json();
					localStorage.setItem("token", data.access_token);
					setStore({ user: data.user });
					return data.user;
				} catch (error) {
					console.error("Error during login:", error);
					return false;
				}
			},

			logoutDonor: () => {
				localStorage.removeItem("token");
				setStore({ user: false });
			},

			fetchAllFoundations: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/foundations", {
						method: 'GET',
						headers: { "Authorization": "Bearer " + localStorage.getItem("token") },
					});
					const data = await response.json();
					return data;
				} catch (error) {
					console.error("Error fetching donors:", error);
				}
			},

			fetchBeneficiariesByFoundationId: async (id) => {
				try {
					const token = localStorage.getItem('token');
					const response = await fetch(`${process.env.BACKEND_URL}/api/foundation/${id}/beneficiaries/`, {
						method: 'GET',
						headers: {
							'Authorization': `Bearer ${token}`
						}
					});

					const data = await response.json();

					if (!response.ok) {
						throw new Error(data.error || `Error: ${response.status}`);
					}
					setStore({ beneficiaries: data });
					return data;
				} catch (error) {
					console.error('Failed to fetch beneficiaries:', error.message);
				}
			}
		}
	};
};

export default getState;


