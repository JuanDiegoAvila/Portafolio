import './styles/Coneccion.css'
import github from '../public/img/github.png'
import linkedin from '../public/img/linkedin.png'

const Coneccion = () => (
  <div className="coneccion-container">
    <div className="icons-container">
      <a href="https://github.com/JuanDiegoAvila" target="_blank" rel="noopener noreferrer">
        <div className="image" style={{ backgroundImage: `url(${github})` }} />
      </a>
      <a href="https://www.linkedin.com/in/juan-diego-avila-sagastume-2427251a0" target="_blank" rel="noopener noreferrer">
        <div className="image" style={{ backgroundImage: `url(${linkedin})` }} />
      </a>
    </div>
  </div>
)

export default Coneccion
