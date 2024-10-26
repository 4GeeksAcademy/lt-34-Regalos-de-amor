import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Beneficiary = () => {
    const {store, actions} =  useContext(Context);

    const deleteBeneficiary = async (id) => {
		try {
		  const response = await fetch(`${process.env.BACKEND_URL}/api/beneficiary/${id}`, {
			method: 'DELETE'
		  });
	  
		  if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		  }
	  
		  console.log('Beneficiary deleted');
          actions.fetchBeneficiaryData()
		} catch (error) {
		  console.error('Failed to delete beneficiary:', error);
		}
	  };
      

    return (
        <>
  
        {store.beneficiaries && store.beneficiaries.length > 0 && store.beneficiaries.map(item => {
            return (

              <div className="container d-flex justify-content-center mb-3" key={item.id}>
                <div>
                    <h1>{item.name}</h1>
                    <p><strong>Wish Gift:</strong> {item.wish_gift}</p>
                    <p><strong>History:</strong> {item.history}</p>
                    <p><strong>Account:</strong> {item.account}</p>
                      <div className="d-flex">
                          <button type="button" className="btn btn-danger me-2" onClick={() => deleteBeneficiary(item.id)}>Delete</button>
                          <Link to={"/beneficiary/edit/" + item.id} className="btn btn-primary">Edit</Link>
                      </div>
                      <Link to="/donor/new" className="btn btn-success mt-3">Add New Beneficiary</Link>
                </div>
          </div>
            )
        })}
        </>

    )
}