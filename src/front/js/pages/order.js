import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import App from "../component/app";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";

export const Order = () => {
	const { store, actions } = useContext(Context);
	const [myUser, setMyUser] = useState("");
	const [orderConf, setOrderConf] = useState(false);
	const [datos, setDatos] = useState({
		usuario: "",
		metodo: "",
		productos: "Pastel cumpleaños, Mayonesa Keto Chipotle",
		monto: "23500",
		dirección: ""
	});

	useEffect(() => {
		const userData = JSON.parse(sessionStorage.getItem("user"));
		userData ? setMyUser(userData) : null;
	}, []);

	const handleInputChange = event => {
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (datos.usuario == null) {
			alert("Por favor confirme su correo.");
		} else if (datos.usuario !== myUser.email) {
			alert("Favor ingrese el mismo correo con el que creó su cuenta");
		} else if (datos.dirección == null) {
			alert("Favor ingrese la dirección de entrega.");
		} else if (datos.metodo == null) {
			alert("Seleccione un método de pago");
		} else if (datos.monto == null) {
			alert("No tiene productos seleccionados para hacer el pedido.");
		} else if (datos.productos == null) {
			alert("No tiene productos seleccionados para hacer el pedido.");
		} else {
			var myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			var raw = JSON.stringify(datos);

			var requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			};

			fetch("https://3001-teal-puma-i7eyxgd6.ws-us04.gitpod.io/api/newOrder", requestOptions)
				.then(response => {
					response.status === 200
						? setTimeout(() => {
								setOrderConf(true);
						  }, 4000)
						: null;
					return response.json();
				})
				// .then(result => {
				// 	<Alert variant="success">Ordea creada satisfactoriamente... ¡Muchas Gracias!</Alert>;
				// })
				.catch(error => {
					console.log("error", error);
					alert("No se completó la orden, favor contactarnos directamente");
				});
			store.carrito = [];
		}
	};
	console.log(datos);

	return (
		<Container fluid className="my-5 pt-5">
			<Row className="d-flex align-items-center justify-content-around">
				<Col xs={4}>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formBasicEmail" onChange={handleInputChange}>
							<Form.Label>Correo Electrónico</Form.Label>
							<Form.Control type="email" placeholder="Confirma tu correo electrónico" name="usuario" />
						</Form.Group>
						<Form.Group controlId="formGridDireccion" onChange={handleInputChange}>
							<Form.Label>Dirección</Form.Label>
							<Form.Control type="dirección" placeholder="Dirección de entrega" name="dirección" />
						</Form.Group>
						<Form.Group controlId="formGridMetodo" onChange={handleInputChange}>
							<Form.Label>Método de Pago</Form.Label>
							<Form.Control as="select" defaultValue="Elegir..." name="metodo">
								<option>Elegir...</option>
								<option>Transferencia</option>
								<option>Tarjeta</option>
								<option>SINPE Móvil</option>
							</Form.Control>
						</Form.Group>
						{/* <Form.Group controlId="formBasicPassword">
							<Form.Label>Forma de Pago</Form.Label>
							<Form.Control type="password" placeholder="Tarjeta/SINPE" />
						</Form.Group> */}
						{/* <Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group> */}
						{datos.metodo == "Tarjeta" ? (
							<Col className="d-flex justify-content-center">
								<App />
							</Col>
						) : null}
						{/* <Row>
							//{" "}
							<Col className="d-flex justify-content-center">
								// <App />
								//{" "}
							</Col>
							//{" "}
						</Row> */}

						<Col className="d-flex justify-content-center">
							<Button variant="primary" type="submit">
								Hacer Pedido
							</Button>
						</Col>
					</Form>
				</Col>

				<Col xs={3}>
					<Image
						src="http://merakimadrid.com/wp-content/uploads/2020/05/PEDIDO-DOMICILIO-300x300.jpg"
						thumbnail
					/>
					<Card>
						<Card.Body>
							<Card.Title>Tus productos seleccionados:</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">Puede ser en una lista</Card.Subtitle>
							<Card.Text>
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>Producto</th>
											<th>Precio</th>
										</tr>
									</thead>
									<tbody>
										{store.carrito.map((item, i) => {
											return (
												<tr key={i}>
													<td>{item.nombre}</td>
													<td>{item.precio}</td>
												</tr>
											);
										})}
									</tbody>
								</Table>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{orderConf ? <Redirect to="/myOrders" /> : null}
		</Container>
	);
};
