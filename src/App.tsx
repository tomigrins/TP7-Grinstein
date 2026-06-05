import { useState } from 'react'
import HistoriasBar from './componentes/HistoriasBar'
import Menu from './componentes/Menu'
import Sugerencias from './componentes/Sugerencia'
import Publicaciones from './componentes/Publicaciones'
import PubliAmpliada from './componentes/PubliAmpliada'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className = "app-section">
        <div>
          <Menu/>
        </div>
          <div>
            <HistoriasBar/>
            <Publicaciones/>
          </div>
        <div>
          <Sugerencias/>
        </div>
      </section>
      <PubliAmpliada></PubliAmpliada>
    </>
  )
}

export default App
