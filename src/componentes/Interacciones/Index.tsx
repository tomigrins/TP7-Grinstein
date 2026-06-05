import React from 'react'
import './Interacciones.css'
import Like from '/wwwroot/imagenes/like.png';
import Compartir from '/wwwroot/imagenes/compartir.png';
import Comentario from '/wwwroot/imagenes/comentario.png';
import Guardar from '/wwwroot/imagenes/guardar.png';

const Interacciones: React.FC = () => {
	const [like, setLike] = React.useState(false);
	const [cantLikes, setCantLikes] = React.useState(1000);
	return (
		<div className="interacciones">
			<button onClick={() => {
				setLike(!like);
				setCantLikes(like ? cantLikes - 1 : cantLikes + 1);
			}}>
				<img src={Like} alt="like" />
			</button>
			<button><img src={Comentario} alt="comment" /></button>
			<button><img src={Compartir} alt="share" /></button>
			<button id = "distancia"><img src={Guardar} alt="save" /></button>
		</div>
	)
}

export default Interacciones;
