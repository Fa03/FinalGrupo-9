import React from "react";
import { Container, Row, Col, Image, Card, Form, Button } from "react-bootstrap";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const RetrivePass = () => {
	return (
		<Container fluid>
			<Row>
				<Col>
					<Image
						src="https://img.taste.com.au/lmVc1ciM/taste/2018/03/apr-18_apple-blueberry-pie-with-cinnamon-pastry-3000x2000-136232-1.jpg"
						thumbnail
					/>
					<Card style={{ width: "18rem" }}>
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

				<Col>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">{`We'll never share your email with anyone else.`}</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control type="password" placeholder="Confirm Password" />
						</Form.Group>
						{/* <Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group> */}
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
