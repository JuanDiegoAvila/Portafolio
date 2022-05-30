import './styles/Proyectos.css'
import 'aos/dist/aos.css'

const Proyectos = () => (
  <div className="proyectos-container">
    <h1 className="proyectos-titulo">Proyectos</h1>
    <div className="proyecto-container">
      <h1>Unity Pixel Perfect</h1>
      <p>
        Es un proyecto que desarrollé con React utilizando
        Webpack y Babel. Asimismo, trabajé con express
        para correr la página utilizando Server-side rendering (SSR).
        Es una copia pixel perfect, no responsive en una resolucion
        de 1920x1080,  de una versión de la
        {' '}
        <a className="links-paginas" href="https://unity.com/es" target="_blank" rel="noopener noreferrer">página principal de Unity</a>
        .
      </p>
      <div className="buttons-container">
        <a className="button-page" href="https://jade-bunny-e70761.netlify.app" target="_blank" rel="noopener noreferrer">Ir a proyecto</a>
        <a className="button-page" href="https://github.com/JuanDiegoAvila/Proyecto1_Pagina_web" target="_blank" rel="noopener noreferrer">Ir a repositorio</a>
      </div>
    </div>
    <div className="proyecto-container">
      <h1>Calculadora</h1>
      <p>
        Es una calculadora desarrollada con react en la cual
        se trabajaron con ciertas restricciones. Entre estas se encuentra
        que la pantalla no puede mostrar más de 9 números, ya que de lo contrario
        muestra que hay un error. Tiene las operaciones de suma, resta,
        multiplicación, división, módulo. Funciona tanto con enteros como
        con números decimales.
      </p>
      <div className="buttons-container">
        <a className="button-page" href="https://keen-pixie-fa2fc1.netlify.app" target="_blank" rel="noopener noreferrer">Ir a proyecto</a>
        <a className="button-page" href="https://github.com/JuanDiegoAvila/CalculadoraJS" target="_blank" rel="noopener noreferrer">Ir a repositorio</a>
      </div>
    </div>
    <div className="proyecto-container">
      <h1>CSS Only</h1>
      <p>
        Es un proyecto en el que utilicé unicamente css
        y html para poder recrear una parte de la portada del libro
        de Michael Scott,
        <a className="links-paginas" href="https://3.bp.blogspot.com/-S_7nVr1z1jQ/V4g35FZYEDI/AAAAAAAAA4g/KLaF3IMiMucQTj_ZXjeaW7NwYrmOZinKgCLcB/s1600/El+Alquimista.jpg" target="_blank" rel="noopener noreferrer">el alquimista</a>
      </p>
      <div className="buttons-container">
        <a className="button-page" href="https://glistening-sunflower-f0d3dd.netlify.app" target="_blank" rel="noopener noreferrer">Ir a proyecto</a>
        <a className="button-page" href="https://github.com/JuanDiegoAvila/UVG_CSS" target="_blank" rel="noopener noreferrer">Ir a repositorio</a>
      </div>
    </div>
    <div className="proyecto-container">
      <h1>Cowboy&apos;s Maze</h1>
      <p>
        Proyecto desarrollado con React en el que, utilizando estados,
        se practicó la animación de sprites y de componentes dentro de un juego
        que consiste en un baquero que esta buscando un cactus. Las dimensiones del
        laberinto pueden cambiar segun lo que el usuario indique y la forma del mismo se recibe
        por medio de un servidor en forma de JSON para luego ser transformado.
      </p>
      <div className="buttons-container">
        <a className="button-page" href="https://legendary-centaur-1b1534.netlify.app" target="_blank" rel="noopener noreferrer">Ir a proyecto</a>
        <a className="button-page" href="https://github.com/JuanDiegoAvila/UVG_LaberintoJS" target="_blank" rel="noopener noreferrer">Ir a repositorio</a>
      </div>
    </div>
    <div className="proyecto-container">
      <h1>SAO - Memoria</h1>
      <p>
        Juego de memoria basado en personajes del anime Sword Art Online (SAO)
        utilizando javascript.
      </p>
      <div className="buttons-container">
        <a className="button-page" href="https://superb-monstera-c7c389.netlify.app" target="_blank" rel="noopener noreferrer">Ir a proyecto</a>
        <a className="button-page" href="https://github.com/JuanDiegoAvila/UVG_ReactMemoria" target="_blank" rel="noopener noreferrer">Ir a repositorio</a>
      </div>
    </div>
  </div>
)

export default Proyectos
