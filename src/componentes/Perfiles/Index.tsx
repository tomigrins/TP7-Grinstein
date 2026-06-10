import React from 'react';
import './Perfiles.css';
const DavoImage = 'https://cataas.com/cat?width=64&height=64'

const Perfiles: React.FC = () => {
    return (
        <section className="perfil">
        <div>
                <img src={DavoImage} alt="FotoPerfil" />
        </div>

            <div>
            <h4>HolaSoyFanFlecha</h4>
            <h4>Follows you</h4>
            </div>
        </section>
    )}

export default Perfiles;