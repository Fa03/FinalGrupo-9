import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import ListGroup from "react-bootstrap/ListGroup";

export const MyOrders = () => {
	const { store, actions } = useContext(Context);
	const [myUser, setMyUser] = useState("");
	const [orders, setOrders] = useState();

	const ordenes = email => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			email: email
		});

		var requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
		};

		fetch("https://proyectosweetsbyfray.herokuapp.com/api/myOrders", requestOptions)
			.then(response => response.json())
			.then(data => console.log("<<Lista Ordenes>>", data))
			.catch(error => console.log("error", error));
	};

	useEffect(() => {
		const userData = JSON.parse(sessionStorage.getItem("user"));

		setMyUser(userData);

		ordenes(userData.email);
	}, []);

	return (
		<Container className="my-5 pt-5">
			<Row className="d-flex align-items-center justify-content-around">
				<Col xs={6} className="w-75">
					<h2>{"¡Hola " + myUser.nombre + " Bienvenido!"}</h2>
					<h5> {"Tu información:"} </h5>
					<ListGroup horizontal>
						<ListGroup.Item className="mw-100">{myUser.nombre}</ListGroup.Item>
						<ListGroup.Item>{myUser.apellidos}</ListGroup.Item>
					</ListGroup>
					<ListGroup horizontal>
						<ListGroup.Item>{myUser.nacimiento}</ListGroup.Item>
						<ListGroup.Item>{myUser.sexo}</ListGroup.Item>
					</ListGroup>
					<ListGroup horizontal>
						<ListGroup.Item>{myUser.email}</ListGroup.Item>
						<ListGroup.Item>{myUser.telefono}</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
			<Row className="d-flex align-items-left justify-content-around">
				<Col xs={3}>
					<h3>Tus Órdenes:</h3>
					{orders
						? orders.map((item, i) => {
								return (
									<div key={i}>
										<ul>
											<li>{orders.productos}</li>
											<li>{orders.monto}</li>
											<li>{orders.metodo}</li>
											<li>{orders.dirección}</li>
										</ul>
									</div>
								);
						  })
						: "No tienes ninguna order aún."}
				</Col>
			</Row>
		</Container>
	);
};
