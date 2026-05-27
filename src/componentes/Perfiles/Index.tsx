import React from 'react';
import './Sugerencia.css';
import DavoImage from '../../assets/imagenes/Davo.jpg';

const Perfiles: React.FC = () => {
    return (
        <>
        <div>
                <img src={DavoImage} alt="FotoPerfil" />
            </div>

            <div>
            <h4>HolaSoyFanFlecha</h4>
            <h4>FanesDeFlecha</h4>
            </div>

            <div>
                <h4>Follow</h4>
            </div>
        </>
    )}

export default Perfiles;