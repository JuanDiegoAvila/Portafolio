import './styles/SobreMi.css'
import Botones from '../public/img/buttons.png'

const SobreMi = () => (
  <div id="sobre-mi" className="sobre-mi-container">
    <h1>Sobre Mí</h1>
    <div className="sobre-mi-texto">
      <div className="barra-sobre-mi">
        <div className="botones-salida" style={{ backgroundImage: `url(${Botones})` }} />
      </div>
      <p>
        PS C:\Users\JuanDiegoAvila\SobreMi
        {'>'}
        <span style={{ color: 'yellow' }}> npm </span>
        run dev
        <p style={{ color: '#5691ba' }}>
          vite v2.9.9
          <span style={{ color: '#14950d' }}>
            {' '}
            dev server running at:
          </span>
        </p>
        <p>
          {'> '}
          Local:
          {' '}
          <span style={{ color: '#5691ba' }}>
            http://localhost:
            <span style={{ color: '#57bfbf' }}>3000</span>
            /
          </span>

        </p>
        <p>
          {'> '}
          Network:
          {' '}
          <span style={{ color: '#6c6c6c' }}>
            use `--host` to expose
          </span>
        </p>

        <p>ready in 2014ms.</p>
      </p>
      <p> ----------------------------------------------------------------- </p>
      <h2>Experiencia</h2>
      <p>
        Estudio en la Universidad del Valle de Guatemala y estoy cursando mi 3er año
        en Ingeniería en Ciencias de la Computación y Tecnologías de la Información.
        Tengo experiencia en desarrollo y diseño de videojuegos, desarrollo web tanto
        de frontend como de backend y manejo
        de bases de datos. Trabajo como freelancer en la empresa RealizeService en la cual
        apoyo con el desarrollo de la página web de Miniso en Guatemala.
      </p>
      <h2>Intereses personales</h2>
      <p>
        Me gusta mucho la música y tocar piano en mis tiempos libres. Asimismo, laboralmente
        aspiro a estudiar en el exterior y tener tanta experiencia en distintas áreas de la
        tecnología como sea posible. Me llama mucho la atención el desarrollo web, especialmente
        el area de frontend.
      </p>
    </div>
  </div>
)

export default SobreMi
