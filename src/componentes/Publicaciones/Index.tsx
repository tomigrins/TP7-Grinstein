import React from 'react'
import Interacciones from '../Interacciones'

const Publicaciones: React.FC = () => {
	return (
		<section className="publicaciones">
			<article className="post">
				<h3>Publicación de ejemplo</h3>
				<p>Contenido de la publicación...</p>
				<Interacciones />
			</article>
		</section>
	)
}

export default Publicaciones;