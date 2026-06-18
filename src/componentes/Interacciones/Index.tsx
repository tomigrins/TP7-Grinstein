import React from 'react';
import './Interacciones.css'
import Like from '/wwwroot/imagenes/like.png';
import Compartir from '/wwwroot/imagenes/compartir.png';
import Comentario from '/wwwroot/imagenes/comentario.png';
import Guardar from '/wwwroot/imagenes/guardar.png';
import LikeTrue from '/wwwroot/imagenes/likeTrue.png';

type Props = {
	cantLikes: number;
	setCantLikes: React.Dispatch<React.SetStateAction<number>>;
	liked: boolean;
	setLiked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Interacciones: React.FC<Props> = ({ cantLikes, setCantLikes, liked, setLiked }) => {
	return (
		<div className="interacciones">
			<button onClick={() => {
				setLiked(!liked);
				setCantLikes(prev => liked ? prev - 1 : prev + 1);
			}}>
				{liked ? <img src={LikeTrue} alt="liked" /> : <img src={Like} alt="like"/>}
			</button>
			<button><img src={Comentario} alt="comment" /></button>
			<button><img src={Compartir} alt="share" /></button>
			<button id = "distancia"><img src={Guardar} alt="save" /></button>
		</div>
	)
}

export default Interacciones;