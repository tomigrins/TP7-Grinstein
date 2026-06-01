import React from 'react';
import './Sugerencia.css';
import Perfiles from '../Perfiles/Index'

const Sugerencia: React.FC = () => {
    return (
        <>
        <section className="perfil">
            <div>
                <img src="" alt="" />
            </div>

            <div>
            <h4>upvox_</h4>
            <h4>Upvox</h4>
            </div>

            <div>
                <h4>Seguir</h4>
            </div>
        </section>

        <section className="sugerencias">
            
            <div>
                <h4>Sugerencias for you</h4>
                <h4>See All</h4>
            </div>
            <Perfiles />
            <Perfiles />
            <Perfiles />
            <Perfiles />
            <Perfiles />
        </section>
        </>
    )}

export default Sugerencia;