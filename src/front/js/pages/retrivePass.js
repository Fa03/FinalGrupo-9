import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const RetrivePass = () => {
	const [newPass, setNewPass] = useState(false);

	const [datos, setDatos] = useState({
		email: "",
		password: "",
		confPassword: ""
	});

	const handleInputChange = event => {
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (datos.password !== datos.confPassword) {
			// console.log(datos.password, datos.confPassword);
			alert("Las contraseñas deben coincidir.");
		} else {
			// console.log(datos);

			var myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			var raw = JSON.stringify(datos);

			var requestOptions = {
				method: "PUT",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			};

			fetch("https://3001-blue-koi-rys0mz5q.ws-us04.gitpod.io/api/new_pass", {
				method: "PUT",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			})
				.then(
					response =>
						response.status === 200
							? setTimeout(() => {
									setNewPass(true);
							  }, 2000)
							: null
				)
				// .then(result => console.log(result))
				.catch(error => console.log("error", error));
		}
	};
	return (
		<Container className="my-5 pt-5 d-flex">
			<Row className="d-flex align-items-center justify-content-around">
				<Col xs={4}>
					<Image
						src="https://img.taste.com.au/lmVc1ciM/taste/2018/03/apr-18_apple-blueberry-pie-with-cinnamon-pastry-3000x2000-136232-1.jpg"
						thumbnail
					/>
					{/* 	<Card>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
							<Card.Text>
								{`Some quick example text to build on the card title and make up the bulk of the card's
								content.`}
							</Card.Text>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card> */}
				</Col>

				<Col xs={4}>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formBasicEmail" onChange={handleInputChange}>
							<Form.Label>Correo Electrónico</Form.Label>
							<Form.Control type="email" placeholder="Tu Correo" name="email" />
							<Form.Text className="text-muted">{`Tu información estará segura con nosotros`}</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword" onChange={handleInputChange}>
							<Form.Label>Contraseña</Form.Label>
							<Form.Control type="password" placeholder="Nueva Contraseña" name="password" />
						</Form.Group>
						<Form.Group controlId="formBasicPassword" onChange={handleInputChange}>
							<Form.Label>Confirmar Contraseña</Form.Label>
							<Form.Control type="password" placeholder="Confirma Contraseña" name="confPassword" />
						</Form.Group>
						{/* <Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group> */}
						<Row>
							<Col className="d-flex justify-content-center">
								<Button variant="primary" type="submit">
									Enviar
								</Button>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
			{newPass ? <Redirect to="/login" /> : null}
		</Container>
	);
};
