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
	const [cart, setCart] = useState("");
	const [datos, setDatos] = useState({
		usuario: "",
		metodo: "",
		productos: "Pastel cumpleaños, Mayonesa Keto Chipotle",
		monto: "",
		dirección: ""
	});

	useEffect(() => {
		const userData = JSON.parse(sessionStorage.getItem("user"));
		userData ? setMyUser(userData) : null;
		store.carrito ? setCart(store.carrito) : null;
	}, []);

	// CALCULO MONTO TOTAL y SET DATOS MONTO Y PRODUCTOS
	const cartInfo = () => {
		let monto1 = 0;
		let prods = [];
		for (let i = 0; i < cart.length; i++) {
			monto1 += cart[i][0].precio * cart[i][1];
			prods.push(cart[i][0].nombre);
		}
		// setDatos({
		// 	...datos,
		// 	monto: monto1,
		// 	productos: prods
		// });
		return monto1;
	};

	// INPUT CHAGE Y LLENAR DATOS
	const handleInputChange = event => {
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		});
	};

	// CREAR LA ORDEN
	const handleSubmit = e => {
		e.preventDefault();
		if (datos.usuario == null) {
			alert("Por favor confirme su correo.");
		} else if (datos.usuario !== myUser.email) {
			alert("Favor ingrese el mismo correo con el que creó su cuenta");
		} else if (datos.dirección == "") {
			alert("Favor ingrese la dirección de entrega.");
		} else if (datos.metodo == "") {
			alert("Seleccione un método de pago");
		} else if (datos.monto == "") {
			alert("No tiene productos seleccionados para hacer el pedido.");
		} else if (datos.productos == "") {
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

			fetch("https://3001-blue-koi-rys0mz5q.ws-us03.gitpod.io/api/newOrder", requestOptions)
				.then(response => {
					response.status === 200
						? setTimeout(() => {
								setOrderConf(true);
						  }, 2000)
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

	return (
		<Container fluid className="my-5 pt-5" style={{ background: "#d8d1d8" }}>
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
											<th>Cantidad</th>
										</tr>
									</thead>
									<tbody>
										{store.carrito.map((item, i) => {
											return (
												<tr key={i}>
													<td>{item[0].nombre}</td>
													<td>{item[0].precio * item[1]}</td>
													<td>{item[1]}</td>
												</tr>
											);
										})}
									</tbody>
								</Table>
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small>
								Monto de la compra: <b>¢{cartInfo()}</b>
							</small>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
			{orderConf ? <Redirect to="/myOrders" /> : null}
		</Container>
	);
};
