import React from 'react';
import './Sugerencia.css';
import Perfiles from '../Perfiles'
const DavoImage = 'https://cataas.com/cat?width=64&height=64'

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