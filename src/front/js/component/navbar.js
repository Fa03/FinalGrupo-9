import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Image, Container, Row, Col, Button, Badge, Modal, Alert } from "react-bootstrap";
import StorefrontIcon from "@material-ui/icons/Storefront";
import index from "../../styles/index.scss";
import { Context } from "../store/appContext";
import { ModalCarrito } from "./modalCarrito";
import { PrecioCompra } from "./precioCompra";
import { cerrarSesion } from "../pages/cierreSesion";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const [showModal, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [showModal2, setShow2] = useState(false);
	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);

	const userData = JSON.parse(sessionStorage.getItem("user"));
	const logout = e => {
		sessionStorage.removeItem("user");
		window.location.reload(false);
	};
	return (
		<Container fluid className="sticky-top position-fixed contNavBar">
			<Row>
				<Col>
					<nav className="navbar d-flex align-items-center">
						<Link to="/" className="pl-4">
							<Image
								src="https://bl3301files.storage.live.com/y4mL88PRYo24KzhwyhNBaqkLtgWVsAXvbDAFqA7EjwOjVgZKDkVMaJWI_HKZ-pVLCgPnPaqa9QnvLwzXfLOca01kmGIv44UGXCrAyGInHIOHAHY-ULwvw--5Be7XkBhJlCZstGRA9MblS8bThEudsIai0HyPdl2fuaWPL-jE7si6YXLZNTDiSucyxxLgOMW4_t9?width=85&height=85&cropmode=none"
								rounded
								border
								border-primary
								style={{ border: "5px solid white" }}
							/>
						</Link>
						<div className="ml-5 pl-5 d-none d-md-flex">
							<p className="h1 tituloNavBar" style={{ color: "#de1f55" }}>
								Sweets by Fray
							</p>
						</div>
						<div className="d-flex flex-nowrap align-items-center pr-4">
							{userData ? (
								<div className="d-flex ">
									<Link style={{ color: "white", fontSize: 20, position: "relative" }} to="/myOrders">
										<i className="far fa-user pr-3 silueta" style={{ fontSize: 40 }} />
									</Link>
									<Link to="/cierreSesion">
										<Button
											onClick={logout}
											type="button"
											style={{ background: "#c3777b", border: "none" }}>
											Cerrar Sesión
										</Button>
									</Link>
								</div>
							) : (
								<Link to="/login">
									<Button
										type="button"
										style={{
											background: "#c3777b",
											border: "none",
											position: "inline-block static"
										}}
										className="btn">
										Ingresar / Registrarse
									</Button>
								</Link>
							)}

							<Link
								onClick={store.carrito.length == 0 ? handleShow2 : handleShow}
								style={{ color: "white" }}>
								<StorefrontIcon
									className="pl-1 StoreIcon"
									style={{ fontSize: 60, position: "inline-block" }}
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

					<Modal show={showModal2} onHide={handleClose2} className="modal modalCorto">
						<Modal.Dialog className="border-0" style={{ width: "450px" }}>
							<Modal.Header closeButton className="border-0">
								<Modal.Title>Carrito Vacío</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<small>
									<p style={{ fontSize: "18px" }}>Aún no has agregado productos a tu lista.</p>
								</small>
							</Modal.Body>
							<Modal.Footer>
								<Link to="/products">
									<Button
										variant="secondary"
										onClick={handleClose2}
										style={{ background: "#c3777b", border: "none" }}>
										Ver Productos
									</Button>
								</Link>
							</Modal.Footer>
						</Modal.Dialog>
					</Modal>

					{/* modal orgiginal esta de esta linea para Abajo */}

					<Modal show={showModal} onHide={handleClose} className="modal right fade">
						<Modal.Dialog>
							<Modal.Header closeButton className="modalHeader">
								<Modal.Title style={{ color: "#c3777b" }}>Productos en tu carrito</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<ModalCarrito />
							</Modal.Body>
							<Modal.Footer className="modalFooter">
								<Row>
									<Col style={{ paddingRight: "50px" }}>
										<strong>
											<p style={{ color: "#c3777b" }}>
												Monto de tu compra: &#162;
												<PrecioCompra />
											</p>
										</strong>
									</Col>
								</Row>

								<Row className="my-0 mr-0">
									<Col>
										<Link to="/products">
											<Button
												style={{ border: "none", background: "#afaaab" }}
												onClick={handleClose}>
												Seguir Comprando
											</Button>
										</Link>
										<Link to="/order">
											<Button
												variant="primary"
												onClick={handleClose}
												style={{
													background: "#c3777b",
													border: "none",
													marginLeft: "10px"
												}}>
												Realizar Compra
											</Button>
										</Link>
									</Col>
								</Row>
							</Modal.Footer>
						</Modal.Dialog>
					</Modal>
				</Col>
			</Row>
		</Container>
	);
};
