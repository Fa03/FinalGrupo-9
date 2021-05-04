import React from "react";
import { Link } from "react-router-dom";
import { Image, Container, Row, Col } from "react-bootstrap";
import ShoppingCartOutlinedICon from "@material-ui/icons/ShoppingCartOutlined";
import index from "../../styles/index.scss";

export const Navbar = () => {
	return (
		<Container fluid className="sticky-top position-fixed contNavBar">
			<Row>
				<Col>
					<nav className="navbar navbar-light bg-light mb-3">
						<Link to="/">
							<Image
								src="https://bl3301files.storage.live.com/y4mL88PRYo24KzhwyhNBaqkLtgWVsAXvbDAFqA7EjwOjVgZKDkVMaJWI_HKZ-pVLCgPnPaqa9QnvLwzXfLOca01kmGIv44UGXCrAyGInHIOHAHY-ULwvw--5Be7XkBhJlCZstGRA9MblS8bThEudsIai0HyPdl2fuaWPL-jE7si6YXLZNTDiSucyxxLgOMW4_t9?width=85&height=85&cropmode=none"
								rounded
								border
								border-primary
							/>
						</Link>
						<div className="ml-auto">
							<Link to="/login">
								<button className="btn btn-secondary">Ingresar / Registrarse</button>
							</Link>
						</div>
						<div>
							<Link to="/order">
								<ShoppingCartOutlinedICon className="pl-2" fontSize="large" color="#5D6D7E" />
							</Link>
						</div>
					</nav>
				</Col>
			</Row>
		</Container>
	);
};
//coment
