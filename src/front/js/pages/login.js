import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";

export const Login = () => {
	const [datos, setDatos] = useState({
		email: "",
		password: ""
	});

	const handleInputChange = event => {
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (datos.password == null || datos.email == null) {
			alert("Ingrese su correo y su contraseña");
		} else {
			// console.log(datos);

			// FETCH LOGIN
			var myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			var raw = JSON.stringify(datos);

			var requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			};

			fetch("https://3001-blue-koi-rys0mz5q.ws-us03.gitpod.io/api/login", requestOptions)
				.then(response => response.json())
				.then(data => {
					console.log(data);
					if (typeof Storage !== "undefined") {
						sessionStorage.setItem("token", data.token);
						sessionStorage.setItem("email", data.email);
					}
				})
				.catch(error => console.log("error", error));
		}
	};
	return (
		<Container className="mt-5 pt-5">
			<Row className="pt-5">
				<Col md={{ span: 6, offset: 3 }}>
					<Form onSubmit={handleSubmit}>
						<h2>Iniciar sesión</h2>
						<p>Si ya estas registrado, por favor ingresa tus datos para iniciar sesión</p>
						<Form.Group controlId="formGridCorreo">
							<Form.Label>Correo</Form.Label>
							<Form.Control placeholder="Ingrese el correo" onChange={handleInputChange} name="email" />
						</Form.Group>

						<Form.Group controlId="formBasicContraseña">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control
								type="password"
								placeholder="Ingrese su contraseña"
								onChange={handleInputChange}
								name="password"
							/>
						</Form.Group>

						<Button variant="primary" type="submit">
							Iniciar Sesión
						</Button>
						<Link to="/retrivePass">
							<p>¿Olvidó su contraseña?</p>
						</Link>
					</Form>
				</Col>
				<Col>
					<h2>¿No tienes cuenta?</h2>
					<p>
						Si aún no tienes una cuenta, registrate para poder realizar tus pedidos de una manera más
						sencilla y segura
					</p>
					<div className="ml-auto">
						<Link to="/register">
							<button className="btn btn-primary">Registrarse</button>
						</Link>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
