import React, { useContext } from 'react';
import "../../styles/home.css";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext";


export const PostHelper = (props) => {
	const { store, actions } = useContext(Context);
	const isFavorite = store.favorites.findIndex((f) => f.name === props.name) !==-1;

return (
	<> 
		<div className="card mx-3 col-2" style={{width: "18rem", minWidth: "18rem"}}>
			<img src={starImage} className="card-img-top" alt="..."/>
			<div className="card-body">
				<h5 className="text-center card-title">{props.name}</h5>
				<Link className="me-5 btn btn-outline-primary" to={`/${props.type}/${props.id}`}>
					Learn More
				</Link>
				{isFavorite
					? <button className='btn btn-warning text-white' onClick={() => actions.removeFavorite(props.name)}><i class="fa fa-heart"></i></button>
					: <button className='btn btn-outline-warning' onClick={() => actions.addFavorite(props)}><i class="fa fa-heart"></i></button>
				}
			</div>
		</div>
	</>
);
};

export default PostHelper;
