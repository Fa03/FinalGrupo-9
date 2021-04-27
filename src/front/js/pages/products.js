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

	return (
		<Container className="pt-5 mt-5">
			<Row>
				<Col>
					<h3>Mayonesas Keto</h3>
					<CarouselHorizontal />
				</Col>
			</Row>
			<Row>
				<Col>
					<h3>Helados Keto</h3>
					<CarouselHorizontal />
				</Col>
			</Row>
			<Row className="pt-5 mt-5">
				<Col>
					<h3>Queques</h3>
					<CarouselHorizontal />
				</Col>
			</Row>
		</Container>
	);
};
