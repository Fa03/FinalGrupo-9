import React, { useState, useContext } from "react";
import { Container, Row, Col, Image, Card, Form, Button, Carousel, CardGroup, ProgressBar } from "react-bootstrap";
import index from "../../styles/index.scss";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const CarouselHorizontal = categoria => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let prodPorCategoria = [];
	let contador = 0;
	let grupo = [];

	store.producto.map((item, indice) => {
		if (item.catego_prod == categoria.categoria) {
			grupo.push(item);
			contador = contador + 1;
			if (contador % 4 == 0) {
				prodPorCategoria.push(grupo);
				grupo = [];
			}
		}
	});

	if (grupo.length > 0) {
		prodPorCategoria.push(grupo);
	}

	return (
		<Container>
			<Row className="pb-5">
				<Col>
					<Carousel fade interval={10000}>
						{prodPorCategoria.map((item, index) => {
							return (
								<Carousel.Item key={index}>
									<CardGroup>
										{item.map((item2, index2) => {
											return (
												<Card key={index2} className="col-3 px-0 mx-2 border-left">
													<Card.Img
														variant="top"
														src={item2.imagen}
														className="img-fluid "
														id="cardImagen"
													/>

													<Card.Body>
														<Card.Title>{item2.nombre}</Card.Title>
														<Card.Text>{item2.detalles}</Card.Text>
													</Card.Body>
													<Card.Footer>
														<small className="text-muted">Last updated 3 mins ago</small>
													</Card.Footer>
												</Card>
											);
										})}
									</CardGroup>
								</Carousel.Item>
							);
						})}
					</Carousel>
				</Col>
			</Row>
		</Container>
	);
};
