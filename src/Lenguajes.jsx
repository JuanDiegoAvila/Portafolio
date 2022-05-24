import './styles/Lenguajes.css'
import 'aos/dist/aos.css'
import CS from '../public/img/cs.png'
import CM from '../public/img/cp.png'
import CSS from '../public/img/css.png'
import HTML from '../public/img/html.png'
import Java from '../public/img/java.png'
import JavaScript from '../public/img/javascript.png'
import Python from '../public/img/python.png'
import SQL from '../public/img/sql.png'

const Lenguajes = () => {
  const lenguajes = ['Java', 'JavaScript', 'C++', 'C#', 'Python', 'SQL', 'HTML', 'CSS']
  const imagenes = [Java, JavaScript, CM, CS, Python, SQL, HTML, CSS]

  return (
    <div className="lenguajes-container">
      <h1>Lenguajes de Programación</h1>
      <div className="lenguajes-items-container">
        {
          lenguajes.map((lenguaje, index) => (
            <div data-aos="fade-up" key={lenguaje} className="lenguaje-individual">
              <div className="imagen-lenguaje" style={{ backgroundImage: `url(${imagenes[index]})` }} />
              <h2>{lenguaje}</h2>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Lenguajes
