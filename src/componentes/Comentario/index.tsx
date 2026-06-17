import React, { useEffect, useState } from 'react';
import './Comentario.css';
import type { Foto } from "../../services/api";

const Comentario: React.FC<{ Fotos?: Foto[] }> = ({ Fotos }) => {
    const [fotoSrc, setFotoSrc] = useState('');

    useEffect(() => {
        if (fotoSrc) return;
        if (!Array.isArray(Fotos) || Fotos.length === 0) return;
        const idx = Math.floor(Math.random() * Fotos.length);
        const item = Fotos[idx];
        setFotoSrc(typeof item === 'string' ? item : item?.url ?? '');
    }, [Fotos, fotoSrc]);

    return (
        <section className="comentario">
        <div>
            <img src={fotoSrc} alt="FotoPerfil" />
        </div>

            <div>
            <h4>HolaSoyFanFlecha</h4>
            <h4>Que fotaza!</h4>
            </div>
        </section>
    )}

export default Comentario;