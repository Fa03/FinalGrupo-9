import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { Col, Row, Container } from "react-bootstrap";
import index from "../../styles/index.scss";

export const Footer = () => (
	<footer className="footer mt-auto pt-1 mb-0 text-center footerCSS">
		<Container fluid className="table-secundary">
			<br />
			<Row className="d-flex justify-content-center">
				<Col fontSize="small">
					<span className="pr-1">
						<SocialIcon
							url="https://www.facebook.com/%F0%9D%98%9A%F0%9D%98%B8%F0%9D%98%A6%F0%9D%98%A6%F0%9D%98%B5%F0%9D%98%B4-%F0%9D%98%A3%F0%9D%98%BA-%F0%9D%98%8D%F0%9D%98%B3%F0%9D%98%A2%F0%9D%98%BA-107684427419538"
							target="_blank"
							style={{ height: 35, width: 35 }}
						/>
					</span>

					<span className="pr-1 ">
						<SocialIcon
							url="https://www.instagram.com/sweets_by_fray/?hl=es-la"
							target="_blank"
							style={{ height: 35, width: 35 }}
						/>
					</span>

					<span className="pr-1">
						<SocialIcon
							url="https://wa.me/c/50687064606"
							target="_blank"
							style={{ height: 35, width: 35 }}
						/>
					</span>

					<span>
						<SocialIcon url="mailto:roselynpao@hotmail.com" style={{ height: 35, width: 35 }} />
					</span>
				</Col>
			</Row>

			<Row className="pt-1">
				<Col md={{ span: 0, offset: 0 }}>
					<p className="small">
						© 2021, Built By
						<Link to="/">
							<p color="white">CR-PT-1 Group 9</p>
						</Link>
					</p>
				</Col>
			</Row>
		</Container>
	</footer>
);
