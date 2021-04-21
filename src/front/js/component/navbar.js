import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import ShoppingCartOutlinedICon from "@material-ui/icons/ShoppingCartOutlined";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/login">
					<button className="btn btn-primary">Ingresar / Registrarse</button>
				</Link>
			</div>
			<div>
				<Link to="/order">
					<ShoppingCartOutlinedICon className="pl-2" fontSize="large" />
				</Link>
			</div>
		</nav>
	);
};

// quitar el to="/retrivePass"> de linea 7
