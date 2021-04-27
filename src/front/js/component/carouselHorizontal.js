import React, { useState, useContext } from "react";
import { Container, Row, Col, Image, Card, Form, Button, Carousel, CardGroup } from "react-bootstrap";
import index from "../../styles/index.scss";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const CarouselHorizontal = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<Container>
			<Row className="pb-5">
				<Col>
					<Carousel fade interval={10000}>
						<Carousel.Item>
							<CardGroup>
								<Card>
									<Card.Img variant="top" src={store.producto[0].imagen} />
									<Card.Body>
										<Card.Title>Card title 1</Card.Title>
										<Card.Text>
											This is a wider card with supporting text below as a natural lead-in to
											additional content. This content is a little bit longer.
										</Card.Text>
									</Card.Body>
									{/* <Card.Footer>
										<small className="text-muted">Last updated 3 mins ago</small>
									</Card.Footer> */}
								</Card>
								<Card>
									<Card.Img variant="top" src={store.producto[1].imagen} />
									<Card.Body>
										<Card.Title>Card title2</Card.Title>
										<Card.Text>
											This card has supporting text below as a natural lead-in to additional
											content.{" "}
										</Card.Text>
									</Card.Body>
									{/* <Card.Footer>
										<small className="text-muted">Last updated 3 mins ago</small>
									</Card.Footer> */}
								</Card>
								<Card>
									<Card.Img variant="top" src="holder.js/100px160" />
									<Card.Body>
										<Card.Title>Card title3</Card.Title>
										<Card.Text>
											This is a wider card with supporting text below as a natural lead-in to
											additional content. This card has even longer content than the first to show
											that equal height action.
										</Card.Text>
									</Card.Body>
									{/* <Card.Footer>
										<small className="text-muted">Last updated 3 mins ago</small>
									</Card.Footer> */}
								</Card>
								<Card>
									<Card.Img variant="top" src="holder.js/100px160" />
									<Card.Body>
										<Card.Title>Card PRUEBA 4</Card.Title>
										<Card.Text>
											This is a wider card with supporting text below as a natural lead-in to
											additional content. This card has even longer content than the first to show
											that equal height action.
										</Card.Text>
									</Card.Body>
									{/* <Card.Footer>
										<small className="text-muted">Last updated 3 mins ago</small>
									</Card.Footer> */}
								</Card>
							</CardGroup>
						</Carousel.Item>
						<Carousel.Item>
							<CardGroup>
								<Card>
									<Card.Img variant="top" src="holder.js/100px160" />
									<Card.Body>
										<Card.Title>Card title3</Card.Title>
										<Card.Text>
											This is a wider card with supporting text below as a natural lead-in to
											additional content. This card has even longer content than the first to show
											that equal height action.
										</Card.Text>
									</Card.Body>
									{/* <Card.Footer>
										<small className="text-muted">Last updated 3 mins ago</small>
									</Card.Footer> */}
								</Card>
								<Card>
									<Card.Img variant="top" src="holder.js/100px160" />
									<Card.Body>
										<Card.Title>Card title4</Card.Title>
										<Card.Text>
											This is a wider card with supporting text below as a natural lead-in to
											additional content. This content is a little bit longer.
										</Card.Text>
									</Card.Body>
									{/* <Card.Footer>
										<small className="text-muted">Last updated 3 mins ago</small>
									</Card.Footer> */}
								</Card>
								<Card>
									<Card.Img variant="top" src="holder.js/100px160" />
									<Card.Body>
										<Card.Title>Card title5</Card.Title>
										<Card.Text>
											This card has supporting text below as a natural lead-in to additional
											content.{" "}
										</Card.Text>
									</Card.Body>
									{/* <Card.Footer>
										<small className="text-muted">Last updated 3 mins ago</small>
									</Card.Footer> */}
								</Card>
								<Card>
									<Card.Img variant="top" src="holder.js/100px160" />
									<Card.Body>
										<Card.Title>Card title6</Card.Title>
										<Card.Text>
											This is a wider card with supporting text below as a natural lead-in to
											additional content. This card has even longer content than the first to show
											that equal height action.
										</Card.Text>
									</Card.Body>
									{/* <Card.Footer>
										<small className="text-muted">Last updated 3 mins ago</small>
									</Card.Footer> */}
								</Card>
							</CardGroup>
						</Carousel.Item>
						<Carousel.Item>
							<CardGroup>
								<Card>
									<Card.Img variant="top" src="holder.js/100px160" />
									<Card.Body>
										<Card.Title>Card title3</Card.Title>
										<Card.Text>
											This is a wider card with supporting text below as a natural lead-in to
											additional content. This card has even longer content than the first to show
											that equal height action.
										</Card.Text>
									</Card.Body>
									{/* <Card.Footer>
										<small className="text-muted">Last updated 3 mins ago</small>
									</Card.Footer> */}
								</Card>
								<Card>
									<Card.Img variant="top" src="holder.js/100px160" />
									<Card.Body>
										<Card.Title>Card title7</Card.Title>
										<Card.Text>
											This is a wider card with supporting text below as a natural lead-in to
											additional content. This content is a little bit longer.
										</Card.Text>
									</Card.Body>
									{/* <Card.Footer>
										<small className="text-muted">Last updated 3 mins ago</small>
									</Card.Footer> */}
								</Card>
								<Card>
									<Card.Img variant="top" src="holder.js/100px160" />
									<Card.Body>
										<Card.Title>Card title8</Card.Title>
										<Card.Text>
											This card has supporting text below as a natural lead-in to additional
											content.{" "}
										</Card.Text>
									</Card.Body>
									{/* <Card.Footer>
										<small className="text-muted">Last updated 3 mins ago</small>
									</Card.Footer> */}
								</Card>
								<Card>
									<Card.Img variant="top" src="holder.js/100px160" />
									<Card.Body>
										<Card.Title>Card title9</Card.Title>
										<Card.Text>
											This is a wider card with supporting text below as a natural lead-in to
											additional content. This card has even longer content than the first to show
											that equal height action.
										</Card.Text>
									</Card.Body>
									{/* <Card.Footer>
										<small className="text-muted">Last updated 3 mins ago</small>
									</Card.Footer> */}
								</Card>
							</CardGroup>
						</Carousel.Item>
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
};
