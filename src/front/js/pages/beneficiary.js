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
		}catch (error) {
		  console.error('Failed to delete beneficiary:', error);
		  }
	  };
    
    return (
      <div className="container">
          <h1 className="text-danger mb-4">Beneficiaries</h1>
          <div className="row">
              {store.beneficiaries && store.beneficiaries.length > 0 && store.beneficiaries.map(item => {
                  return (
                      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={item.id}>
                          <div className="card h-100">
                              {item.image_url && (
                                  <img src={item.image_url} alt={`${item.name}`} className="card-img-top img-fluid" />
                              )}
                              <div className="card-body">
                                  <h5 className="card-title">{item.name}</h5>
                                  <p className="card-text"><strong>Wish Gift:</strong> {item.wish_gift}</p>
                                  <p className="card-text"><strong>History:</strong> {item.history}</p>
                                  <p className="card-text"><strong>Account:</strong> {item.account}</p>
                                  <div className="d-flex mt-2">
                                      <button type="button" className="btn btn-danger me-2" onClick={() => deleteBeneficiary(item.id)}>Delete</button>
                                      <Link to={`/beneficiary/edit/${item.id}`} className="btn btn-primary">Edit</Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  );
              })}
          </div>
          <Link to="/beneficiary/add" className="btn btn-success mt-3">Add New Beneficiary</Link>
      </div>
  );
};