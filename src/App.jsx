import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import CollapsibleExample from './components/navbar/navbar'
import Footer from "./components/footer/footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <CollapsibleExample/>
          {/* Contenido de prueba */}
      <div className="content">
        <h1>Bienvenido a DalePlay</h1>
        <p>Explora nuestro catálogo de películas y series.</p>
      </div>

          <Footer/>

          
          
    </>
  )
}

export default App
