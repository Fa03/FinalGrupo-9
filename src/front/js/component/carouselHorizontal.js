import React, { useState, useContext } from "react";
import { Container, Row, Col, Image, Card, Form, Button, Carousel, CardGroup, ProgressBar } from "react-bootstrap";
import index from "../../styles/index.scss";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartOutlinedIcon from "@material-ui/icons/RemoveShoppingCartOutlined";

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

	const buscarProducto = producto => {
		let encontrado = false;
		store.carrito.map((item, indice) => {
			if (item[0] == producto) encontrado = true;
		});
		return encontrado;
	};

	return (
		<Container style={{ background: "#d8d1d8" }}>
			<Row className="pb-5">
				<Col>
					<Carousel fade interval={9000}>
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
													<Card.Footer className="d-flex justify-content-between align-items-center">
														<small className="text-muted">
															Precio &#162; {item2.precio}
														</small>
														{buscarProducto(item2) ? (
															<Button
																onClick={() => actions.quitarProducto(item2)}
																style={{ background: "#e0a8ab", border: "none" }}
																className="buttonComprar text-clor:red">
																Quitar <RemoveShoppingCartOutlinedIcon />
															</Button>
														) : (
															<Button
																onClick={() => actions.setCarrito(item2, 1)}
																style={{ background: "#c3777b", border: "none" }}
																className="buttonComprar text-clor:red">
																Agregar <AddShoppingCartIcon />
															</Button>
														)}
														{/* {console.log(store.carrito)} */}
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
