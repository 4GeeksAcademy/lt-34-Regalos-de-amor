// src/store/flux.js
const getState = ({ getStore, getActions, setStore }) => ({
    store: {
        donor: [],
    },
    actions: {
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
		
    },
});

export default getState;


