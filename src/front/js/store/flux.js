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

            createDonor: async (donor) => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/beneficiary`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(donor)
                    });

                    if (!response.ok) {
                        throw new Error(`Error: ${response.status}`);
                    }

                    const data = await response.json();
                    console.log('Donor created:', data);
                    getActions().fetchBeneficiaryData();
                } catch (error) {
                    console.error('Failed to create donor:', error);
                }
            }
        }
    };
};

export default getState;
