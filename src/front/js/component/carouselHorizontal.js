import React, { useState, useContext } from "react";
import { Container, Row, Col, Image, Card, Form, Button, Carousel, CardGroup, CardDeck } from "react-bootstrap";
import index from "../../styles/index.scss";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { RiShoppingBasket2Fill, RiShoppingBasket2Line } from "react-icons/ri";

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
		<Container style={{ background: "#d8d1d8" }}>
			{prodPorCategoria.map((item, index) => {
				return (
					<div className="container horizontal-scrollable" key={index}>
						<div className="row row-horizon flex-nowrap py-3">
							{item.map((item2, index2) => {
								return (
									<CardGroup style={{ width: "18rem", paddingRight: "1rem" }} key={index2}>
										<Card>
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
											<Card.Footer className="d-flex justify-content-between">
												<small className="text-muted">Precio &#162; {item2.precio}</small>
												{/*<Button
															style={{ background: "#c3777b", border: "none" }}
															className="buttonComprar text-clor:red">
															Comprar
														</Button> */}
												{store.favorites.indexOf(item2.nombre) === -1 ? (
													<button
														type="button"
														className="btn btn-outline-danger ml-3"
														onClick={() => actions.setFavorites(item2.nombre)}>
														<RiShoppingBasket2Line />
													</button>
												) : (
													<button
														type="button"
														className="btn btn-outline-danger ml-3"
														onClick={() => actions.deleteFavorite(item2.nombre)}>
														<RiShoppingBasket2Fill />
													</button>
												)}
											</Card.Footer>
										</Card>
									</CardGroup>
								);
							})}
						</div>
					</div>
				);
			})}
		</Container>
	);
};
