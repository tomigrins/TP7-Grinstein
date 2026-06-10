import React from 'react';
import './Menu.css';
import LogoIG from '/wwwroot/imagenes/logo.png';
const DavoImage = 'https://cataas.com/cat?width=64&height=64'
import Like from '/wwwroot/imagenes/like.png';
import Home from '/wwwroot/imagenes/Home.png';
import Lupa from '/wwwroot/imagenes/Lupa.png';
import Brujula from '/wwwroot/imagenes/Brujula.png';
import Reels from '/wwwroot/imagenes/Reels.png';
import Msjs from '/wwwroot/imagenes/msjs.png';
import Create from '/wwwroot/imagenes/Create.png';
import More from '/wwwroot/imagenes/More.png';



const Menu: React.FC = () => {
    return (
        <>
        <div className="menu-logo">
            <img src={LogoIG} alt="Logo" />
        </div>

        <section className="menu-list">
            <div>
                <img src={Home} alt="Home" />
                <h2>Home</h2>
            </div>
            <div>
                <img src={Lupa} alt="Search" />
                <h2>Search</h2>
            </div>
            <div>
                <img src={Brujula} alt="Explore" />
                <h2>Explore</h2>
            </div>
            <div>
                <img src={Reels} alt="Reels" />
                <h2>Reels</h2>
            </div>
            <div>
                <img src={Msjs} alt="Messages" />
                <h2>Messages</h2>
            </div>
            <div>
                <img src={Like} alt="Notifications" />
                <h2>Notifications</h2>
            </div>
            <div>
                <img src={Create} alt="Create" />
                <h2>Create</h2>
            </div>
            <div>
                <img src={DavoImage} alt="Davo" id = "redondeo"/>
                <h2>Profile</h2>
            </div>
            <div>
                <img src={More} alt="More" />
                <h2>More</h2>
            </div>
        </section>
        </>
    )}

export default Menu;