import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import TextField from "@material-ui/core/TextField";

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

			fetch("https://3001-blue-cheetah-zv0zahkx.ws-us04.gitpod.io/api/new_pass", {
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
		<Container className="mt-3 pt-3 d-flex">
			<Row className="d-flex align-items-center justify-content-around m-5 pt-5">
				<Col xs={4}>
					<Image
						src="https://img.taste.com.au/lmVc1ciM/taste/2018/03/apr-18_apple-blueberry-pie-with-cinnamon-pastry-3000x2000-136232-1.jpg"
						thumbnail
					/>
				</Col>

				<Col xs={4}>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formBasicEmail" onChange={handleInputChange}>
							<Form.Label style={{ color: "#c3777b", fontWeight: "bold" }}>Correo Electrónico</Form.Label>
							{/* <Form.Control type="email" placeholder="Tu Correo" name="email" /> */}
							<TextField
								type="email"
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Tu Correo"
								name="email"
								autoComplete="email"
								autoFocus
								onChange={handleInputChange}
							/>
							<Form.Text className="text-muted">{`Tu información estará segura con nosotros`}</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword" onChange={handleInputChange}>
							<Form.Label style={{ color: "#c3777b", fontWeight: "bold" }}>Contraseña</Form.Label>
							{/* <Form.Control type="password" placeholder="Nueva Contraseña" name="password" /> */}
							<TextField
								type="password"
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="password"
								label="Contraseña"
								name="password"
								autoComplete="password"
								onChange={handleInputChange}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicPassword" onChange={handleInputChange}>
							<Form.Label style={{ color: "#c3777b", fontWeight: "bold" }}>
								Confirmar Contraseña
							</Form.Label>
							{/* <Form.Control type="password" placeholder="Confirma Contraseña" name="confPassword" /> */}
							<TextField
								type="password"
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="confPassword"
								label="Confirma tu Contraseña"
								name="confPassword"
								autoComplete="confPassword"
								onChange={handleInputChange}
							/>
						</Form.Group>
						{/* <Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group> */}
						<Row>
							<Col className="d-flex justify-content-center">
								<Button type="submit" style={{ background: "#c3777b", border: "none" }}>
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
