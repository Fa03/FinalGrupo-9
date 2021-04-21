import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/login">
					<button className="btn btn-primary">Ingresar / Registrarse</button>
				</Link>
			</div>
		</nav>
	);
};

// quitar el to="/retrivePass"> de linea 7
