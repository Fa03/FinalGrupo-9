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
		window.scrollTo(0, 0);
	}, []);
	return (
		<Container fluid className="mt-5 pt-5" style={{ background: "#d8d1d8" }}>
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
	);
};
