import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { Col, Row, Container } from "react-bootstrap";
export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<Container>
			<Row className="justify-content-md-center">
				<Col sm={{ span: 0, offset: 0 }}>
					<SocialIcon url="https://www.facebook.com/%F0%9D%98%9A%F0%9D%98%B8%F0%9D%98%A6%F0%9D%98%A6%F0%9D%98%B5%F0%9D%98%B4-%F0%9D%98%A3%F0%9D%98%BA-%F0%9D%98%8D%F0%9D%98%B3%F0%9D%98%A2%F0%9D%98%BA-107684427419538" />
				</Col>
				<Col sm={{ span: 0, offset: 0 }}>
					<SocialIcon url="https://www.instagram.com/sweets_by_fray/?hl=es-la" />
				</Col>
				<Col md={{ span: 0, offset: 0 }}>
					<p>
						© 2021, Built By
						<Link to="/">
							<p>CR-PT-1 Group 9</p>
						</Link>
					</p>
				</Col>
				<Col sm={{ span: 0, offset: 0 }}>
					<SocialIcon url="https://wa.me/c/50687064606" />
				</Col>
				<Col sm={{ span: 0, offset: 0 }}>
					<SocialIcon url="mailto:roselynpao@hotmail.com" />
				</Col>
			</Row>
		</Container>
	</footer>
);
