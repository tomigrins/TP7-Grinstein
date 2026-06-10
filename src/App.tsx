import { useState } from 'react'
import HistoriasBar from './componentes/HistoriasBar'
import Menu from './componentes/Menu'
import Sugerencias from './componentes/Sugerencia'
import Publicaciones from './componentes/Publicaciones'
import PubliAmpliada from './componentes/PubliAmpliada'
import './App.css'

function App() {
  const [cantLikes, setCantLikes] = useState(1000);
  const [publiAbierta, setpubliAbierta] = useState(false);
  return (
    <>
      <section className = "app-section">
        <div>
          <Menu/>
        </div>
          <div>
            <HistoriasBar/>
            <Publicaciones cantLikes={cantLikes} setCantLikes={setCantLikes} publiAbierta={publiAbierta} setpubliAbierta={setpubliAbierta} />
          </div>
        <div>
          <Sugerencias/>
        </div>
      </section>
      {publiAbierta && <PubliAmpliada cantLikes={cantLikes} setCantLikes={setCantLikes} setpubliAbierta={setpubliAbierta} />}
    </>
  )
}

export default App
