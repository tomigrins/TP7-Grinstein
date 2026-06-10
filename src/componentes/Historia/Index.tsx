import React from 'react';
import './Historia.css';
const DavoImage = 'https://cataas.com/cat?width=64&height=64'

const Historia: React.FC = () => {
    return (
        <>
            <div className = "historia">
                <div>
                <img src={DavoImage} alt="FotoPerfil" />
                </div>
                <p>AguanteFlecha</p>
            </div>
        </>
    )}

export default Historia;