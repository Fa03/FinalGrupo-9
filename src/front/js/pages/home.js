import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
// creadas
import CompanyCard from "../component/companyCard";
import { Container, Row, Col, Image } from "react-bootstrap";
import Productlist from "../component/productList";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getProducto();
	}, []);
	return (
		<Container fluid>
			<Row className="d-flex align-items-center">
				<Col>
					<CompanyCard />
				</Col>
				<Col>
					<Image src="https://www.vainillamolina.com/uploads/images/VM_Blo77.png" roundedCircle />
				</Col>
				<Col>
					<Productlist />
				</Col>
			</Row>
		</Container>

		// <div className="text-center mt-5">
		// 	<h1>Hello Rigo!</h1>
		// 	<p>
		// 		<img src={rigoImageUrl} />
		// 	</p>
		// 	<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
		// 	<p>
		// 		This boilerplate comes with lots of documentation:{" "}
		// 		<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
		// 			Read documentation
		// 		</a>
		// 	</p>
		// </div>
	);
};
