import React from 'react';
import './Sugerencia.css';
import Perfiles from '../Perfiles'
import DavoImage from '/wwwroot/imagenes/Davo.jpg';

const Sugerencia: React.FC = () => {
    return (
        <>
        <section className = "sugerencias-comp">
        <section className="perfil-propio">
            <Perfiles />
        </section>

        <section className="sugerencias">
            
            <div>
                <h4>Sugerencias for you</h4>
            </div>
            <Perfiles />
            <Perfiles />
            <Perfiles />
            <Perfiles />
            <Perfiles />
        </section>
        </section>
        </>
    )}

export default Sugerencia;