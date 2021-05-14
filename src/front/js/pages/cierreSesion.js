import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
// creadas

import { Container, Row, Col, Image } from "react-bootstrap";
import monophy from "../../img/monophy.gif";

export const CierreSesion = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getProducto();
		window.scrollTo(0, 0);
	}, []);

	return (
		<Container fluid className="mt-5 pt-5" style={{ background: "#d8d1d8" }}>
			<Row>
				<Col className="d-flex justify-content-center">
					<Link to="/">
						<Image className="img-fluid" src={monophy} />
					</Link>
				</Col>
			</Row>
			<Row>
				<Col className="d-flex justify-content-center">
					<Link to="/" className="text-decoration-none" style={{ color: "#5e5757" }}>
						<h3 className="textoGracias">Te esperamos pronto!!</h3>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};
