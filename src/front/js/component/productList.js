import React, { useEffect, useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Productlist = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	// {store.producto.map((item, i) => { */}
	// 	 		let theid = i;
	// 	 		console.log(item);
	// 	 		<ListGroup.Item key={i}>{item.nombre}</ListGroup.Item>;
	// })}

	return (
		<ListGroup>
			<ListGroup.Item>Alfajores</ListGroup.Item>
			<ListGroup.Item>Red Velvet</ListGroup.Item>
			<ListGroup.Item>Torta Chilena</ListGroup.Item>
			<ListGroup.Item>Queque Seco</ListGroup.Item>
			<ListGroup.Item>Enchiladas</ListGroup.Item>
		</ListGroup>
	);
};

export default Productlist;
