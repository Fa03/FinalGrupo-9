import React from "react";
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const Order = () => {
	return (
		<Container className="my-5 pt-5">
			<Row className="d-flex align-items-center justify-content-around">
				<Col xs={4}>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Correo Electrónico</Form.Label>
							<Form.Control type="email" placeholder="Tu Correo" />
							<Form.Text className="text-muted">{`Tu información estará segura con nosotros`}</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Forma de Pago</Form.Label>
							<Form.Control type="password" placeholder="Tarjeta/SINPE" />
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control type="password" placeholder="Contraseña" />
						</Form.Group>
						{/* <Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group> */}
						<Row>
							<Col className="d-flex justify-content-center">
								<Button
									variant="primary"
									type="submit"
									style={{ background: "#c3777b", border: "none" }}>
									Hacer Pedido
								</Button>
							</Col>
						</Row>
					</Form>
				</Col>

				<Col xs={3}>
					<Image
						src="http://merakimadrid.com/wp-content/uploads/2020/05/PEDIDO-DOMICILIO-300x300.jpg"
						thumbnail
					/>
					<Card>
						<Card.Body>
							<Card.Title>Aqui Listado de productos seleccionados</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">Puede ser en una lista</Card.Subtitle>
							<Card.Text>
								{`Some quick example text to build on the card title and make up the bulk of the card's
								content.`}
							</Card.Text>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
