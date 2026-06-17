import React, { useEffect, useState } from 'react';
import './Historia.css';
import type { Foto } from "../../services/api";

const Historia: React.FC<{ Fotos?: Foto[] }> = ({ Fotos }) => {
    const [fotoSrc, setFotoSrc] = useState('');

    useEffect(() => {
        if (fotoSrc) return;
        if (!Array.isArray(Fotos) || Fotos.length === 0) return;
        const idx = Math.floor(Math.random() * Fotos.length);
        const item = Fotos[idx];
        setFotoSrc(typeof item === 'string' ? item : item?.url ?? '');
    }, [Fotos, fotoSrc]);

    return (
        <>
            <div className = "historia">
                <div>
                <img src={fotoSrc} alt="FotoPerfil" />
                </div>
                <p>AguanteFlecha</p>
            </div>
        </>
    )}

export default Historia;