import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Image, Container, Row, Col, Button, Badge } from "react-bootstrap";
import index from "../../styles/index.scss";
import { Context } from "../store/appContext";

export const ModalCarrito = event => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<button type="button" className="btn" data-toggle="modal" data-target="#myModal2">
				Abrir
			</button>
			<div className="modal right fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel2">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<h4 className="modal-title" id="myModalLabel2">
								Right Sidebar
							</h4>
						</div>

						<div className="modal-body">
							<p>
								{`Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
							squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa
							nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
							single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
							beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
							lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
							probably haven't heard of them accusamus labore sustainable VHS.`}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
