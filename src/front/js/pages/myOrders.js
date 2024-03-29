import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import Table from "react-bootstrap/Table";
import { Redirect } from "react-router-dom";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

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

		fetch("https://3001-rose-raccoon-vvret31o.ws-us04.gitpod.io/api/myOrders", requestOptions)
			.then(response => response.json())
			.then(data => setOrders(data))
			.catch(error => console.log("error", error));
	};

	useEffect(() => {
		const userData = JSON.parse(sessionStorage.getItem("user"));

		setMyUser(userData);
		if (userData != null) {
			ordenes(userData.email);
		}
	}, []);

	const productosOrdenados = productos => {
		let detalleProductos = "";
		productos = productos.replaceAll(`{`, "");
		productos = productos.replaceAll(`}`, "");
		// console.log(productos);
		let arregloProductos = productos.split(",");
		// console.log("arregloProductos", arregloProductos);
		arregloProductos.map((item, index) => {
			// console.log("Del ITem", item);
			let itemSinCaracteres = item.replaceAll("{", "");
			itemSinCaracteres = item.replaceAll("}", "");
			itemSinCaracteres = item.replaceAll(`\"`, "");
			detalleProductos = detalleProductos.concat(itemSinCaracteres);
			detalleProductos = detalleProductos.concat(`\n`);
		});

		// for (let i = 0; i < arregloProductos.lenght; i++) {
		// 	console.log(arregloProductos[i]);
		// 	detalleProductos.concat(arregloProductos[i]);
		// 	detalleProductos.concat(" ");
		// }
		// console.log("Detalle de Los productos", detalleProductos);
		return detalleProductos;
	};

	return myUser == null ? (
		<Redirect to="/" />
	) : (
		<Container fluid className="mt-5 pt-5" style={{ background: "#d8d1d8" }}>
			<Row className="d-flex align-items-center justify-content-around mt-3">
				<Col xs={6} className="w-75">
					{myUser.sexo == "Masculino" ? (
						<h2>{"¡Hola " + myUser.nombre + ", Bienvenido!"}</h2>
					) : (
						<h2>{"¡Hola " + myUser.nombre + ", Bienvenida!"}</h2>
					)}

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
			<Row className="d-flex align-items-center justify-content-around">
				<Col xs={12}>
					<h3>Tus Órdenes:</h3>
					{/* {console.log(orders)} */}
					{orders != undefined ? (
						<Table striped bordered hover className="w-100">
							<thead>
								<tr>
									<th># Orden</th>
									<th style={{ width: "900px" }}>Productos</th>
									<th>Monto</th>
									<th>Método</th>
									<th>Dirección</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((item, i) => {
									// console.log(item);
									// console.log(item.productos);
									// console.log("Productos ordenados:", productosOrdenados(item.productos));
									// console.log(item.productos);
									return (
										<tr key={i}>
											<td>{item.id}</td>
											<td>{productosOrdenados(item.productos)}</td>
											<td>
												&#162;
												{item.monto}
											</td>
											<td>{item.metodo}</td>
											<td>{item.dirección}</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
					) : (
						<div>
							<SentimentVeryDissatisfiedIcon />
							<p>Aún no tienes órdenes.</p>
						</div>
					)}
				</Col>
			</Row>
		</Container>
	);
};
