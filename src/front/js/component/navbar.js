import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Image, Container, Row, Col, Button, Dropdown, Navbar, Nav } from "react-bootstrap";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { FaTrash } from "react-icons/fa";
import index from "../../styles/index.scss";
import { Context } from "../store/appContext";

export const NavBar = () => {
	const { store, actions } = useContext(Context);
	let sessToken = sessionStorage.getItem("token");
	return (
		<Container fluid className="sticky-top position-fixed contNavBar">
			<Row>
				<Col sm={2}>
					<Link to="/">
						<Image
							src="https://bl3301files.storage.live.com/y4mL88PRYo24KzhwyhNBaqkLtgWVsAXvbDAFqA7EjwOjVgZKDkVMaJWI_HKZ-pVLCgPnPaqa9QnvLwzXfLOca01kmGIv44UGXCrAyGInHIOHAHY-ULwvw--5Be7XkBhJlCZstGRA9MblS8bThEudsIai0HyPdl2fuaWPL-jE7si6YXLZNTDiSucyxxLgOMW4_t9?width=85&height=85&cropmode=none"
							rounded
							border
							border-primary
							style={{ border: "5px solid white" }}
						/>
					</Link>
				</Col>
				<Col className="row align-items-center justify-content-center " sm={6}>
					<div className="pl-5">
						<p className="h1 tituloNavBar" style={{ color: "#de1f55" }}>
							Sweets by Fray
						</p>
					</div>
				</Col>

				<Col sm={1} />
				<Col className="row align-items-center" sm={2}>
					{sessToken ? (
						"Esto si está logueado"
					) : (
						<Link to="/login">
							<Button type="button" style={{ background: "#c3777b", border: "none" }}>
								Ingresar / Registrarse
							</Button>
						</Link>
					)}
				</Col>
				<Col className="justify-content-left" sm={1}>
					<Dropdown>
						<Dropdown.Toggle variant="defauld" id="dropdown-basic">
							<StorefrontIcon color="none" style={{ fontSize: 60, color: "white" }} />

							{store.favorites.length}
						</Dropdown.Toggle>

						<Dropdown.Menu alignRight className="dropdown dropdown-align-right">
							{store.favorites.length > 0 ? (
								<ul>
									{store.favorites.map((item, index) => {
										return (
											<li key={index}>
												{item}
												<button className="trash" onClick={() => actions.deleteFavorite(item)}>
													<FaTrash />
												</button>
											</li>
										);
									})}
								</ul>
							) : (
								<p className="listfav">(empy) </p>
							)}
						</Dropdown.Menu>
					</Dropdown>
				</Col>
				{/*---------------------------------------------------------------------------------------------------------------------*/}
			</Row>
		</Container>
	);
};
//coment
