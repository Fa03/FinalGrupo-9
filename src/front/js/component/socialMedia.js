import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

import { Col, Row, Container } from "react-bootstrap";

export const SocialMedia = () => {
	return (
		<Container>
			<Row className="justify-content-md-center">
				<Col md={{ span: 7, offset: 3 }}>
					<span className="navbar-brand mb-0 h1">Siguenos en nuestras redes sociales:</span>
				</Col>
			</Row>

			<Row className="justify-content-md-center">
				<Col md={{ span: 6, offset: 3 }} style={{ color: "white" }}>
					<SocialIcon url="https://www.facebook.com/" />

					<SocialIcon url="https://www.instagram.com/" />

					<SocialIcon url="https://web.whatsapp.com/" />

					<SocialIcon url="https://www.youtube.com/" />
				</Col>
			</Row>
		</Container>
	);
};
