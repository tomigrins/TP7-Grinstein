import React from 'react';
import Perfiles from '../Perfiles';
import Interacciones from '../Interacciones';
import Comentario from '../Comentario';
import './PubliAmpliada.css';
import DavoPubli from '/wwwroot/imagenes/DavoPubli.jfif'

const Publicaciones: React.FC = () => {
    return (
        <section className="publicacion-ampliada">
            <div className="publicacion-foto">
                <img src={DavoPubli} alt="DavoPubli" />
            </div> 
            <div className="publicacion-informacion">
                <div className="publicacion-creador">
                    <Perfiles />
                </div>
                <div className="publicacion-comentarios">
                    <Comentario />
                </div>
                <div className= "publicacion-interacciones">
                    <Interacciones />
                    <div className = "publicacion-likes">
                        <img src="" alt="" />
                        <p>Liked by <b>FanFelcha10</b> and <b>1.000 others</b></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Publicaciones;