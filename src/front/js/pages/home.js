import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
// creadas
import CompanyCard from "../component/companyCard";
import { Container, Row, Col, Image } from "react-bootstrap";
import Productlist from "../component/productList";

export const Home = () => {
	const { store, actions } = useContext(Context);

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
	);
};
