import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Image, Card, Form, Button, Carousel, CardGroup } from "react-bootstrap";
import index from "../../styles/index.scss";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { CarouselHorizontal } from "../component/carouselHorizontal";

export const Products = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	let categProductos = ["Mayonesa Keto", "Helado Keto", "Queque"]; //para remplazar con arreglo de categorias del store

	return (
		<Container fluid className="pt-5 mt-5" style={{ background: "#d8d1d8" }}>
			{categProductos.map((item, i) => {
				//replazar categProductos con el nombre del arreglo de categorias del store
				return (
					<Row key={i}>
						<Col>
							<br />
							<h3 className="ml-5 pl-5 pb-2">{item}</h3>
							<CarouselHorizontal categoria={item} />
						</Col>
					</Row>
				);
			})}
		</Container>
	);
};
