import React from 'react';
import './Sugerencia.css';
import Perfiles from "../Perfiles";
import type { Foto } from "../../services/api";

const Sugerencia: React.FC<{ Fotos?: Foto[] }> = ({ Fotos }) => {
    return (
        <>
        <section className = "sugerencias-comp">
        <section className="perfil-propio">
            <Perfiles Fotos={Fotos} />
        </section>

        <section className="sugerencias">
            
            <div>
                <h4>Sugerencias for you</h4>
            </div>
            <Perfiles Fotos={Fotos} />
            <Perfiles Fotos={Fotos} />
            <Perfiles Fotos={Fotos} />
            <Perfiles Fotos={Fotos} />
            <Perfiles Fotos={Fotos} />
        </section>
        </section>
        </>
    )}

export default Sugerencia;