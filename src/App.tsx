import { useState } from 'react'
import HistoriasBar from './componentes/HistoriasBar.tsx'
import Menu from './componentes/Menu.tsx'
import Sugerencias from './componentes/Sugerencia.tsx'
import Publicaciones from './componentes/Publicaciones.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <HistoriasBar />
      <Publicaciones />
      <Sugerencias />
    </>
  )
}

export default App
