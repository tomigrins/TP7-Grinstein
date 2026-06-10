import React from 'react';
import Perfiles from '../Perfiles';
import Interacciones from '../Interacciones';
import Comentario from '../Comentario';
import './PubliAmpliada.css';
import DavoPubli from '/wwwroot/imagenes/DavoPubli.jfif'

const PubliAmpliada: React.FC<{ cantLikes: number; setCantLikes: React.Dispatch<React.SetStateAction<number>>; publiAbierta: boolean; setpubliAbierta: React.Dispatch<React.SetStateAction<boolean>> }> = ({ cantLikes, setCantLikes, publiAbierta, setpubliAbierta }) => {
    return (
        <section className="publicacion-ampliada">
            <div className="publicacion-foto">
                <img src={DavoPubli} alt="DavoPubli" />
            </div> 
            <div className="publicacion-informacion">
                <div className="publicacion-creador">
                    <Perfiles />
                    <button onClick={() => setpubliAbierta(false)}>x</button>
                </div>
                <div className="publicacion-comentarios">
                    <Comentario />
                    <Comentario />
                    <Comentario />
                </div>
                <div className= "publicacion-interacciones">
                    <Interacciones cantLikes={cantLikes} setCantLikes={setCantLikes} />
                    <div className = "publicacion-likes">
                        <img src="" alt="" />
                        <p>Liked by <b>FanFelcha10</b> and <b>1.000 others</b></p> 
                        {/* pongo esto: {cantLikes} y no se pone */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PubliAmpliada;