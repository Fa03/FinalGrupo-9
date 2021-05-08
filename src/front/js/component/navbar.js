import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Image, Container, Row, Col, Button, Badge } from "react-bootstrap";
import StorefrontIcon from "@material-ui/icons/Storefront";
import index from "../../styles/index.scss";
import { Context } from "../store/appContext";
import { ModalCarrito } from "./modalCarrito";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container fluid className="sticky-top position-fixed contNavBar">
			<Row>
				<Col>
					<nav className="navbar d-flex align-items-center">
						<Link to="/">
							<Image
								src="https://bl3301files.storage.live.com/y4mL88PRYo24KzhwyhNBaqkLtgWVsAXvbDAFqA7EjwOjVgZKDkVMaJWI_HKZ-pVLCgPnPaqa9QnvLwzXfLOca01kmGIv44UGXCrAyGInHIOHAHY-ULwvw--5Be7XkBhJlCZstGRA9MblS8bThEudsIai0HyPdl2fuaWPL-jE7si6YXLZNTDiSucyxxLgOMW4_t9?width=85&height=85&cropmode=none"
								rounded
								border
								border-primary
								style={{ border: "5px solid white" }}
							/>
						</Link>
						<div className="ml-5 pl-5">
							<p className="h1 tituloNavBar" style={{ color: "#de1f55" }}>
								Sweets by Fray
							</p>
						</div>
						<div>
							<Link to="/login">
								<Button type="button" style={{ background: "#c3777b", border: "none" }}>
									Ingresar / Registrarse
								</Button>
							</Link>

							{/* <Link onClick={<ModalCarrito />} style={{ color: "white" }}> */}
							{/* <Link onClick={ModalCarrito()} style={{ color: "white" }}> */}
							{/* <Link onClick={alert("OnCLick Funciona")} style={{ color: "white" }}> */}
							<Link style={{ color: "white" }}>
								<StorefrontIcon
									className="pl-1"
									style={{ fontSize: 60, position: "relative" }}
									color="none"
								/>
								{store.carrito.length == 0 ? null : (
									<Badge pill variant="light" className="badgeConteo">
										<strong>{store.carrito.length}</strong>
									</Badge>
								)}
							</Link>
						</div>
					</nav>
				</Col>
			</Row>
		</Container>
	);
};
//coment
