import React from 'react';
import './Perfiles.css';
import type { Foto } from "../../services/api";

const Perfiles: React.FC<{ Fotos?: Foto[] }> = ({ Fotos }) => {
    const fotoSrc = React.useMemo(() => {
        if (!Array.isArray(Fotos) || Fotos.length === 0) return '';
        const idx = Math.floor(Math.random() * Fotos.length);
        const item = Fotos[idx];
        return typeof item === 'string' ? item : item?.url ?? '';
    }, [Fotos]);

    return (
        <section className="perfil">
        <div>
            <img src={fotoSrc} alt="FotoPerfil" />
        </div>

            <div>
            <h4>HolaSoyFanFlecha</h4>
            <h4>Follows you</h4>
            </div>
        </section>
    )}

export default Perfiles;