import React from 'react';
import './Historia.css';
import DavoImage from '/wwwroot/imagenes/Davo.jpg';

const Historia: React.FC = () => {
    return (
        <>
            <div className = "historia">
                <div>
                <img src={DavoImage} alt="FotoPerfil" />
                </div>
                <p>AguanteFlecha</p>
            </div>
        </>
    )}

export default Historia;