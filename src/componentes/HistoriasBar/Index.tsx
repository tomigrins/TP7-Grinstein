import React from 'react';
import './HistoriasBar.css';
import Historia from '../Historia'

const HistoriasBar: React.FC<{ Fotos: any[] }> = ({ Fotos }) => {
    return (
        <div className='historias-bar'>
            <Historia Fotos={Fotos} />
            <Historia Fotos={Fotos} />
            <Historia Fotos={Fotos} />
            <Historia Fotos={Fotos} />
            <Historia Fotos={Fotos} />   
            <Historia Fotos={Fotos} />
        </div>
    )}

export default HistoriasBar;