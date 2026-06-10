import React, { useState } from 'react';
import './Interacciones.css'
import Like from '/wwwroot/imagenes/like.png';
import Compartir from '/wwwroot/imagenes/compartir.png';
import Comentario from '/wwwroot/imagenes/comentario.png';
import Guardar from '/wwwroot/imagenes/guardar.png';
import LikeTrue from '/wwwroot/imagenes/likeTrue.png';

const Interacciones: React.FC<{ cantLikes: number; setCantLikes: React.Dispatch<React.SetStateAction<number>> }> = ({ cantLikes, setCantLikes }) => {
	const [like, setLike] = useState(false);
	return (
		<div className="interacciones">
			<button onClick={() => {
				setLike(!like);
				setCantLikes(prev => like ? prev - 1 : prev + 1);
			}}>
				{like ? <img src={LikeTrue} alt="liked" /> : <img src={Like} alt="like"/>}
			</button>
			<button><img src={Comentario} alt="comment" /></button>
			<button><img src={Compartir} alt="share" /></button>
			<button id = "distancia"><img src={Guardar} alt="save" /></button>
		</div>
	)
}

export default Interacciones;