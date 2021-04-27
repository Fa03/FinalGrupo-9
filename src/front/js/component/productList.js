import React, { useEffect, useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

const Productlist = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	let partialArray = store.producto.slice(0, 4);
	console.log(partialArray);

	return (
		<Container>
			<Row>
				<Col>
					<ListGroup>
						{partialArray.map((item, i) => {
							let theid = i;
							return (
								<div key={i}>
									<ListGroup.Item className="d-flex justify-content-between align-items-center border-0">
										{item.nombre}
										<Image className="d-block h-25 w-25" src={item.imagen} roundedCircle />
									</ListGroup.Item>
								</div>
							);
						})}
					</ListGroup>
				</Col>
			</Row>
			<Row>
				<Col className="d-flex justify-content-center pt-3 mt-5">
					<Link to="/products">
						<Button variant="secondary" type="submit">
							Nuestros productos
						</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default Productlist;
