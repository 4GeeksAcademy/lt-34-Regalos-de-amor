import { Donors } from "../pages/donors";
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
			name: [],
			last_name: [],
			email: [],
			isActive: null,
			// picture: []
			message: [],
		},
		actions: {
			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getDonors: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/donor", {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
						},
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

			// CRUD Functions for Donor

			// Function to fetch all donors
			fetchDonorData: async () => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/donor`);
					if (!response.ok) {
						throw new Error(`Error: ${response.status}`);
					}
					const data = await response.json();
					setStore({ donor: data });
				} catch (error) {
					console.error('Failed to fetch donor data:', error);
				}
			},

			// Function to create a new donor
			createDonor: async (newDonor) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/donors`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						mode: 'no-cors',
						body: JSON.stringify(newDonor),
					});
					if (!response.ok) {
						throw new Error(`Error: ${response.status}`);
					}
					const data = await response.json();
					console.log('Donor created:', data);
					getActions().fetchDonorData(); // Refresh donor data
				} catch (error) {
					console.error('Failed to create donor:', error);
				}
			},

			// Function to update an existing donor
			updateDonor: async (id, updatedDonor) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/donor/${id}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(updatedDonor),
					});
					if (!response.ok) {
						throw new Error(`Error: ${response.status}`);
					}
					const data = await response.json();
					console.log('Donor updated:', data);
					getActions().fetchDonorData(); // Refresh donor data
				} catch (error) {
					console.error('Failed to update donor:', error);
				}
			},

			// Function to delete a donor
			deleteDonor: async (id) => {
				try {
					const response = await fetch(`${process.env.BACKEND_URL}/api/donor/${id}`, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json',
						},
					});
					if (!response.ok) {
						throw new Error('Error: ${response.status}');
					}
					console.log('Donor deleted');
					getActions().fetchDonorData(); // Refresh donor data
				} catch (error) {
					console.error('Failed to delete donor:', error);
				}
			},

			// Example function
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
		}
	};
};

export default getState;
