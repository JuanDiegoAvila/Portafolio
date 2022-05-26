import './styles/App.css'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Intro from './Intro'
import Lenguajes from './Lenguajes'
import Software from './Software'
import SobreMi from './SobreMi'
import Conocimientos from './Conocimientos'
import Proyectos from './Proyectos'
import Coneccion from './Coneccion'

const App = () => {
  useEffect(() => {
    Aos.init()
    document.getElementById('app').addEventListener('scroll', () => {
      Aos.refresh()
    })
  }, [])
  return (
    <div id="app" className="general-container">
      <Coneccion />
      <Intro />
      <SobreMi />
      <Lenguajes />
      <Software />
      <Conocimientos />
      <Proyectos />
    </div>
  )
}

export default App
