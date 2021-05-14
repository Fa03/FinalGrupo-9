import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
// creadas
import CompanyCard from "../component/companyCard";
import { Container, Row, Col, Image } from "react-bootstrap";
import Productlist from "../component/productList";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getProducto();
		window.scrollTo(0, 0);
	}, []);
	return (
		<Container fluid className="mt-5 pt-5" style={{ background: "#d8d1d8" }}>
			<Row className="d-flex align-items-center">
				<Col className="d-none d-md-flex">
					<CompanyCard />
				</Col>
				<Col className="col-5 d-flex justify-content-center pl-3 d-none d-md-flex">
					<Link to="/cierreSesion">
						<Image
							className="img-fluid"
							src="https://www.vainillamolina.com/uploads/images/VM_Blo77.png"
							roundedCircle
						/>
					</Link>
				</Col>
				<Col>
					<Productlist />
				</Col>
			</Row>
		</Container>
	);
};
