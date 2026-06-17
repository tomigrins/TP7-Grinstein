import { useState, useEffect } from 'react'
import HistoriasBar from './componentes/HistoriasBar'
import Menu from './componentes/Menu'
import Sugerencias from './componentes/Sugerencia'
import Publicaciones from './componentes/Publicaciones'
import PubliAmpliada from './componentes/PubliAmpliada'
import { getFotos } from "./services/api";
import type { Foto } from "./services/api";
import './App.css'


function App() {
  const [Fotos, setFotos] = useState<Foto[]>([]);
  const [cantLikes, setCantLikes] = useState(1000);
  const [publiAbierta, setpubliAbierta] = useState(false);

  useEffect(() => {
    getFotos().then((data) => setFotos(data));
  }, []);

  return (
    <>
      <section className = "app-section">
        <div>
          <Menu/>
        </div>
          <div>
            <HistoriasBar Fotos={Fotos} />
            <Publicaciones Fotos ={Fotos} cantLikes={cantLikes} setCantLikes={setCantLikes} publiAbierta={publiAbierta} setpubliAbierta={setpubliAbierta} />
          </div>
        <div>
          <Sugerencias Fotos={Fotos} />
        </div>
      </section>
      {publiAbierta && <PubliAmpliada Fotos={Fotos} cantLikes={cantLikes} setCantLikes={setCantLikes} setpubliAbierta={setpubliAbierta} />}
    </>
  )
}

export default App

// Math.floor(Math.random() * Fotos.length)