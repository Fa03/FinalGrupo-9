import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";

export const Login = () => {
	return (
		<Container>
			<Row className="pt-5">
				<Col md={{ span: 6, offset: 3 }}>
					<Form>
						<h2>Iniciar sesión</h2>
						<p>Si ya estas registrado, por favor ingresa tus datos para iniciar sesión</p>
						<Form.Group controlId="formGridCorreo">
							<Form.Label>Correo</Form.Label>
							<Form.Control placeholder="Ingrese el correo" />
						</Form.Group>

						<Form.Group controlId="formBasicContraseña">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control type="password" placeholder="Ingrese su contraseña" />
						</Form.Group>

						<div className="ml-auto">
							<button className="btn btn-primary">Iniciar sesión</button>
						</div>
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
