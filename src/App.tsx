import { useState } from 'react'
import HistoriasBar from './componentes/HistoriasBar'
import Menu from './componentes/Menu'
import Sugerencias from './componentes/Sugerencia'
import Publicaciones from './componentes/Publicaciones'
import PubliAmpliada from './componentes/PubliAmpliada'
import { getFotos, getPublicaciones } from "./services/api";
import './App.css'


function App() {
  const [Fotos, setFotos] = useState([]);
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
          <Sugerencias/>
        </div>
      </section>
      {publiAbierta && <PubliAmpliada Fotos={Fotos} cantLikes={cantLikes} setCantLikes={setCantLikes} setpubliAbierta={setpubliAbierta} />}
    </>
  )
}

export default App

// Math.floor(Math.random() * Fotos.length)