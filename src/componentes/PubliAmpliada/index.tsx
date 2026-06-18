import React, { useEffect, useState } from 'react';
import Perfiles from "../Perfiles";
import Interacciones from '../Interacciones';
import Comentario from '../Comentario';
import './PubliAmpliada.css';
import type { Foto } from "../../services/api";

const PubliAmpliada: React.FC<{ Fotos?: Foto[]; cantLikes: number; setCantLikes: React.Dispatch<React.SetStateAction<number>>; publiAbierta?: boolean; setpubliAbierta: React.Dispatch<React.SetStateAction<boolean>>; liked: boolean; setLiked: React.Dispatch<React.SetStateAction<boolean>> }> = ({ Fotos, cantLikes, setCantLikes, publiAbierta, setpubliAbierta, liked, setLiked }) => {
    const [fotoSrc, setFotoSrc] = useState('');

    useEffect(() => {
        if (fotoSrc) return;
        if (!Array.isArray(Fotos) || Fotos.length === 0) return;
        const idx = Math.floor(Math.random() * Fotos.length);
        const item = Fotos[idx];
        setFotoSrc(typeof item === 'string' ? item : item?.url ?? '');
    }, [Fotos, fotoSrc]);

    return (
        <section className="publicacion-ampliada">
            <div className="publicacion-foto">
                <img src={fotoSrc} alt="DavoPubli" />
            </div> 
            <div className="publicacion-informacion">
                <div className="publicacion-creador">
                    <Perfiles Fotos={Fotos} />
                    <button onClick={() => setpubliAbierta(false)}>x</button>
                </div>
                <div className="publicacion-comentarios">
                    <Comentario Fotos ={Fotos}/>
                    <Comentario Fotos ={Fotos}/>
                    <Comentario Fotos ={Fotos}/>
                </div>
                <div className= "publicacion-interacciones">
                    <Interacciones cantLikes={cantLikes} setCantLikes={setCantLikes} liked={liked} setLiked={setLiked} />
                    <div className = "publicacion-likes">
                        <img src="" alt="" />
                        <p>Liked by <b>FanFelcha10</b> and <b>{cantLikes} others</b></p> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PubliAmpliada;