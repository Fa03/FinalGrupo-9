import React from "react";
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const RetrivePass = () => {
	return (
		<Container className="my-5 ">
			<Row className="d-flex align-items-center justify-content-around">
				<Col xs={4}>
					<Image
						src="https://img.taste.com.au/lmVc1ciM/taste/2018/03/apr-18_apple-blueberry-pie-with-cinnamon-pastry-3000x2000-136232-1.jpg"
						thumbnail
					/>
					<Card>
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
					</Card>
				</Col>

				<Col xs={4}>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Correo Electrónico</Form.Label>
							<Form.Control type="email" placeholder="Tu Correo" />
							<Form.Text className="text-muted">{`Tu información estará segura con nosotros`}</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control type="password" placeholder="Nueva Contraseña" />
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Confirmar Contraseña</Form.Label>
							<Form.Control type="password" placeholder="Confirma Contraseña" />
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
		</Container>
	);
};
