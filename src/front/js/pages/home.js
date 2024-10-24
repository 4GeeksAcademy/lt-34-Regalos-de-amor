import React, { useEffect, useState } from 'react';
import FoundationCard from "./foundationCard";
import FoundationForm from './foundationForm';

const Home = () => {
    const [foundationList, setFoundationList] = useState([]);
    const [foundationToEdit, setFoundationToEdit] = useState();
    console.log(process.env.BACKEND_URL)
	
	const getAllFoundations = async () => {
		try {
			const response = await fetch(process.env.BACKEND_URL+'/api/foundations');
			if (!response.ok) {
				throw new Error(`Error: ${response.status} - ${response.statusText}`);
			}
			const data = await response.json();
			setFoundationList(data);
			
		} catch (error) {
			console.error('There was a problem with the fetch operation:', error);
		}
	};
	

	
	const addFoundation = async (foundation) => {
		try {
			const response = await fetch(process.env.BACKEND_URL+'/api/foundations', {
				method: "POST",
				headers: {
		
					"Content-Type": "application/json"
				},
				body: JSON.stringify(
					foundation
				  )
			});
			console.log(foundation)
			if (!response.ok) {
				throw new Error(`Failed to add foundation: ${response.statusText}`);
			}
			await getAllFoundations(); 
		} catch (error) {
			console.error('Error adding foundation:', error);
		}
	};

	const deleteFoundation = async (id) => {
		try {
			const response = await fetch(`${process.env.BACKEND_URL}/api/foundations/${id}`, {
				method: 'DELETE'
			});
			if (!response.ok) {
				throw new Error(`Failed to delete foundation: ${response.statusText}`);
			}
			await getAllFoundations(); 
		} catch (error) {
			console.error('Error deleting foundation:', error);
		}
	};
	
	const updateFoundation = async (id, foundation) => {
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/foundations/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(foundation)
            });

            if (!response.ok) {
				throw new Error(`Failed to update foundation: ${response.statusText}`);
            }

            console.log('Beneficiary updated');
			await getAllFoundations(); 

        } catch (error) {
            console.error('Failed to update beneficiary:', error);
        }
    };
			
			
	

	
    useEffect(() => {
        getAllFoundations();
    }, []);

    return (
        <div>
            <div className="row col-12 mb-2 mt-2">
                <button type="button" className="offset-11 col-1 btn btn-success" data-bs-toggle="modal" data-bs-target="#formModal">
                    Add New Foundation
                </button>
            </div>
            {foundationList.map((foundation) =>
                <FoundationCard
                    key={foundation.id}
                    name={foundation.name}
                    email={foundation.email}
                    description={foundation.description}
                    country={foundation.country}
                    password={foundation.password}
                    delete={() => deleteFoundation(foundation.id)}
                    edit={() => updateFoundation(foundation.id)}
                />
            )}

            <div className="modal fade" id="formModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <FoundationForm
                                add={addFoundation}
                                foundationToEdit={foundationToEdit}
								
                                update={updateFoundation}
								
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
