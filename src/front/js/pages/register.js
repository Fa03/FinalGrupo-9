import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";
import { DataPicker } from "../component/dataPicker";
import { SocialMedia } from "../component/modalTerms";
import "react-datepicker/dist/react-datepicker.css";

export const Register = () => {
	return (
		<Container>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Form>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridNombre">
								<Form.Label>Nombre*</Form.Label>
								<Form.Control type="name" placeholder="Ingrese el nombre" />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridApellidos">
								<Form.Label>Apellidos*</Form.Label>
								<Form.Control type="apellidos" placeholder="Ingrese los apellidos" />
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridNacimiento">
								<Form.Label>Fecha de nacimiento*</Form.Label>
								<DataPicker />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridSexo">
								<Form.Label>Sexo</Form.Label>
								<Form.Control as="select" defaultValue="Elegir...">
									<option>Elegir...</option>
									<option>Masculino</option>
									<option>Femenino</option>
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridCelular">
								<Form.Label>Celular</Form.Label>
								<Form.Control />
							</Form.Group>
						</Form.Row>

						<Form.Group controlId="formGridCorreo">
							<Form.Label>Correo*</Form.Label>
							<Form.Control placeholder="Ingrese el correo" />
						</Form.Group>

						<Form.Group controlId="formBasicContraseña">
							<Form.Label>Contraseña*</Form.Label>
							<Form.Control type="password" placeholder="Ingrese una contraseña" />
						</Form.Group>
						<Form.Group controlId="formBasicContraseña1">
							<Form.Label>Confirmar contraseña*</Form.Label>
							<Form.Control type="password" placeholder="Confirmar contraseña" />
						</Form.Group>

						<SocialMedia />
						<Button variant="primary" type="submit">
							Registrarse
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
