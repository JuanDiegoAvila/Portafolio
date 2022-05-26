import './styles/Proyectos.css'

const Proyectos = () => (
  <div className="proyectos-container">
    <h1 className="proyectos-titulo">Proyectos</h1>
    <div className="proyecto-container">
      <h1>Unity Pixel Perfect</h1>
      <p>
        Es un proyecto que desarrollé con React utilizando
        Webpack y Babel. Asimismo, trabajé con express
        para correr la página utilizando Server-side rendering (SSR).
        Es una copia pixel perfect de una versión de la {' '}
        <a className="links-paginas" href="https://unity.com/es" target="_blank" rel="noopener noreferrer">página principal de Unity</a>
        .
      </p>
      <div className="buttons-container">
        <a className="button-page" href="https://jade-bunny-e70761.netlify.app" target="_blank" rel="noopener noreferrer">Ir a proyecto</a>
        <a className="button-page" href="https://github.com/JuanDiegoAvila/Proyecto1_Pagina_web" target="_blank" rel="noopener noreferrer">Ir a repositorio</a>
      </div>
    </div>
  </div>
)

export default Proyectos
