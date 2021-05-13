import React, { useEffect, useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import index from "../../styles/index.scss";

const Productlist = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	let partialArray = store.producto.slice(0, 4);
	// console.log(partialArray);

	return (
		<Container className="mt-3 pt-3">
			<Row className="mb-1">
				<Col>
					<ListGroup>
						{partialArray.map((item, i) => {
							let theid = i;
							return (
								<div key={i}>
									<ListGroup.Item
										className="d-flex justify-content-between align-items-center border-0 textoLista"
										style={{ background: "#d8d1d8" }}>
										{item.nombre}
										{/* <div className="contenedorImagen">
											<Image className="imgLista img-responsive" src={item.imagen} />
										</div> */}
										<div className="flip-box contenedorImagen">
											<div className="flip-box-inner">
												<div className="flip-box-front">
													<Image className="imgLista img-responsive" src={item.imagen} />
												</div>
												<div className="flip-box-back">
													<Image className="imgLista img-responsive" src={item.imagen} />
												</div>
											</div>
										</div>
									</ListGroup.Item>
								</div>
							);
						})}
					</ListGroup>
				</Col>
			</Row>
			<Row>
				<Col className="d-flex justify-content-center">
					<Link to="/products">
						<Button type="submit" style={{ background: "#c3777b", border: "none" }}>
							Nuestros productos
						</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default Productlist;
