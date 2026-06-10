import React from 'react';
import Interacciones from '../Interacciones';
import './Publicaciones.css';
const DavoImage = 'https://cataas.com/cat?width=64&height=64'
const DavoPubli = 'https://cataas.com/cat?width=800&height=800'
import PubliAmpliada from '../PubliAmpliada';	

const Publicaciones: React.FC<{ cantLikes: number; setCantLikes: React.Dispatch<React.SetStateAction<number>>; publiAbierta: boolean; setpubliAbierta: React.Dispatch<React.SetStateAction<boolean>> }> = ({ cantLikes, setCantLikes, publiAbierta, setpubliAbierta }) => {
	return (
		<section className="publicaciones">
			<div className="publicacion-encabezado">
				<img src={DavoImage} alt="Davo" />
				<p>FanFelcha10</p>
				<p>5h</p>
			</div>
			<div className="publicacion-imagen">
				<button onClick={() => {
					  console.log("click");
					setpubliAbierta(true);
				}}>
				<img src={DavoPubli} alt="Davo" />
				</button>
			</div>
			<Interacciones cantLikes={cantLikes} setCantLikes={setCantLikes} />
			<div className = "publicacion-descripcion">
				<div><p>{cantLikes} likes</p></div>
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