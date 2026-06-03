import React from 'react';
import Interacciones from '../Interacciones';
import './Publicaciones.css';
import DavoImage from '/wwwroot/imagenes/Davo.jpg'
import DavoPubli from '/wwwroot/imagenes/DavoPubli.jfif'

const Publicaciones: React.FC = () => {
	return (
		<section className="publicaciones">
			<div className="publicacion-encabezado">
				<img src={DavoImage} alt="Davo" />
				<p>FanFelcha10</p>
				<p>5h</p>
			</div>
			<div className="publicacion-imagen">
				<img src={DavoPubli} alt="Davo" />
			</div>
			<Interacciones />
			<div className = "publicacion-descripcion">
				<div><p>100.000 likes</p></div>
				<div className = "publicacion-comentario">
					<p><b>FanFelcha10</b> El mejor programador</p>
					<p><b>See translation</b></p>
				</div>
				<div><p>View all 100 comments</p>
				<p>Add a comment...</p></div>
			</div>
		</section>
	)
}

export default Publicaciones;