import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import Table from "react-bootstrap/Table";

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

		fetch("https://3001-blue-koi-rys0mz5q.ws-us04.gitpod.io/api/myOrders", requestOptions)
			.then(response => response.json())
			.then(data => setOrders(data))
			.catch(error => console.log("error", error));
	};

	useEffect(() => {
		const userData = JSON.parse(sessionStorage.getItem("user"));

		setMyUser(userData);

		ordenes(userData.email);
	}, []);

	return (
		<Container fluid className="my-5 pt-5" style={{ background: "#d8d1d8" }}>
			<Row className="d-flex align-items-center justify-content-around">
				<Col xs={6} className="w-75">
					<h2>{"¡Hola " + myUser.nombre + " Bienvenido!"}</h2>
					<h5> {"Tu información:"} </h5>

					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Apellidos</th>
								<th>Fecha de Nacimiento</th>
								<th>Sexo</th>
								<th>Email</th>
								<th>Teléfono</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{myUser.nombre}</td>
								<td>{myUser.apellidos}</td>
								<td>{myUser.nacimiento}</td>
								<td>{myUser.sexo}</td>
								<td>{myUser.email}</td>
								<td>{myUser.telefono}</td>
							</tr>
						</tbody>
					</Table>
				</Col>
			</Row>
			<Row className="d-flex align-items-left justify-content-around">
				<Col xs={3}>
					<h3>Tus Órdenes:</h3>
					{orders ? (
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Productos</th>
									<th>Monto</th>
									<th>Método</th>
									<th>Dirección</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((item, i) => {
									return (
										<tr key={i}>
											<td>{item.productos}</td>
											<td>{item.monto}</td>
											<td>{item.metodo}</td>
											<td>{item.dirección}</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
					) : (
						<div>{<i className="fas fa-heart-broken" /> + "No tienes ninguna orden creada aún"}</div>
					)}
				</Col>
			</Row>
		</Container>
	);
};
