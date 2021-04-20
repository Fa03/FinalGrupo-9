import React, { useEffect, useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const Productlist = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<ListGroup>
			{store.producto.map((item, i) => {
				let theid = i;
				return (
					<div key={i}>
						<ListGroup.Item>
							{item.nombre}
							<Image className="d-block h-25 w-25" src={item.imagen} roundedCircle />
						</ListGroup.Item>
					</div>
				);
			})}

			{/* <ListGroup.Item>Alfajores</ListGroup.Item>
			<ListGroup.Item>Red Velvet</ListGroup.Item>
			<ListGroup.Item>Torta Chilena</ListGroup.Item>
			<ListGroup.Item>Queque Seco</ListGroup.Item>
			<ListGroup.Item>Enchiladas</ListGroup.Item> */}
		</ListGroup>
	);
};

export default Productlist;
