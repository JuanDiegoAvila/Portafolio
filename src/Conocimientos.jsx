import './styles/Conocimientos.css'
import 'aos/dist/aos.css'

const Conocimientos = () => (
  <div id="conocimientos" className="conocimientos-container">
    <h1>Conocimientos En</h1>
    <div className="conocimientos-grafica">
      <div className="fila">
        <div className="titulo">PostgreSQL</div>
        <div
          data-aos="fade-right"
          data-aos-duration="5s"
          className="barra-1"
        />
      </div>
      <div className="fila">
        <div className="titulo">React</div>
        <div
          data-aos="fade-right"
          data-aos-duration="5s"
          className="barra-2"
        />
      </div>
      <div className="fila">
        <div className="titulo">Webpack</div>
        <div
          data-aos="fade-right"
          data-aos-duration="5s"
          className="barra-3"
        />
      </div>
      <div className="fila">
        <div className="titulo">Vite</div>
        <div
          data-aos="fade-right"
          data-aos-duration="5s"
          className="barra-4"
        />
      </div>
      <div className="fila">
        <div className="titulo">Babel</div>
        <div
          data-aos="fade-right"
          data-aos-duration="5s"
          className="barra-5"
        />
      </div>
      <div className="fila">
        <div className="titulo">ESLint</div>
        <div
          data-aos="fade-right"
          data-aos-duration="5s"
          className="barra-6"
        />
      </div>
      <div className="fila-x">
        <div>Principiante</div>
        <div>Intermedio</div>
        <div>Avanzado</div>
      </div>
    </div>
  </div>
)

export default Conocimientos
