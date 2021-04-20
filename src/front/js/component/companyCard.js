import React from "react";
import Card from "react-bootstrap/Card";

const CompanyCard = () => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title>¿ Quiénes Somos ?</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">Nuestra Historia</Card.Subtitle>
				<Card.Text>
					<h6>
						<small>
							Panadería Sofía se dedica profesionalmente al sector panadero, bollería y dulces desde
							comienzos del siglo XX. Su historia se remonta a la primera generación, que se dedicaba a la
							elaboración de pan artesano en un horno rudimentario, elaborando el producto para los
							vecinos de la zona. La segunda generación inicia su andadura y es aquí donde surge la
							iniciativa de dedicarse profesionalmente a la fabricación de productos derivados de la
							harina. En 1953 el promotor José Antonio Cortés decide ampliar el negocio y pone en marcha
							un nuevo horno de pan. A principios de los años 60 la sede de la empresa se traslada a
							General Prieto, en el barrio alcoyano de la zona norte donde se instala el primer horno. La
							tercera generación de la familia, inicia a principios de la década de los 90 la expansión
							del negocio y pasa a establecer puntos de venta de sus productos en todos los barrios de la
							ciudad de Alcoy, 10 en la actualidad.
						</small>
					</h6>
				</Card.Text>
				<Card.Link href="#">Conoce más...</Card.Link>
				<Card.Link href="#">Nuestras Redes</Card.Link>
			</Card.Body>
		</Card>
	);
};

export default CompanyCard;
