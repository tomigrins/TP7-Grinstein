import React from 'react';
import './Comentario.css';
import DavoImage from '/wwwroot/imagenes/Davo.jpg';

const Perfiles: React.FC = () => {
    return (
        <section className="perfil">
        <div>
                <img src={DavoImage} alt="FotoPerfil" />
        </div>

            <div>
            <h4>HolaSoyFanFlecha</h4>
            <h4>Que fotaza!</h4>
            </div>
        </section>
    )}

export default Perfiles;