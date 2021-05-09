import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Image, Container, Row, Col, Button, Badge } from "react-bootstrap";
import index from "../../styles/index.scss";
import { Context } from "../store/appContext";
import { InputCantidad } from "./inputCantidad";

export const ModalCarrito = event => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Row>
				{store.carrito.map((item, index) => {
					return (
						<Row className="d-flex align-items-center" key={index}>
							<Col className="col-3">
								<Image className="imgLista" src={item.imagen} />
							</Col>
							<Col>
								<p>{item.nombre}</p>
								<small>
									<p>Precio &#162; {item.precio}</p>
									<InputCantidad />
								</small>
							</Col>
						</Row>
					);
				})}
			</Row>
			<Row>
				<Col>
					<p>Total Suma</p>
				</Col>
			</Row>
		</Container>
	);
};
