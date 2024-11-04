
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
				donors: [],
				last_name: [],
				email: [],
				// picture: []
				message: [],
				password: [],
			}
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
					console.log("Error loading message from backend", error);
				}
			},


			logout: () => {
				console.log('logout');
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

			private: async () => {
				const response = await fetch(process.env.BACKEND_URL + "/api/private", {
					headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
				})
				const data = await response.json()
				if (response.ok) {
					setStore({ foundation: data.foundation })
					return true
				}
				setStore({ foundation: false })
				return false
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
						mode: 'no-cors',
					});
					const data = await resp.json();
					setStore({ message: data.message });
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			fetchDonorData: async () => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/donor`);
					const data = await response.json();
					setStore({ donor: data });
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
			updateDonor: async (id, updatedDonor) => {
				try {
					await fetch(`${process.env.BACKEND_URL}/api/donor/${id}`, {
						method: "PUT",
						headers: { "Content-Type": "application/json" },
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
					console.log('Donante eliminado');
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
					console.log('Beneficiary created:', data);
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
					console.log('Beneficiary updated:', data);
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

					console.log(data.message || 'Beneficiary deleted successfully');
					getActions().fetchBeneficiaryData();
				} catch (error) {
					console.error('Failed to delete beneficiary:', error.message);
				}
			},
			logout: () => {
				localStorage.removeItem("token");
				setStore({ user: false });
			},

			private: async () => {
				const response = await fetch(process.env.BACKEND_URL + "/api/private", {
					headers: { "Authorization": "Bearer " + localStorage.getItem("token") }
				})
				const data = await response.json()
				if (response.ok) {
					setStore({ user: data.user })
					return true
				}
				setStore({ user: false })
				return false
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
			}
		}
	};
};

export default getState;


