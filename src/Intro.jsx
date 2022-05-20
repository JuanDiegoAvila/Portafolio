import './styles/Intro.css'
import Forest from '../public/img/forest-intro.jpg'

const Intro = () => (
  <div className='intro-container' style={{ backgroundImage: `url(${Forest})` }}>
    <h1> 
      Juan Diego Avila
    </h1>
    <div className='info-intro-back'>
      <div className='info-intro-text'>
        3er año en Ingeniería en Ciencias de la computación
        y Tecnologías de la información en la Universidad
        del Valle de Guatemala.
      </div>
    </div>
  </div>
)

export default Intro
