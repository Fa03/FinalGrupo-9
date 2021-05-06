import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";
import { DataPicker } from "../component/dataPicker";
import { SocialMedia } from "../component/modalTerms";
import "react-datepicker/dist/react-datepicker.css";

export const Register = () => {
	const { store, actions } = useContext(Context);

	const [confReg, setConfReg] = useState(false);

	const [datos, setDatos] = useState({
		nombre: "",
		apellidos: "",
		nacimiento: "",
		sexo: "",
		telefono: "",
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
			console.log(datos);

			let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			var raw = JSON.stringify(datos);

			fetch("https://proyectosweetsbyfray.herokuapp.com/api/register", {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			})
				.then(
					response =>
						response.status === 200
							? setTimeout(() => {
									setConfReg(true);
							  }, 3000)
							: null
				)

				// .then(result => console.log(result), setConfReg())
				.catch(error => console.log("error", error));
		}
	};

	return (
		<Container className="mt-5 pt-5">
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Form onSubmit={handleSubmit}>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridNombre" onChange={handleInputChange}>
								<Form.Label>Nombre*</Form.Label>
								<Form.Control type="name" placeholder="Ingrese el nombre" name="nombre" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridApellidos" onChange={handleInputChange}>
								<Form.Label>Apellidos*</Form.Label>
								<Form.Control type="apellidos" placeholder="Ingrese los apellidos" name="apellidos" />
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridNacimiento">
								<Form.Label name="nacimiento">Fecha de nacimiento*</Form.Label>
								<DataPicker onChange={handleInputChange} />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridSexo" onChange={handleInputChange}>
								<Form.Label>Sexo</Form.Label>
								<Form.Control as="select" defaultValue="Elegir..." name="sexo">
									<option>Elegir...</option>
									<option>Masculino</option>
									<option>Femenino</option>
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridCelular" onChange={handleInputChange}>
								<Form.Label>Teléfono</Form.Label>
								<Form.Control name="telefono" />
							</Form.Group>
						</Form.Row>

						<Form.Group controlId="formGridCorreo" onChange={handleInputChange}>
							<Form.Label>Correo*</Form.Label>
							<Form.Control placeholder="Ingrese el correo" name="email" />
						</Form.Group>

						<Form.Group controlId="formBasicContraseña" onChange={handleInputChange}>
							<Form.Label>Contraseña*</Form.Label>
							<Form.Control type="password" placeholder="Ingrese una contraseña" name="password" />
						</Form.Group>
						<Form.Group controlId="formBasicContraseña1" onChange={handleInputChange}>
							<Form.Label>Confirmar contraseña*</Form.Label>
							<Form.Control type="password" placeholder="Confirmar contraseña" name="confPassword" />
						</Form.Group>

						<Button variant="primary" type="submit" onClick={handleSubmit}>
							Registrarse
						</Button>
					</Form>
				</Col>
			</Row>
			{confReg ? <Redirect to="/login" /> : null}
		</Container>
	);
};
