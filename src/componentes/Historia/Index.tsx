import React from 'react';
import './Historia.css';

const Historia: React.FC<{ Fotos: any[] }> = ({ Fotos }) => {
    
    useEffect(() => {
        const fotoPubli = Math.floor(Math.random() * Fotos.length);
    }, [Fotos]);
    
    return (
        <>
            <div className = "historia">
                <div>
                <img alt="FotoPerfil" />
                </div>
                <p>AguanteFlecha</p>
            </div>
        </>
    )}

export default Historia;