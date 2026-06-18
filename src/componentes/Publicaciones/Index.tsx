import React, { useEffect, useState } from 'react';
import Interacciones from '../Interacciones';
import './Publicaciones.css';
import type { Foto } from "../../services/api";

const Publicaciones: React.FC<{ Fotos?: Foto[]; cantLikes: number; setCantLikes: React.Dispatch<React.SetStateAction<number>>; publiAbierta: boolean; setpubliAbierta: React.Dispatch<React.SetStateAction<boolean>>; liked: boolean; setLiked: React.Dispatch<React.SetStateAction<boolean>> }> = ({ Fotos, cantLikes, setCantLikes, publiAbierta, setpubliAbierta, liked, setLiked }) => {
	const [fotoSrc, setFotoSrc] = useState('');

	useEffect(() => {
		if (fotoSrc) return;
		if (!Array.isArray(Fotos) || Fotos.length === 0) return;
		const idx = Math.floor(Math.random() * Fotos.length);
		const item = Fotos[idx];
		setFotoSrc(typeof item === 'string' ? item : item?.url ?? '');
	}, [Fotos, fotoSrc]);

	return (
		<section className="publicaciones">
			<div className="publicacion-encabezado">
				<img src={fotoSrc} alt="Davo" />
				<p>FanFelcha10</p>
				<p>5h</p>
			</div>
			<div className="publicacion-imagen">
				<button onClick={() => {
					  console.log("click");
					setpubliAbierta(true);
				}}>
				<img src={fotoSrc} alt="Davo" />
				</button>
			</div>
			<Interacciones cantLikes={cantLikes} setCantLikes={setCantLikes} liked={liked} setLiked={setLiked} />
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