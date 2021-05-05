import React from "react";
import Card from "react-bootstrap/Card";
import index from "../../styles/index.scss";

const CompanyCard = () => {
	return (
		<Card style={{ width: "18rem", border: "5px solid white" }} className="ml-5">
			<Card.Body style={{ background: "#d8d1d8" }}>
				<Card.Title className="cardTitle">¿ Qué nos apasiona ?</Card.Title>
				{/* <Card.Subtitle className="mb-2 text-muted">Nuestra Historia</Card.Subtitle> */}
				<Card.Text>
					<h6>
						<small className="textHistoria">
							{`Amamos los queques, postres, todo lo que la repostería ofrece que cuando la comes te da
							placer y felicidad. La fama de Fray es muy comentada por sus creaciones y sabores únicos por
							eso creamos "Sweets by Fray" para compratir está dulzura con todos.`}
						</small>
					</h6>
				</Card.Text>
				{/* <Card.Link href="#">Conoce más...</Card.Link>
				<Card.Link href="#">Nuestras Redes</Card.Link> */}
			</Card.Body>
		</Card>
	);
};

export default CompanyCard;
