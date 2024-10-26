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
                    const response = await fetch(`${process.env.BACKEND_URL}/api/beneficiary`);
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

            createBeneficiary: async () => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/beneficiary`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify()
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

        }
    };
};

export default getState;
